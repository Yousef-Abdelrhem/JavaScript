// 1.2 write a script that accepts a
//  string from user through prompt and count the number of
// ‘e’ characters in it.


//  var str = prompt("Enter String");
//  var counter = 0;

//  for(var i = 0; i < str.length; i++)
//  {
//     if(str[i] === 'e') counter++;
//  }

//  alert(counter);

 /// second method


 var str = prompt("Enter String");
 var counter = 0;

 var indx = str.indexOf("e");
 for(var i = 0; i < str.length; i++)
 {
    if(indx != -1)
        indx = str.indexOf("e", indx + 1);
    else
    break;
    counter++;
 }

 alert(counter);
