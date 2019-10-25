import os
from django.conf import settings
import json

def readJSON(filepath):
    # base_dir = settings.BASE_DIR
    # dataform = os.path.join(base_dir, filepath[1:])
    with open(filepath, encoding='utf-8', errors='ignore') as json_data:
        data = json.load(json_data, strict=False)
        return data
