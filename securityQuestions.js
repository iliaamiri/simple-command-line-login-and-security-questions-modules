const readlineSync = require("readline-sync")

const securityQuestions = [
    {question: "In what city your parents met each other?", expectedAnswer: "New York"},
    {question: "What was your first best friend in Elementary School?", expectedAnswer: "Mike"},
    {question: "What was your first pet's name?", expectedAnswer: "Paani"}
];

try{
    securityQuestions.forEach((item, index) => {
        let answer = readlineSync.question(item.question);

        if (answer.toLowerCase() !== item.expectedAnswer.toLowerCase()){
            throw "Invalid response, please try again later.";
        }
    });

    console.log("Success. You may now access your account");
}catch (e) {
    console.log(e);
}