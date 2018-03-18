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
var randy = Math.floor((Math.random() * 100) + 1);
var part6Number = randy;
document.getElementById("part6Number").innerHTML = "exercise part-6:" + " " + part6Number;
var part6Result ;
if (part6Number > 50) {
    part6Result = "Above 50.";
} else {
    part6Result = "Below or equal to 50.";
}
document.getElementById("part6Result").innerHTML = part6Result;

// demo8
var part7Number = randy;
document.getElementById("part7Number").innerHTML = "exercise part-7:" + " " + part7Number;
var part7Result;
if (part7Number<25) { part7Result = "Below 25";}
else if (part7Number>=25 && part7Number<50){ part7Result = "Between 25 and 50.";}
else if (part7Number>=50 && part7Number<75) {part7Result = "Between 50 and 75.";}
else {part7Result="Above 75.";}

document.getElementById("part7Result").innerHTML = part7Result
