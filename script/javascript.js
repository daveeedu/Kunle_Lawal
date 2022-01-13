const icon = document.getElementById('toggler');
const nav = document.getElementById('navbar');

// functions
nav.style.display = 'none';

const showNav = (e) => {
    e.target.parentElement.classList.toggle('change-backGround');
    e.target.classList.toggle('clicked');


    //setTimeout ==> because when i display:none for elements not animated so i delay it to be smooth

    e.target.classList.contains('clicked') ? (nav.style.cssText = 'dispaly: flex;', setTimeout(() => nav.style.transform = 'translateY(0)', 300)) : (nav.style.transform = 'translateY(-100%)', setTimeout(() => nav.style.display = 'none', 700));
}

//events 
icon.addEventListener('click', showNav);

// contact page

var form = document.querySelector('#contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  alert('Thanks for contacting us');
}, false);

var submit_form_btn = document.querySelector('#submit_form');

submit_form_btn.addEventListener('click', function () {
  if (form.checkValidity()) {
    form.submit();
  }
  else {
    form.querySelector('input[type="submit"]').click();
  }
}, false);