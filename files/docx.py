import docx

def getText(filename):
    doc = docx.Document(filename)
    fullText = []
    for para in doc.paragraphs:
        fullText.append(para.text)
    print('\n'.join(fullText))
    return '\n'.join(fullText)

# import textract
# def getText(filename):
#     text = textract.process(filename, extension='docx')
#     return text