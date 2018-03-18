/Part 6
var part6Number = getRandomNumber();
var part6Result = 'is less than 50';
function myFunction() {
    var part6Result;
    var part6Number = getRandomNumber();
    if (part6Number > 50) {
        part6Result = "Above 50.";
    } else {
        part6Result = "Below or equal to 50.";
    }
myFunction ();
document.getElementById("part6Result").innerHTML = part6Result;
document.getElementById("part6Number").innerHTML = getRandomNumber;


//produce a random number
var randy = Math.floor((Math.random() * 10) + 1);
//get a number from the user
var num = prompt("Enter a number between 1 to 10");
//test if a number has been submited
if(num != null && num != ""){
//test if the user's number matches the correct number
if(num == randy){
alert("Good work");
}
//tell the user he failed
else{alert("Not matched");}
//reload the page if the user failed
location.reload();
}
//reload the page if the user didn't input a number
else{
location.reload();
}
