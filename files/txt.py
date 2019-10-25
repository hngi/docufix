import os
from django.conf import settings
import csv


def get_txt_word(filename):
    # base_dir = settings.BASE_DIR
    # dataform = os.path.join(base_dir, filename[1:])
    with open(filename, 'r') as reader:
        print(filename)
        word = ''
        for line in reader.readlines():
            word+=line
        return word 