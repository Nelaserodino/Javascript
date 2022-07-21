alert("Welcome to the IELTS score calculator! Please write your answers to the questions below, using lowercase letters.");

//funcion que pide al alumno que ingrese sus respuestas para las seccion 1
function getStudentAnswersSection1 () {
    let getStudentAnswersSection1 = [];
        while (getStudentAnswersSection1.length < 14) {
        getStudentAnswersSection1.push(prompt ("SECTION 1:" + "\n"+ "Please enter your answer for question " + (getStudentAnswersSection1.length + 1) + ":"));
        };
        return getStudentAnswersSection1;
    }
let studentAnswersSection1 = getStudentAnswersSection1();

//funcion que pide al alumno que ingrese sus respuestas para las seccion 2
function getStudentAnswersSection2 () {
    let getStudentAnswersSection2 = [];
        while (getStudentAnswersSection2.length < 13) {
        getStudentAnswersSection2.push(prompt ("SECTION 2:" + "\n"+ "Please enter your answer for question " + (getStudentAnswersSection2.length + 1) + ":"));
        };
        return getStudentAnswersSection2;
    }
let studentAnswersSection2 = getStudentAnswersSection2();

//funcion que pide al alumno que ingrese sus respuestas para las seccion 3
function getStudentAnswersSection3 () {
    let getStudentAnswersSection3 = [];
        while (getStudentAnswersSection3.length < 13) {
        getStudentAnswersSection3.push(prompt ("SECTION 3:" + "\n"+ "Please enter your answer for question " + (getStudentAnswersSection3.length + 1) + ":"));
        };
        return getStudentAnswersSection3;
    }
let studentAnswersSection3 = getStudentAnswersSection3();


//funcion que cuenta la cantidad de respuestas correctas en cada seccion.
function countCorrectAnswers (suggestedAnswers, givenAnswers){
    let correctAnswers = 0;
    for (let i = 0; i < givenAnswers.length; i++){
        if (givenAnswers[i] === suggestedAnswers[i]){
            correctAnswers++;
        }
    }
    return correctAnswers;
}
let countCorrectAnswersSection1 = countCorrectAnswers(readingTest1Section1, studentAnswersSection1);
let countCorrectAnswersSection2 = countCorrectAnswers(readingTest1Section2, studentAnswersSection2);
let countCorrectAnswersSection3 = countCorrectAnswers(readingTest1Section3, studentAnswersSection3);


//funcion que suma la cantidad de respuestas correctas en todo el reading test.
function sumCorrectAnswers (correctAnswersSection1, correctAnswersSection2, correctAnswersSection3){
    let sumCorrectAnswers = correctAnswersSection1 + correctAnswersSection2 + correctAnswersSection3;
    return sumCorrectAnswers;
}
let totalReadingPoints = sumCorrectAnswers(countCorrectAnswersSection1, countCorrectAnswersSection2, countCorrectAnswersSection3);


//funcion que permite calcular el puntaje equivalente segun los puntos obtenidos en el reading test.
function calculateReadingScore (totalReadingPoints) {
    let readingScore = 0;
   if (totalReadingPoints == 40){
           readingScore = 9;
    } else if (totalReadingPoints ==  39){
           readingScore = 8.5;
   } else if (totalReadingPoints ==  38){
           readingScore = 8;
   } else if (totalReadingPoints > 34){
           readingScore = 7.5;
   } else if (totalReadingPoints == 34) {
           readingScore = 7;
   } else if (totalReadingPoints > 30){
           readingScore = 6.5;
   } else if (totalReadingPoints == 30) {
           readingScore = 6;
   } else if (totalReadingPoints > 23){
           readingScore = 5.5;
   } else if (totalReadingPoints == 23){
           readingScore = 5;
   } else if (totalReadingPoints > 15){
           readingScore = 4.5;
   } else if (totalReadingPoints == 15) {
           readingScore = 4;
   } else if (totalReadingPoints > 11){
           readingScore = 3.5;
   } else if (totalReadingPoints > 8){
           readingScore = 3;
   } else if (totalReadingPoints > 5){
           readingScore = 2.5;
   } else if (totalReadingPoints < 6){
           readingScore = 2;
   } else {
       alert ('Por favor, ingresa un valor numerico entre 0 - 40');
   }
   return readingScore;
   }    
   
let resultReadingScore = calculateReadingScore (totalReadingPoints);


alert ("Your target score is " + students[1].targetScore + ".\n" + "You got " + students[1].readingPointsSection1 + " correct answers in section 1, " +students[1].readingPointsSection2 + " correct answers in section 2 and " + students[1].readingPointsSection3 + " correct answers in section 3.\n" + "In total you have "+ students[1].sumCorrectAnswers + " in Reading test 1." + "\n" + "Your total reading score is " + students[1].readingScore + ".");

alert("Thank you for using the IELTS calculator.")





//practica funciones de orden superior
const studentsNames = students.map (student => student.name);
const studentsTargetScore = students.map (student => student.targetScore);
const studentsReadingPointsSection1 = students.map (student => student.readingPointsSection1);
const studentsReadingPointsSection2 = students.map (student => student.readingPointsSection2);
const studentsReadingPointsSection3 = students.map (student => student.readingPointsSection3);
const studentsSumCorrectAnswers = students.map (student => student.sumCorrectAnswers);
const studentsReadingScore = students.map (student => student.readingScore);
const scoresSum = students.reduce ((acumulador, student) => 
    acumulador + student.readingScore, 0);
const averageScore = scoresSum / students.length;






