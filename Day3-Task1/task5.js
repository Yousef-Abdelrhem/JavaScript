
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
 
 rectangle.display();
 