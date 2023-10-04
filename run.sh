#!/bin/bash -e

# create process.json and nginx.conf
python create_process_json.py

echo "Starting nginx and pm2"

# Start pm2
pm2 start process.json --no-daemon
