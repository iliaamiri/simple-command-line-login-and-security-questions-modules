const readlineSync = require("readline-sync");

const login = {
    username: "admin",
    password: "admin123456"
};

try {
    let maximumAllowedTries = 3;
    let success = false;

    for (let i = 1; i <= maximumAllowedTries; i++){
        let password = readlineSync.question(`Enter password for ${login.username}:`);

        if (password === login.password){
            success = true;
            break;
        }else{
            console.log("Wrong password.");
        }

        if (i === maximumAllowedTries){
            throw "You have tried too many times.";
        }
    }

    if (!success){
        throw "You have tried too many times.";
    }

    console.log("You may access your account.");
} catch (e) {
    console.log(e);
}