

// 4.2. Write your own function that can add n values ensure that all passing parameters are
// numerical values only. 





// 4.3. Write a function that takes any number of parameters and returns them reversed using
// array’s reverse function.






// console.log(isPrime(8));


// write a script that allows you to create a rectangle object that
// • Should have width and height properties.
// • Implement two methods for calculating its area and perimeter return value.
// • Implement displayInfo() function to display a message declaring the width, height,
// area and perimeter of the created object.

var rectangle = {
   width: 30,
   height: 30,
   area: function()
   {
      return this.width * this.height; 
   },
   perimeter: function()
   {
      return 2*(this.height + this.width);
   }
   ,
   display: function()
   {
      console.log("the Area is: "+ this.area() +"\n");
      console.log("the perimeter is: "+ this.perimeter() +"\n");

   }
}

// rectangle.display();

