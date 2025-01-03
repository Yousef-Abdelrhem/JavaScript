

var sum = 0;
do
{
     var x = window.prompt("Enter a Value");
     if(isFinite(x)){
  
  
      sum += parseInt(x);
     }
   
     if(x === 0)
        window.alert(sum);
     if(sum > 100 ) window.alert("the total sum is "+ sum);
} while(sum < 100 && x != 0 || isNaN(x));
// string == string 
// Write a script that takes from the user n values 
// and returns their sum, stop receiving
// values from user when he enters 0 or sum 
// exceeds 100, check that the entered data is
// numeric and inform the
//  user with the total sum of the entered values. (use do while
// loop)