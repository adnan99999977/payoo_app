const perEmail = 'try01@gmail.com';
const perPin = 12345;

let logInBtn = document.getElementById('login_btn');
logInBtn.addEventListener('click',function(){
    let email = document.getElementById('email_input').value
    let pin = document.getElementById('pin_input').value

   if((email != perEmail)||(pin != perPin)) {
    alert('Sorry access denied')
   }
   else{
    window.location.href = "home.html"
   }
    
})