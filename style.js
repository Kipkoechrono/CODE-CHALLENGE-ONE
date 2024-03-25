//import console module

const readline = require('readline');
//interface for both user input and output for users

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

//create a function for calculating grades based on marks 
function studentGrade(marks){
    //checking marks range 
    if (marks > 79 && marks <= 100){
        return 'A';
    }
    else if(marks => 60 && marks <= 79){
        return "B";
    }
    else if(marks => 49 &&  marks <= 59){
        return "C";
    }
    else if(marks < 40 && marks >= 0){
        return "D"
    }
    else{
        return 'marks should be between 0 - 100.'
    }
}

