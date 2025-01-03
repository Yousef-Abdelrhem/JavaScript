
// 4.4 make function isPrime to check if the number is prime or not   

function isPrime(v)
{
   if(v < 2 || !isFinite(v))
      return "Not Prime Number";
   for(var i = 2; i <= Math.sqrt(v); i++)
      if(v % i == 0)    
         return "Not Prime Number";

      return "IsPrime";
}

console.log(isPrime(-3));