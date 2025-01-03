
window.alert("Welcome to my site");

var Name = window.prompt("Enter Name");

var color = window.prompt("Enter Color (red, green or blue)");

document.write("Welcome <p style='display:inline; text-align:center; color:" + color + ";'>" + Name + "</p>");


// On your page, show alert for
//  the user that say “Welcome to my site”, then show him
// prompt ask him to enter his
//  name The user has to choose either (red, green or blue
// color), take his 
// choice via prompt and write to the page “welcome + his name”