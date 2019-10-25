import os
import xml.etree.ElementTree as ET
from django.conf import settings


def xmlViewer(filepath):
    base_dir = settings.BASE_DIR
    tree = ET.parse(filepath)
    root = tree.getroot()
    return root.tag