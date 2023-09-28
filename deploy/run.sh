#!/bin/bash -e

python create_process_json.py
python create_nginx_conf.py


pm2 delete all
pm2 start process.json

nginx