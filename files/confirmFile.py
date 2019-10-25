import os
import requests 
from urllib.parse import urlparse
from os.path import splitext, basename



def confirmFileType(url):
    allowed_files = ['.docx', '.pdf', '.txt', '.csv', '.json', '.xml']
    file_url = url
    disassembled = urlparse(file_url)
    filename, file_ext = splitext(basename(disassembled.path))

    if file_ext in allowed_files:
        return True