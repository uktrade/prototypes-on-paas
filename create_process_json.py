import json
import os

processes = {"apps": []}
port = 9000
directory = os.path.dirname(__file__)
prototypes_folder = os.path.join(directory, "prototypes")

for prototype in os.listdir(prototypes_folder):
    specific_prototype_folder = os.path.join(prototypes_folder, prototype)
    if os.path.isdir(specific_prototype_folder):
        config_file = os.path.join(specific_prototype_folder, "app", "config.json")
        if os.path.isfile(config_file):
            with open(config_file, "r") as file:
                config = json.load(file)
                specific_prototype_name = config.get("serviceName", prototype)

            # now we'll also disable https redirection and basic authentication
            # for the prototype
            config["useAuth"] = False
            config["useHttps"] = False

            with open(config_file, "w") as file:
                json.dump(config, file)

            port += 1

            # then we write it to the process.json dictionary
            processes["apps"].append(
                {
                    "name": specific_prototype_name,
                    "cwd": f"./prototypes/{prototype}",
                    "script": "npm run start",
                    "env": {
                        "PORT": port,
                        "NODE_ENV": "production",
                        "PASSWORD": "password",
                    },
                    "url_path": prototype,
                }
            )

# writing the completed processes file to JSON
with open("process.json", "w") as jsonFile:
    json.dump(processes, jsonFile)
