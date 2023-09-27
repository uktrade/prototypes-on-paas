import json
import os

processes = {"apps": []}
port = 9000
parent_directory = os.path.dirname(os.path.dirname(__file__))

with open(os.path.join(parent_directory, "prototypes.json"), "r") as file:
    prototypes = json.load(file)

    for prototype in prototypes:
        path = prototype["path"]
        port += 1

        processes["apps"].append({
            "name": prototype["name"],
            "cwd": f"./prototypes/{path}",
            "script": "npm run dev",
            "env": {
                "PORT": port,
                "NODE_ENV": "development"
            }
        })

# writing the completed processes file to JSON
with open(os.path.join(parent_directory, "process.json"), "w") as jsonFile:
    json.dump(processes, jsonFile)