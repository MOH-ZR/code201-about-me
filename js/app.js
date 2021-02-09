'use strict';
 var userName = prompt('What\'s your name?');
alert("Greetings " + userName + ", Welcome to my web site! Let's play a guessing game");

// prompt the user in  five yes/No questions

var centuryYears = prompt("A century is a period of 100 years?");
//console.log(centuryYears);
switch(centuryYears.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are correct");
        break;
    case 'n':
    case 'no':
        alert("You are incorrect");
}

var htmlLang = prompt("HTML is a programming Language?");
//console.log(htmlLang);
switch(htmlLang.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are incorrect");
        break;
    case 'n':
    case 'no':
        alert("You are correct");
}

var abbreviation = prompt(" 'ASCII' stands for 'American Standard Code for Information Interchange'?");
//console.log(abbreviation);
switch(abbreviation.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are correct");
        break;
    case 'n':
    case 'no':
        alert("You are incorrect");
}

var australiaCapital = prompt("Berlin is the capital of Australia?");
//console.log(australiaCapital);
switch(australiaCapital.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are incorrect");
        break;
    case 'n':
    case 'no':
        alert("You are correct");
}

var pakistanOffLang = prompt("Urdu is the official language of Pakistan?");
//console.log(pakistanOffLang);
switch(pakistanOffLang.toLowerCase()) {
    case 'y':
    case 'yes':
        alert("You are correct");
        break;
    case 'n':
    case 'no':
        alert("You are incorrect");
}

// final message to the user 
alert("Thanks for playing " + userName)