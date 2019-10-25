from .docx import getText
from .pdf import getPdfText
from .txt import get_txt_word
from .csv import readCSV
from .jsonReader import readJSON
from .xmlReader import xmlViewer


def readFile(file1_extension, file1_path, file):
    print(file1_extension, file1_path)
    allowed_files = ['.docx', '.pdf', '.txt', '.csv', '.json', '.xml']
    # filedata = {}
    if file1_extension in allowed_files:
        if file1_extension == '.docx' :
            filedata = getText(file1_path)
        if file1_extension == '.pdf':
            filedata = getPdfText(file1_path)
        if file1_extension == '.txt':
            filedata = get_txt_word(file1_path)
        if file1_extension == '.csv':
            filedata = readCSV(file1_path)
        if file1_extension == '.json':
            filedata = readJSON(file1_path)
        if file1_extension == '.xml':
            filedata = xmlViewer(file1_path)

        # if file2_extension == 'docx' :
        #     filedata['file2']= getText(file2_path)
        # if file2_extension == 'pdf':
        #     filedata['file2']= getPdfText(file2_path)
        # if file2_extension == 'txt':
        #     filedata['file2'] = get_txt_word(file2_path)
        # if file2_extension == 'csv':
        #     filedata['file2'] = readCSV(file2_path)
        # if file2_extension == 'json':
        #     filedata['file2'] = readJSON(file2_path)
        # if file2_extension == 'xml':
        #     filedata['file2'] = xmlViewer(file2_path)
        return filedata