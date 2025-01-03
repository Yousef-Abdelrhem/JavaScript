
var input = document.getElementById("Answer");
var flag = 0;
function EnterNumber(value) {
   /// print the number on the input
 
   input.value  += value;
}
function EnterEqual()
{
    input.value = eval(input.value);
    flag = 1;
}
function EnterOperator(value) {
    input.value  += value;
    
}
function EnterClear()
{
    input.value = '';
}

/// clear screen after result
/// handel dividing by zero bouns
