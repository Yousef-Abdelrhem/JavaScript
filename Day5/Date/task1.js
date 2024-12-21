
var arr = [];
var day;
var month;
var year;
function isDateValid(date) {
    if(date[2] === '-' && date[4] === '-' || date[5] === '-')
    {
        arr = date.split('-');
        for(let key in arr) {
            if(!isFinite(arr[key])) return false;
        }
         day = arr[0];
         month = arr[1];
         year = arr[2];
        if (day < 1 || day > 31 || month < 1 || month > 12 || year > 2024 || year < 1950) {
            return false;
        }
        return true;
    }
    
}

do
{
    var date = prompt("Enter date day-month-year");
    if(isDateValid(date))
    {
     date = new Date(year ,month - 1,day);
     window.alert(date);
     alert('The day is : ' + getNameDay(date));  
    }
    else
    {
        window.alert("Wong Date Format");
    }
}while(!isDateValid());


function getNameDay(date)
{    
        var day = date.getDay();
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return dayNames[date.getDay()];
    
}