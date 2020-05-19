 function showAlertBox(message, error = false) {
     var alertBox = document.getElementById('alert-dialog')
     if (error) {
         alertBox.style.background = '#ec483f'
     }
     alertBox.textContent = message
     alertBox.style.top = "0%"
     setTimeout(() => {
         alertBox.textContent = ''
         alertBox.style.top = "-100%"
         alertBox.style.background = '#3fec6a'
     }, 2500);
 }

 function showNotifyBox(message) {
     var alertBox = document.getElementById('notify-dialog')
     alertBox.textContent = message
     alertBox.style.bottom = "5%"
     setTimeout(() => {
         alertBox.textContent = ''
         alertBox.style.bottom = "-110%"
     }, 2500);
 }

 export {
     showNotifyBox,
     showAlertBox
 }