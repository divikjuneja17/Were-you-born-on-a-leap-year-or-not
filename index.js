import chalk from 'chalk';
import readlineSync from 'readline-sync';

console.log(chalk.black.bold.bgCyan("Were you born on a leap year or not?\n"));
var userName = readlineSync.question(chalk.black.bold.bgMagenta("Enter your name:") + " ");
var dob = readlineSync.question(chalk.black.bold.bgMagenta("Enter your birth-date in DD/MM/YYYY format :") + " "); //input is taken in String format.

let userDD = "";
let userMM = "";
let userYYYY = "";

function validateDOB(dob) {
  userDD = dob.substring(0, 2); //substring() extracts string from 0th index to 1st index, so date is extracted. Ex: 26/06/2000 - 26 is extracted.
  userMM = dob.substring(3, 5); //leaving 2nd index as it has '/' so we start from 3rd index. substring() extracts string from 3rd index to 4th index, so month is extracted. Ex: 26/06/2000 - 06 is extracted.
  userYYYY = dob.substring(6, 10); //leaving 5th index as it has '/' so we start from 6th index. substring() extracts string from 6th index to 9th index, so year is extracted. Ex: 26/06/2000 - 2000 is extracted.

  if (isNaN(userDD) || isNaN(userMM) || isNaN(userYYYY) || 0 > Number(userDD)|| Number(userDD)>31 || 0 > Number(userMM) || Number(userMM) >13 || Number(userYYYY) < 0) { //isNaN() first converts a value to a number before testing it. isNaN(userDD) returns true if user enters a String instead of a number, same for isNaN(userMM) and isNaN(userYYYY). Number(userDD) converts a string to a number, ex: String '12' is converted to Number 12, so if 0 > Number(userDD), then it is a un-valid date and same for Number(userDD)>31 - date cannot be more than 31. Same for 0 > Number(userMM) and Number(userMM) >13 and year cannot be less than 0 - Number(userYYYY) < 0. So, if any one of the condition is true, due to OR operator, error message will be printed.
    
    console.log("Please enter valid a birth date 😡 ");
  }else {
    leapYear(userYYYY); //passing only year of birth date and calling leapYear(userYYYY) to check if it is a leap year or not.
  }
}

function leapYear(year){
if((year%400==0) || (year%4==0 && year%100!=0)) {
 return console.log(chalk.green.bold("\nHurray " + userName + "!") + " You were born on a " + chalk.black.bold.bgGreen("leap year.")); 
}
else {
 return console.log(chalk.red.bold("\nSad " + userName + "!") + " You were born on a " + chalk.red.bgBlack("non-leap year."));
 }
}



validateDOB(dob);