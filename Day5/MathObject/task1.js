// 2.1 Write a script that ask the user to 
// Enter the value of a circle’s radius in order to calculate
// its area.


    // do{
    //     var radius = prompt("Enter the radius of circle");
    // }while(!isFinite(radius));
    
    // radius = parseFloat(radius);

    // var area = Math.PI* Math.pow(radius , 2);

    // alert("The circle area is : " + area.toFixed(2));


// 2.2 Enter another value to calculate
//  its square root and alert the result.

do{
    var sqr = prompt("Enter the square root");
}while(!isFinite(sqr));

 sqr = parseFloat(sqr);

alert("The Square area is: " + Math.sqrt(sqr).toFixed(2));
