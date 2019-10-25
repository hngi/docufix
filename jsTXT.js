


function txt(){
    
     var sourceHTML = document.getElementById("textareaDifferences").textContent;
     var fileName = document.getElementById('saveAs').value;
     var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
     var fileDownload = document.createElement("a");
     document.body.appendChild(fileDownload);
     fileDownload.href = source;
     fileDownload.download = fileName + " " + '.txt';
     fileDownload.click();
     document.body.removeChild(fileDownload);
  }