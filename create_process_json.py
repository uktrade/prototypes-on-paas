import json
import os
from glob import glob

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
                specific_prototype_name = config["serviceName"]

            port += 1

            processes["apps"].append({
                "name": specific_prototype_name,
                "cwd": f"./prototypes/{prototype}",
                "script": "npm run dev",
                "env": {
                    "PORT": port,
                    "NODE_ENV": "development"
                }
            })

# writing the completed processes file to JSON
with open("process.json", "w") as jsonFile:
    json.dump(processes, jsonFile)
