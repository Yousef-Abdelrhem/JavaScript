
var num1; 
var num2; 
var num3;

do
{
    num1 = prompt("Enter Num 1");
}while(!isFinite(num1));
do
{
    num2 = prompt("Enter Num 2");
}while(!isFinite(num2));





0

do
{
    num3 = prompt("Enter Num 3");
}while(!isFinite(num3));

num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

var sumNum = num1 + num2 + num3;
var Multiplying = num1 * num2 * num3;
var dividing = num1 / num2 / num3;


var sum = document.getElementById("sum");
var MultiplyingElement = document.getElementById("Multiplying");
var dividingElement  = document.getElementById("dividing");

sum.insertAdjacentHTML("afterend", ` <span style='font-weight: bold'>${sumNum}</span>`);

MultiplyingElement.insertAdjacentHTML("afterend", ` <span style='font-weight: bold'>${Multiplying}</span>`);

dividingElement.insertAdjacentHTML("afterend", ` <span style='font-weight: bold'>${dividing}</span>`);
