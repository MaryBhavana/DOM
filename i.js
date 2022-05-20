console.log("Working...");

//question 1//
const q1 = document.getElementById("text");
console.log(q1.innerText);

//question2//
const q2 = document.getElementsByTagName("h1");
console.log(q2[0].innerText);

//question3//
const q3 = document.getElementsByClassName("box");
console.log(q3[0].innerText);

//question4//
function changeText(){
    const changeText = document.getElementsByTagName("h2");
    changeText[0].innerText ="Hello World"
    console.log(changeText[0].innerText);
}

//question5//
function changeDirection(){
    const q5 = document.getElementsByClassName("flex-container");
    q5[0].style.flexDirection = "column";
}

//question6//
//What’s the difference between window vs document?//
// When JavaScript is executed inside the browser, the window object is the JavaScript Global object. The document object is a property of the window object.

// The window object represents the browser window.
// The document object represents the HTML document loaded in that window.

// The window object has many useful properties like the location object and the setTimeout function.

// Since the window object is the Global object, ergo, it is the end of all scope chains, you don’t have to explicitly specify it when accessing its properties…
// Instead of window.setTimeout, you can just write setTimeout
// Same goes with document… instead of window.document, you can just write document…

//question7//
let q7 = document.createElement("id");
 q7.IdName = "heading";
 q7.style.color = "red";
 q7.innerText = "Hello";
 console.log(q7);
document.querySelector("h1.h1").appendChild(q7);

//question 8//
function changeText(){
    const q8 = document.getElementsByTagName("h1");
    q8[0].innerText = "Welcome to Elevation Academy";
    console.log(q8.innerText);
}
console.log("working..");

//question 9//
function currentTime() {
    var time = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    let Am = document.getElementById("AM");
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  
  if(hour>=12){
    Am.innerHTML = "PM";
  }
  else{
    Am.innerHTML = "AM";
  }
  
  currentTime(); /* calling currentTime() function to initiate the process */

  //question 10//
  function printValue()
{
    const element = document.querySelector("#year");
    const element1 = element.value;
    document.querySelector("#printValue").append(element1);
}


document.write("<br>");
document.write("<br>");
document.write("\n");

//question 11//
function formDetails()
{
    var form = document.createElement("form")
    // form.setAttribute("method","get")
    // document.write("Name");
    var name = document.createElement("input");
    document.write("<br>");
    name.setAttribute("type","text");
    name.setAttribute("name","Fullname");
    name.setAttribute("placeholder","Fullname");
    document.write("<br>");
    document.write("<br>");
    var linebreak = '\n';

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    document.write("<br>");
    document.write("<br>");

    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("value","+91 - ");
    phoneNo.setAttribute("maxlength","16");
    document.write("<br>");
    document.write("<br>");

    var year = document.createElement("input");
    year.setAttribute("type","date");
    year.setAttribute("name","year");
    year.setAttribute("min","1995-01-01");

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    
    form.appendChild(name);
    document.write("<br>");

    form.appendChild(email);
    document.write("<br>");

    form.appendChild(phoneNo);
    document.write("<br>");

    form.appendChild(year);
    document.write("<br>");

    form.appendChild(submit);
    document.write("<br>");

    document.getElementsByClassName("form")[0].appendChild(form);
   
   
}
formDetails();