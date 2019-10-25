import os
from django.conf import settings
import csv

def readCSV(filepath):
    base_dir = settings.BASE_DIR
    with open(filepath, encoding="utf8", errors='ignore' ) as csvfile:
        readCSV = csv.reader(csvfile, delimiter=',')
        for row in readCSV:
            return row
