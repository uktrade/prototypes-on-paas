#!/bin/bash -e

cd ${POP_DIRECTORY}/deploy

python create_process_json.py
python create_nginx_conf.py


cd ${POP_DIRECTORY}
pm2 delete all
pm2 start process.json

nginx