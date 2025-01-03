function fn(x,y)
{
   for(var i = 0; i < arguments.length; i++)
   {
      if(typeof(arguments[i]) != "number")
         throw new Error("Enter only Numeric values");
      else
         console.log(arguments[i]);
   } 
}

fn(1,1);
