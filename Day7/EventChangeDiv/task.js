// 1. Clone HTML div when it is clicked 
// // and change the background of the 
// // new copy to a random color then append it to the body.



var dv = document.querySelector("#dv");
dv.addEventListener('click',function(){
    var body = document.querySelector("body");
    var clone = dv.cloneNode();
    var random = '#';
    random += Math.floor(Math.random() * 10000);;
    clone.style.backgroundColor =  random;
    body.append(clone);
});

/// make it rgb