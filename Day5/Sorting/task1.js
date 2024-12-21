var arr = [];

for(var i = 0; i < 5; i++)
{   
    var val;
    do
    {
     var val = prompt("Enter Element " + (i + 1))
    }while(!isFinite(val));

    arr[i] = Number(val);
}

var arr2 = arr.concat();
var arr3 = arr.concat();
arr2.sort(function(a, b){return b-a});
arr3.sort(function(a, b){return a-b}); /// ask why is not working without the call back function 


var valuesElement = document.getElementById("values");
var ascendingElement = document.getElementById("ascending");
var descendingElement = document.getElementById("descending");

valuesElement.insertAdjacentText('afterend', " " + arr[0] + " , " + arr[1] + " , "  + arr[2] + " , " + arr[3] + " , " + arr[4]);
ascendingElement.insertAdjacentText('afterend', " " + arr3[0] + " , " + arr3[1] +  " , " + arr3[2] + " , " + arr3[3] + " , " + arr3[4]);
descendingElement.insertAdjacentText('afterend', " " + arr2[0] + " , " + arr2[1]  +  " , " + arr2[2] + " , " + arr2[3] + " , " + arr2[4]);