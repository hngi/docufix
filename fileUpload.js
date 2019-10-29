 function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


function preloader(){
    let textfieldarea = $("#text");
    textfieldarea.prepend(
      `
      <div id="preloader">  
        <div class="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-secondary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-info" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>

        </div>
     </div>
      `
    )

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

  $("#uploadUrlBtn").click(function(e){

    e.preventDefault();
    $("#uploadForm").attr("style", "display: none")
    $('#uploadUrlForm').attr("style", "display: block")
  })

  $("#uploadFilesBtn").click(function(e){
    e.preventDefault();
    $("#uploadForm").attr("style", "display: block")
    $('#uploadUrlForm').attr("style", "display: none")

  })



   $('#uploadForm').submit(function(e) {
        var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
        var bar = $('.bar');
        var progress = $('.progess')
        var percent = $('.progress-bar');
        var status = $('#status');
        $(".progress").attr("style", "display: block" );
    
          e.preventDefault();

          if(  ($('#upload1').val() == '') || ($('#upload1').val() == '' ) ){
            console.log('One of the input files is missing')
            // console.log(response)
            toastr.error('One of the input files is missing')

          }else{ 
        
            $form = $(this)
            var formData = new FormData(this);
            console.log(formData);
            formData.append('file', $('#upload1')[0].files[0]);
            formData.append('file', $('#upload2')[0].files[0]);
            console.log($("#percentageS"));
            $("#text").attr("style", "display: block" );
        
        
        
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
                url: "https://docufix.pythonanywhere.com/upload/",
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
                    $('#textareaAfter').val(response.file2)
                    toastr.success("Content Loaded Successfully");
                    
                },
                error: function(response){
                    console.log(response)
                    toastr.error("An Error Occured");
                    console.log("Error Occured");
                    $(".progress").attr("style", "display: none " );
                    
                },
                cache: false,
                contentType: false,
                processData: false
                
            })
        }
    })



    $('#uploadUrlForm').submit(function(e) {
      var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
      var bar = $('.bar');
      var progress = $('.progess')
      var percent = $('.progress-bar');
      var status = $('#status');
      $(".progress").attr("style", "display: block" );
  
        e.preventDefault();

        if(  ($('#url1').val() == '') || ($('#url2').val() == '' ) ){
          console.log('One of the input file is missing')
          // console.log(response)
          toastr.error('One of the input file is missing')

        }else{ 
      
          $form = $(this)
          var formData = new FormData(this);
          console.log(formData);
          formData.append('url1', $('#url1').val());
          formData.append('url2', $('#url2').val());
          console.log($('#url1').val());
          
          console.log(formData);

          console.log($("#percentageS"));
          $("#text").attr("style", "display: block" );
      
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
              url: "https://docufix.pythonanywhere.com/upload/url/",
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
                  $('#textareaAfter').val(response.file2)
                  toastr.success("Content Loaded Successfully");
                  
              },
              error: function(response){
                  // console.log(response)
                  toastr.error(response.responseJSON);
                  console.log("Error Occured");
                  $(".progress").attr("style", "display: none " );
                  
              },
              cache: false,
              contentType: false,
              processData: false
              
          })
      }
  })






















        
       
    
    $('#compare').on('click', function (e) {
      document.getElementById("shareBtn").style.display = "block"
        e.preventDefault();

     let separators = [' ', '\\\+', '-', '\\\(', '\\\)','\\*', '/', '\\\.', '\\\?'];
    let firstString = $('#input1').val()
    let secondString = $('#input2').val()
    let firstStringSet = new Set(firstString.split(new RegExp(separators.join('|'), 'g')))
    let secondStringSet = new Set(secondString.split(new RegExp(separators.join('|'), 'g')))

    console.log(secondStringSet);
    

    let firstStringArray = firstString.split(new RegExp(separators.join('|'), 'g'))
    console.log(firstStringArray);
    
    let secondStringArray = secondString.split(new RegExp(separators.join('|'), 'g'))
    // $('#result').html(' ')
    $("#text").attr('style',  'display:block');
        
    secondStringSet.forEach( word => {

        let resultA = firstStringArray.filter(newWord => newWord === word  );
        let resultB = secondStringArray.filter( newWord => newWord === word );
        if (resultB != 0 && resultA != 0 ){
        console.log( `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times`);
      
      
        $('#result').append(
            
            `${word} appeared in First document ${resultA.length} time and it appeared in Second document ${resultB.length} times <br>`)
    
    }
    

  
    });
  

    

})


