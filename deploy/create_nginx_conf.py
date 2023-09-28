import nginx
import os
import json

parent_directory = os.path.dirname(os.path.dirname(__file__))

c = nginx.loadf('nginx_template.conf')
http = nginx.Http()
s = nginx.Server()
s.add(
     nginx.Key('listen', os.getenv('LISTENING_PORT')),
     nginx.Key('server_name', 'localhost'),
     nginx.Location('= /health',
          nginx.Key('allow', 'all'),
          nginx.Key('access_log', 'off'),
          nginx.Key('default_type', 'text/plain'),
          nginx.Key('return', '200 OK')
     ),
 )

with open("process.json", "r") as process_file:
    process_file = json.load(process_file)

    for process in process_file["apps"]:
        s.add(nginx.Location(
            f"= /{process['name']}",
            nginx.Key('proxy_pass', f"http://localhost:{process['env']['PORT']}/"),
        ))

http.add(s)
c.add(http)
nginx.dumpf(c, "nginx.conf")