from django.conf import settings
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
        if path and "pop_static" in path:
            static_path = path.replace("pop_static/", "")
            return serve(request, static_path, document_root=settings.STATIC_ROOT)

        elif request.POST and "pop_authentication_flag" in request.POST:
            if entered_password := request.POST.get("password", None):
                if (
                    hashlib.sha256(entered_password.encode()).hexdigest()
                    == settings.HASHED_PASSWORD
                ):
                    request.session["authenticated"] = True
                    return self.return_index_page(request)
                else:
                    request.session["authenticated"] = False
                    return self.return_index_page(
                        request, extra_context={"failed_authentication": True}
                    )

        elif not request.session.get("authenticated", False):
            return self.return_index_page(request)

        elif path and "pop_static" not in path:
            return super().dispatch(request, path)
        else:
            return self.return_index_page(request)

    @property
    def upstream(self):
        if path := self.kwargs["path"]:
            split_path = path.split("/")
            prototype_name = split_path[0]

            if prototype := prototypes.get(prototype_name, None):
                self.request.session["prototype_name"] = prototype_name
                return f"http://localhost:{prototype['env']['PORT']}"

            if stored_prototype := self.request.session.get("prototype_name", None):
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
