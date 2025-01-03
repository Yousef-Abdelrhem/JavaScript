

var images = [
    'images/1.webp',
    'images/2.jpg',
    'images/3.png',
    'images/4.webp'
]

var counter = 0;
function nextImg()
{
    counter < 3 ? counter++: counter = 0; 
    document.querySelector('img').src = images[counter];
}
function perviousImg()
{
    counter > 0 ? counter--: counter = 3; 
    document.querySelector('img').src = images[counter];
}

var id;
function slideShow(){
    /// check interval from id
   id = setInterval(function(){
    nextImg();
   },1200);
}

function stop(){
    clearInterval(id);
}