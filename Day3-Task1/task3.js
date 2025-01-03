
function Reversing()
{
   var counter =0;
   var array = [];
   for(var i = arguments.length - 1; i >= 0; i--)
   {
      array[counter++] = arguments[i]
   }
   return array;
}

console.log(Reversing(1,2,"sadf"));