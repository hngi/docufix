import os
import requests 
from urllib.parse import urlparse
from os.path import splitext, basename

from random_word import RandomWords

from django.conf import settings

from .fileReading import readFile




def confirmFile(url):
    allowed_files = ['.docx', '.pdf', '.txt', '.csv', '.json', '.xml']
    file_url = url
    disassembled = urlparse(file_url)
    filename, file_ext = splitext(basename(disassembled.path))

    if file_ext in allowed_files:

        for file_type in allowed_files:
            if file_ext == file_type: 
                return downloadFile(filename, file_url, file_type)
    else: 
        return 'File type not allowed'
   


def downloadFile(filename, file_url, file_type):
    media_dir = settings.MEDIA_ROOT  
    # random_caller = RandomWords()
    # random_word = random_caller.get_random_word()
    filename_ = filename+file_type
    filename = os.path.join(media_dir+'/'+filename_)
    r = requests.get(file_url, stream=True) 
    with open(filename,"wb") as file: 
        for chunk in r.iter_content(chunk_size=1024): 
            if chunk:
                 file.write(chunk) 
        # print(readFile(file_type, filename, filename_))
    return readFile(file_type, filename, filename_)
            



