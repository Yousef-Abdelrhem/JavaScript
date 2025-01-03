
var username = document.querySelector('.username');
var email = document.querySelector('.email');
var submit = document.querySelector('.button-submit');


var params = new URLSearchParams(window.location.search);
var Name = params.get('username');
var Email = params.get('email');

document.querySelector('.button-banner').addEventListener('click',function() {
    
    window.location.href = 'Playground.html';
});

if(Name != null && Email != null)
{
    var userData = document.querySelector('.user-data');
    userData.style.display = 'block' ;
    userData.innerHTML =  Name +"<br/>" + ' ' + Email;
}
