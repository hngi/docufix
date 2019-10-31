const API_publicKey = "FLWPUBK-8e718cdac8be88c4af3b60794051604b-X";

function payWithRave() {
    const email = document.getElementById('email').value;
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    // const amounts = document.getElementsByName('amount');
    const amount = 10;    
    // let amount_value;
    // for(var i = 0; i < amounts.length; i++){
    //     if(amounts[i].checked){
    //         amount_value = amounts[i].value;
    //     }
    // }

    // const amount = amount_value || Number(document.getElementById('amount').value);
    var x = getpaidSetup({
        PBFPubKey: API_publicKey,
        customer_email: email,
        customer_firstname: firstname,
        customer_lastname: lastname,
        amount: amount,
        customer_phone: phone,
        currency: "USD",
        country: "United States",
        txref: "rave-123456",
        onclose: function() {},
        callback: function(response) {
            var txref = response.tx.txRef; // collect txRef returned and pass to a server page to complete status check.
            console.log("This is the response returned after a charge", response);
            if (
                response.tx.chargeResponseCode == "00" ||
                response.tx.chargeResponseCode == "0"
            ) {
                // window.location.replace('file:///Users/nedurobert/Documents/SE/projects/startNG/EducateAll-Foundation/PaymentConfirmation.html')// redirect to a success page
            } else {
                // redirect to a failure page.
            }

            x.close(); // use this to close the modal immediately after payment.
        }
    });
}

const btn = document.getElementById('modal_opener');
const modal = document.querySelector('.modal');

function attachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').addEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').addEventListener('click', toggleModal);
}

function detachModalListeners(modalElm) {
  modalElm.querySelector('.close_modal').removeEventListener('click', toggleModal);
  modalElm.querySelector('.overlay').removeEventListener('click', toggleModal);
}

function toggleModal() {
  var currentState = modal.style.display;

  // If modal is visible, hide it. Else, display it.
  if (currentState === 'none') {
    modal.style.display = 'block';
    attachModalListeners(modal);
  } else {
    modal.style.display = 'none';
    detachModalListeners(modal);  
  }
}

btn.addEventListener('click', toggleModal);
