var readlineSync = require('readline-sync');


console.log("HOW WELL DO YOU KNOW NABEEL")
var userName = readlineSync.question("Please enter your name: ");
console.log("Welcome " + userName)
var score = 0;


function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right");
    score += 1;
  } else {
    console.log("Wrong answer!");
  }
  console.log("Your Score is: " + score)
  console.log("-------------")
}


var questions = [One = {
                  question: "01.What is Nabeel's age? \n",
                  answer: '20'
                },
                 Two = {
                  question: "02. What is Nabeel's height? \n",
                  answer: '5.11'
                },
                 Three = {
                  question: "03. What do Nabeel prefer: \n \t a. Tea\n \t b. Coffee \n \t",
                  answer: 'a'
                },
                 Four = {
                   question: "04. What was his favorite subject in school?\n \t a. Science \n \t b. History \n \t c. Maths \n \t",
                   answer: 'c'
                 },
                 Five = {
                   question: "05. What is nabeel's favorite color? \n \t a. Red \n \t b. Black \n \t c. Blue \n \t",
                   answer: 'b'
                 },
                 Six = {
                   question: "06. What is nabeel's birth month?\n",
                   answer: "october"
                 },
                 Seven = {
                   question: "07. What is nabeel's birth date?\n",
                   answer: '10'
                 }
                ]

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}


// console.log("Your Final score is : " + score);

if (score >= 4) {
  console.log("You know a lot about me YEYY!!")
  console.log("Your score is",  score)
} else {
  console.log("We need to spend more time together")
    console.log("Your score is",  score)
}
