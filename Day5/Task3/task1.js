
        var arr = [];
    do
    {
        var flag = 1;
        var str = prompt("Enter your name");
        if(!isFinite(str)) 
    {
        flag = 0;
        arr.push(str);
    }
        if(flag) alert("Enter characters not numbers");
    }while(flag);


    do
    {
        var flag = 1,count=0;

        var Number = prompt("Enter your Number");
        
        isFinite(Number)? flag = 0: flag;
        if(flag) alert("Enter A Number");
        
        var str = Number.toString();
        if(str.length === 8 && isFinite(Number))
        {
            flag = 0;
            arr.push(Number);
        }
        else 
            alert("Enter 8 digits");

    }while(flag);


    do
    {
        var flag = 1,count=0;

        var Number = prompt("Enter your Phone");
        

        var checker = Number.substring(0,3);
        if(Number.length === 11 )
        {
            if(isFinite(Number) && checker === "010" || checker === "011" || checker === "012")
                {
                    flag = 0;
                    arr.push(Number);
                }        
            else
            alert("Number should start with [010 , 011 ,012]");
        }
        else 
            alert("Enter correct number with 11 digits");

    }while(flag);


    do
    {
        var flag = 1,count=0;

        var Email = prompt("Enter your Email");
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        
        if(re.test(Email))
        {
            flag =0;
            arr.push(Email);
        }
        else 
            alert("Enter Valid Email");
    }while(flag);



    alert("name : " + arr[0] + "\n");
    alert("Number : " + arr[1] + "\n");
    alert("Phone : " + arr[2] + "\n");
    alert("Email : " + arr[3] + "\n");



