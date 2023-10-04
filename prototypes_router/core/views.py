from django.template.response import SimpleTemplateResponse
from django.views.generic import TemplateView
from revproxy.views import ProxyView
from django.conf import settings

prototypes = settings.prototypes

class ReverseProxyRouter(ProxyView):

    def dispatch(self, request, path):
        if path := self.kwargs["path"]:
            return super().dispatch(request, path)
        else:
            return SimpleTemplateResponse(
                template="index.html",
                context={
                    "prototypes": prototypes
                }
            )


    @property
    def upstream(self):

        if path := self.kwargs["path"]:
            split_path = path.split("/")
            prototype_name = split_path[0]

            if prototype := prototypes.get(prototype_name, None):
                self.request.session["prototype_name"] = prototype_name
                return f"http://localhost:{prototype['port']}"

            if stored_prototype := self.request.session.get("prototype_name", None):
                return f"http://localhost:{prototypes[stored_prototype]['port']}"

            return None
        else:
            # we're just trying to go to /
            return None
    def _created_proxy_response(self, request, path):
        request_payload = request.body
        path = self.get_quoted_path(path)

        request_url = self.upstream
        if path not in prototypes:
            request_url = f"{request_url}/{path}"

        return self.http.urlopen(
            request.method,
            request_url,
            redirect=False,
            retries=self.retries,
            headers=self.request_headers,
            body=request_payload,
            decode_content=False,
            preload_content=False
        )
