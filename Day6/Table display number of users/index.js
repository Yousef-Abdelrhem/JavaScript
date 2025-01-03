
// 1.a Ask the user for number of
//  persons wanted to be entered (the value
//     should be a number)

// 1.b then ask for users’ information 
// sequentially.
// name : length should be more than 3 
// and less than 10 characters
// age : should be greater than 10 and less than 60.
 /// 


 var users = [];
 function UsersInput()
 {
    
    do{
        var usersNumber = prompt("Enter The Number of Users");
    }while(!isFinite(usersNumber));

      var Name;
      var age;

   for(var i = 1 ; i <= usersNumber; i++)
   {
    do{
        
        var flag = 0;
        Name = prompt("Enter User " + i + " Name");
        if(isFinite(Name) || Name.length < 0 || Name.length > 10)
         {
            flag = 1;
            alert(" length should be more than 3 and less than 10 characters ")   
         }   
    }while(flag); // return number 
   
   
    do{
        var flag = 0;
        age = prompt("Enter User " + i + " age");
        if(!isFinite(age) || age < 10 || age > 60)
         {
            flag = 1;
            alert("age : should be greater than 10 and less than 60");   
         }   
    }while(flag);

    users[i - 1] = {
        Name : Name,
        age : age
    }
   }
 }

 UsersInput();




 for(var i = 0; i < users.length; i++)
 {
    var row = document.querySelector("tbody");
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    
    
    row.appendChild(tableRow);
    tableRow.appendChild(tableData);
    tableData.append(users[i].Name);
    
    var tableDataClone = tableData.cloneNode();
    tableDataClone.append(users[i].age);

    tableRow.appendChild(tableDataClone);
   
 }
//  tableRow.appendChild(tableData.cloneNode(true));



 


/// take clone of tr row 
 

 
 
//  1.c print users’ information in HTML Table
