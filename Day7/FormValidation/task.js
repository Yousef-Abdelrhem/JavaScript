// Create a simple form with Add and Reset buttons
//  takes user`s information (name age and email) with validation
//  for each field and all fields are required.

// Every time the user enters a right data and press Add
//  button the data is displayed in the table as shown in fig 3

 var arr = ['','',''];

 var Name = document.getElementById('Name');
 var age = document.getElementById('age');
 var email = document.getElementById('email');
 var buttonPrimary = document.querySelector('.button-primary');
 var buttonSecondary = document.querySelector('.button-secondary');
 var errorMessage = document.querySelector('.required');
 var flag = 1;
 Name.addEventListener('input', function(e){
    console.log(e.target.value);
    arr[0] = e.target.value;
 });

 age.addEventListener('input', function(e){
    age.addEventListener('keydown', function(e)
     {
     if(!/^[0-9]$/.test(e.key) && !['Backspace'].includes(e.key))
        e.preventDefault(); 
    }
);
    arr[1] = e.target.value;

}); 
 email.addEventListener('input', function(e){
    arr[2] = e.target.value;
 });

buttonPrimary.addEventListener('click',function(e){
     const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(arr[0] === '')
    document.querySelector(".required-name").style.display = 'block';
    if(arr[1] === '')
    document.querySelector(".required-age").style.display = 'block';
    if (arr[2] === '' || !re.test(arr[2]))
    document.querySelector(".required-email").style.display = 'block';

    if(arr[0] !== '' && arr[1] !== '' && arr[2] !== '')
    {
        // document.querySelector('thead').style.display = 'inline-block';

        document.querySelector('tbody').innerHTML += 
        `<tr>
            <td>${arr[0]}</td>
            <td>${arr[1]}</td>
            <td>${arr[2]}</td>
        </tr>`;
    }  
});

buttonSecondary.addEventListener('click',function(e){
    arr = ['','' ,''];
    Name.value = '';
    age.value = '';
    email.value = '';
 });