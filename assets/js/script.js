//Buttonclick function for button in homepage
document.querySelector('.first-page-button').addEventListener('click', function() {
    window.location.href = '/services.html';
});

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });