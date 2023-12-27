import sys

from django_log_formatter_ecs import ECSFormatter

from .base import *  # noqa

SECURE_HSTS_SECONDS = 360
SECURE_HSTS_PRELOAD = True


LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "ecs_formatter": {
            "()": ECSFormatter,
        },
    },
    "handlers": {
        "ecs": {
            "formatter": "ecs_formatter",
            "class": "logging.StreamHandler",
            "stream": sys.stdout,
        },
    },
    "loggers": {"": {"handlers": ["ecs"], "level": "INFO"}},
}
