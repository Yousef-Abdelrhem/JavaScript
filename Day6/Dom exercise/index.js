// 1.d Given a web document as shown below in 
// Fig. a, with only these few lines of
// code in shown in Fig. b. 
// Using DOM Nodes to access, create, modify or remove
// any of its elements to have it finally as shown in Fig. c

document.querySelectorAll('img').forEach(img =>
    img.style = "width: 200px; height: 200px; position: relative; top: 0; left: 80%"
);


// var center = document.getElementsByClassName('.navigation'); 
// center[0].style = "";

document.querySelectorAll('li').forEach(li =>
    li.style = "list-style: circle; position: relative; top: 0; left: 50%"
);

document.querySelectorAll('a').forEach(a =>
    a.style = "text-decoration: none; color: black;"
);

var resized = document.createElement("img");
resized.src = "camel.png";
document.body.appendChild(resized);

resized.style = "width:200px; height: 200px"