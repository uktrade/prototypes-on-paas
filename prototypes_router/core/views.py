from django.conf import settings
from django.shortcuts import redirect
from django.template.response import SimpleTemplateResponse
from django.views.static import serve
from revproxy.views import ProxyView
import hashlib

prototypes = settings.PROTOTYPES


class ReverseProxyRouter(ProxyView):
    def return_index_page(self, request, extra_context=None):
        context = {
            "prototypes": prototypes,
            "authenticated": self.request.session.get("authenticated", False),
        }
        context.update(extra_context or {})
        return SimpleTemplateResponse(template="index.html", context=context)

    def dispatch(self, request, path):
        if request.POST and "pop_authentication_flag" in request.POST:
            # the user is trying to authenticate
            if entered_password := request.POST.get("password", None):
                if (
                    hashlib.sha256(entered_password.encode()).hexdigest()
                    == settings.HASHED_PASSWORD
                ):
                    # password matches, let them in
                    request.session["authenticated"] = True
                    return redirect("/")
                else:
                    # password doesn't match, take them back home and show them the error
                    request.session["authenticated"] = False
                    return self.return_index_page(
                        request, extra_context={"failed_authentication": True}
                    )

        elif not request.session.get("authenticated", False):
            # the user is not authenticated, take them to the password-entry page
            return self.return_index_page(request)

        if path and "pop_static" in path:
            # this is a request for a static file from the POP Django app
            static_path = path.replace("pop_static/", "")
            return serve(request, static_path, document_root=settings.STATIC_ROOT)

        elif path and "pop_static" not in path:
            # authenticated user is trying to access a prototype's page
            return super().dispatch(request, path)
        else:
            # let's just take them to the index page, what's happened here?
            return self.return_index_page(request)

    @property
    def upstream(self):
        if path := self.kwargs["path"]:
            split_path = path.split("/")
            prototype_name = split_path[0]

            if prototype := prototypes.get(prototype_name, None):
                # we have a prototype name in the URL, let's store it in the session
                # this needs to happen first in case they're trying to access a different prototype
                self.request.session["prototype_name"] = prototype_name
                # figure out the port number from the prototype dict, then return the URL
                return f"http://localhost:{prototype['env']['PORT']}"

            if stored_prototype := self.request.session.get("prototype_name", None):
                # we have a prototype name in the session, let's use that
                return f"http://localhost:{prototypes[stored_prototype]['env']['PORT']}"

            return None
        else:
            # we're just trying to go to /
            return None

    def _created_proxy_response(self, request, path):
        request_payload = request.body
        path = self.get_quoted_path(path)

        request_url = self.get_upstream(path)
        if path not in prototypes:
            if request_url.endswith("/"):
                request_url = f"{request_url}{path}"
            else:
                request_url = f"{request_url}/{path}"

        return self.http.urlopen(
            request.method,
            request_url,
            redirect=False,
            retries=self.retries,
            headers=self.request_headers,
            body=request_payload,
            decode_content=False,
            preload_content=False,
        )
