import PyPDF2
import os
from django.conf import settings # correct way
import textract


# This function will extract and return the pdf file text content.
def getPdfText(filename):
    base_dir = settings.BASE_DIR
    dataform = filename

    # Open the pdf file in read binary mode.
    fileObject = open(dataform, 'rb')

    # Create a pdf reader .
    pdfFileReader = PyPDF2.PdfFileReader(fileObject)

    # Get total pdf page number.
    totalPageNumber = pdfFileReader.numPages

    # Print pdf total page number.
    print('This pdf file contains totally ' + str(totalPageNumber) + ' pages.')

    currentPageNumber = 0
    text = ''

    # Loop in all the pdf pages.
    while(currentPageNumber < totalPageNumber ):

        # Get the specified pdf page object.
        pdfPage = pdfFileReader.getPage(currentPageNumber)

        # Get pdf page text.
        text = text + pdfPage.extractText()

        # Process next page.
        currentPageNumber += 1

    if(text == ''):
        # If can not extract text then use ocr lib to extract the scanned pdf file.
        text = textract.process(dataform, encoding='utf-8')
    
    return text