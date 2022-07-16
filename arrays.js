//Practica con objetos, arrays y metodos

class Student {
    constructor (firstName, targetScore, actualScore) {
        this.firstName = firstName;
        this.targetScore = targetScore;
        this.actualScore = actualScore;
        this.pass = actualScore >= targetScore;
        
    }
}

const studentInfo = [];

studentInfo.push (new Student ("Elena", 7,6));
studentInfo.push (new Student ("Cristina", 6,5));
studentInfo.push (new Student ("Berta", 4.5,8));


let firstName = prompt ("What's your name?");
let targetScore = prompt ("What's your target score?");
let actualScore = prompt ("What's your actual score?");
studentInfo.push (new Student (firstName, targetScore, actualScore));


for (const student of studentInfo) {
    console.log("Name: " + student.firstName + "\n" + "Your target score: " + student.targetScore + "\n" + "Your actual score: " + student.actualScore + "\n" + "Got the results you wanted?: " + (student.pass));
}