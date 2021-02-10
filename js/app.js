'use strict';


var score = 0;
var userName = prompt('What\'s your name?');
alert("Greetings " + userName + ", Welcome to my web site! Let's play a guessing game");

// prompt the user in  five yes/No questions
function question1() {
    var centuryYears = prompt("A century is a period of 100 years?");
    //console.log(centuryYears);
    switch (centuryYears.toLowerCase()) {
        case 'y':
        case 'yes':
            alert("You are correct");
            score++;
            break;
        case 'n':
        case 'no':
            alert("You are incorrect");
    }
}
question1();


function question2(){
var htmlLang = prompt("HTML is a programming Language?");
//console.log(htmlLang);
switch (htmlLang.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are incorrect");
        break;
    case 'n':
    case 'no':
        alert("You are correct");
        score++;
}
}
question2();

function question3() {
var abbreviation = prompt(" 'ASCII' stands for 'American Standard Code for Information Interchange'?");
//console.log(abbreviation);
switch (abbreviation.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are correct");
        score++;
        break;
    case 'n':
    case 'no':
        alert("You are incorrect");
}
}
question3();

function question4(){
var australiaCapital = prompt("Berlin is the capital of Australia?");
//console.log(australiaCapital);
switch (australiaCapital.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are incorrect");
        break;
    case 'n':
    case 'no':
        alert("You are correct");
        score++;
}
}
question4();

function question5(){

var pakistanOffLang = prompt("Urdu is the official language of Pakistan?");
//console.log(pakistanOffLang);
switch (pakistanOffLang.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are correct");
        score++;
        break;
    case 'n':
    case 'no':
        alert("You are incorrect");
}
}
question5();

function question6(){
// Guessing the number question 
let numGuessed;
let myNumber = 4;
let counter1 = 1;
do {
    if (counter1 == 5) {
        alert("Sorry " + userName + ", you tried 4 times. The number is 4");
        break;
    }
    numGuessed = parseInt(prompt("Guess the number(from 1 to 10) in my head?"));
    //console.log(numGuessed);
    if (numGuessed === myNumber) {
        alert("You are correct, good job!");
        score++;
        break;
    } else if (numGuessed < myNumber) {
        alert("too low");
    } else {
        alert("too high");
    }
    counter1++;
} while (counter1 <= 5);
}
question6();


function question7(){
// Question that has multiple possible correct answers
var answers = ['celsius', 'fahrenheit', 'kelvin'];
var guessedTemUnit;
var counter2 = 1;
do {
    if (counter2 == 7) {
        alert("You Tried six times. The correct answer: Celsius, Fahrenheit, and Kelvin");
        break;
    }
    guessedTemUnit = prompt("Give me unit to measure temperature?").toLowerCase();
    //console.log(guessedTemUnit);
    if (guessedTemUnit == answers[0] || guessedTemUnit == answers[1] || guessedTemUnit == answers[2]) {
        alert("You are Correct, good job!");
        score++;
        break;
    } else {
        alert("you are incorrect, try again");
    }
    counter2++;
} while (counter2 <= 7);
}
question7();

// final message to the user 
alert("Thanks for playing " + userName + ". You got " + score + " out of 7.");