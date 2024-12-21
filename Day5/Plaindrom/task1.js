// 1.1 Write a script to determine whether the entered string is palindrome or not. Ask the
// user whether to consider case of the entered string or not, handle both cases in your
// script i.e. RADAR NOON MOOM are palindrome.
// Note: raDaR is not a palindrome if user requested considering case of entered string.



///  reverse check if equlas 
///  do you want to consider it case sensetive 
    /// if yes compare
    /// else convert to lower case then compare 

    /// take  prompt 
    
    do
    {
        var str = prompt("Enter the String");
        
    }while(isFinite(str));
    var flag = confirm("Do You Want to Consider Case sensetive?");

    var revStr = str.split('').reverse().join('');

    if(flag)
    {
        (str === revStr)? alert("Plaindrom") : alert("Not Plaindrom");
    }
    else
    {
         str = str.toLowerCase();
         revStr = revStr.toLowerCase();
         (str === revStr)? alert("Plaindrom") : alert("Not Plaindrom");

    }
    


