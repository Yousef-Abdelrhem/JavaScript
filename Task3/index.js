var massage = window.prompt("Enter Massage");


for(var i = 1; i <= 6; i++)
{
    if(massage === '' || massage === null)
        document.write("<h" + i + ">There is no message</h" + i + ">");
    else
    document.write("<h"+ i + ">"+ massage + "</h"+i+ ">");

}


// Ask the user to enter a
//  message then display it using the different html
//  heading tags 
// (from <h1> to <h6>) using Loops. 

// DO NOT write the header element explicitly in your script.