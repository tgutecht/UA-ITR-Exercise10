if (new Date().getHours() < 18) {
    document.getElementById("demo1").innerHTML = "Good day!";
} else {
  document.getElementById("demo1").innerHTML = "Good Evening!"
}

// demo2 - click button

function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
document.getElementById("demo2").innerHTML = greeting;
}
// demo3
if (5>2) {
  document.getElementById("demo3").innerHTML = "well done!";
}
// demo4 if else
if (10<2){
  document.getElementById("demo4").innerHTML = "true";
} else {
  document.getElementById("demo4").innerHTML = "false";
}
//demo5
var firstName = "Tugce";

if (firstName === "Tugce") {
    document.getElementById("demo5").innerHTML = "Hello Tugce!";
} else {
  document.getElementById("demo5").innerHTML = "You are not Tugce!";
}
// demo6
var age = 10;
if (age >18) {
  document.getElementById("demo6").innerHTML= "Old enough to drink";
} else {
  document.getElementById("demo6").innerHTML= "Not old enough to drink";
}

//demo7 produce a random number
var part6Number = Math.floor((Math.random() * 100) + 1);
document.getElementById("part6Number").innerHTML = "exercise part6:" + " " + part6Number;
var part6Result ;
if (part6Number > 50) {
    part6Result = "Above 50.";
} else {
    part6Result = "Below or equal to 50.";
}
document.getElementById("part6Result").innerHTML = part6Result;
