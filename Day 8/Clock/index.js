
setInterval(function()
{   
var DateTime = new Date();
var Hour = DateTime.getHours() ;
var Minute = DateTime.getMinutes();
var Seconds =  DateTime.getSeconds();
var period = Hour >= 12 ? ' PM' : ' AM';

        Hour = Hour % 12 || 12;
    document.getElementById('hour').innerHTML = Hour;
    document.getElementById('minutes').innerHTML = Minute;    
    document.getElementById('seconds').innerHTML = Seconds + period ;   
},1000);

/// alt w stop