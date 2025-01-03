// 1. Alert ASCII Code of any key pressed and detect whether it is alt key or ctrl key or shift key.

// 2.  Make your own input type number that accepts numbers only. “using event object”


window.addEventListener('keydown',function(e) {
    console.log(e.key);

    if(e.key === 'Alt'){
        alert('Alt ' + 'key: ' + e.key);
    } 
    if(e.key === 'Control'){
        alert('Control ' + 'key: ' + e.key);
    } 
    if(e.key === 'Shift'){
        alert('Shift ' + 'key: ' + e.key);
    } 
    // else if( e.key === 'Control')  alert('Control');
    // else if(e.key === 'Shift') alert('Shift');


    var input = document.querySelector('input');
    if(!isFinite(e.key))
    {
        e.preventDefault();
    }
});


//// task alt + key