
var counter = 1;
var interval;
function startAnimation() {
        interval = setInterval(function(){
        document.getElementById(counter).src = 'images/marble1.jpg';
        counter++;
        if(counter > 5) counter = 1;
        document.getElementById(counter).src = 'images/marble2.jpg';
    },1000);    
}

startAnimation();
document.querySelector('section').addEventListener('mouseover',function(){
    clearInterval(interval);
});

document.querySelector('section').addEventListener('mouseout',function(){
    startAnimation()}
);


