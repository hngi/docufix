function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

    $('#uploadForm').submit(function(e) {
        var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();

        var bar = $('.bar');
        var progress = $('.progess')
        var percent = $('.progress-bar');
        var status = $('#status');
        $(".progress").attr("style", "display: block" );
        $("#text").attr("style", "display: block" );
    
          e.preventDefault();

          if(  ($('#upload1').val() == '') ){
            console.log('Select a file to upload')
            // console.log(response)
            toastr.error('Select a file to upload')

          }else{ 
        
            $form = $(this)
            var formData = new FormData(this);
            console.log(formData);
            formData.append('file', $('#upload1')[0].files[0]);
            $.ajax({
              xhr: function() {
                var xhr = new window.XMLHttpRequest();
            
                xhr.upload.addEventListener("progress", function(evt) {
                  if (evt.lengthComputable) {
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);
                    var percentVal = '0%';
                    percent.width(`${percentComplete}%`);
                    percent.text(`${percentComplete}%`);
                    console.log(percentComplete);
            
                    if (percentComplete === 100) {
                      percent.text('Upload Completed');
            
                    }
            
                  }
                }, false);
            
                return xhr;
              },
                url: "https://docufix.pythonanywhere.com/upload/delimeter/",
                type: "POST",
                data: formData,
                beforeSend: function(xhr, settings) {
                    if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                        xhr.setRequestHeader("X-CSRFToken", csrftoken);
                    }
                },
                success: function(response){
                    console.log('success');
                    console.log(response);
                    $(".progress").attr("style", "display: none " );
                    progress.remove()
                    $('#textareaBefore').val(response.file1)
                    toastr.success("Content Loaded Successfully");
                    
                },
                error: function(){
                    $(".progress").attr("style", "display: none " );
                    toastr.error("An Error Occured");
                    console.log("Error Occured");
                    
                },
                cache: false,
                contentType: false,
                processData: false
                
            })
        }
    })
        
       
    
    $('#removeDuplicate').on('click', function (e) {
      document.getElementById("shareBtn").style.display = "block"
        e.preventDefault();
        let separators = [];
        let firstString = $('#textareaBefore').val()
        let delimiter = $('#delimiter').val()
    // let firstStringSet = new Set(firstString.split(new RegExp(separators.join('|'), 'g')))
    // let secondStringSet = new Set(secondString.split(new RegExp(separators.join('|'), 'g')))

    // console.log(secondStringSet);
    let firstStringSet = new Set(firstString.split(delimiter))
    console.log(firstStringSet)

    let firstStringArray = [...firstStringSet]
    $('#textareaAfter').val(firstStringArray);
    $("#textareaDifferences").val(firstStringArray);
    $("#textareaDifferences").html(firstStringArray);

    
    // let secondStringArray = secondString.split(new RegExp(separators.join('|'), 'g'))
    // // $('#result').html(' ')
    // $("#text").attr('style',  'display:block');
        
    // secondStringSet.forEach( word => {

    //     let resultA = firstStringArray.filter(newWord => newWord === word  );
    //     let resultB = secondStringArray.filter( newWord => newWord === word );
    //     if (resultB != 0 && resultA != 0 ){
    //     console.log( `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times`);
      
      
    //     $('#result').append(
            
    //         `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times <br>`)
    
    // }
    

  
    // });
  

    

})


