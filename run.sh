#!/bin/bash -e

# create process.json and nginx.conf
python create_process_json.py

# Installing local packages for each prototype
for dir in prototypes/*; do
    (
      echo "Installing local packages for ${dir:P}" &&
      cd $dir &&
      npm install
    )
done

# Start pm2
pm2 start process.json

# Start webserver
cd prototypes_router && python ./manage.py migrate && ./manage.py collectstatic --noinput && gunicorn core.wsgi --bind 0.0.0.0:8080 --capture-output --config core/gunicorn.py
