// //FUNCIONES que no estoy usando por ahora


// //array que almacena las respuestas del test section1, section2 y section3
// let answersReadingTest1 = ["d", "c", "b", "a", "c", "b", "a", "false", "false", "true", "not given", "true", "not given", "true", "v", "i", "viii", "vi", "iv", "iii", "new employees", "next orientation session", "the orientation", "procedures and policies", "the employee's supervisor", "human resources","March 15","c", "b", "a", "b", "a", "c", "a", "parallel floats", "a platform", "huge expanses", "many fighters", "recreational", "birch-barck"];
// console.log(answersReadingTest1);





// //funcion que pide al alumno que ingrese sus respuestas para las seccion 1
// function getStudentAnswersSection1 () {
//     let getStudentAnswersSection1 = [];
//         while (getStudentAnswersSection1.length < 14) {
//         getStudentAnswersSection1.push(prompt ("SECTION 1:" + "\n"+ "Please enter your answer for question " + (getStudentAnswersSection1.length + 1) + ":"));
//         };
//         return getStudentAnswersSection1;
//     }
// let studentAnswersSection1 = getStudentAnswersSection1();

// //funcion que pide al alumno que ingrese sus respuestas para las seccion 2
// function getStudentAnswersSection2 () {
//     let getStudentAnswersSection2 = [];
//         while (getStudentAnswersSection2.length < 13) {
//         getStudentAnswersSection2.push(prompt ("SECTION 2:" + "\n"+ "Please enter your answer for question " + (getStudentAnswersSection2.length + 1) + ":"));
//         };
//         return getStudentAnswersSection2;
//     }
// let studentAnswersSection2 = getStudentAnswersSection2();

// //funcion que pide al alumno que ingrese sus respuestas para las seccion 3
// function getStudentAnswersSection3 () {
//     let getStudentAnswersSection3 = [];
//         while (getStudentAnswersSection3.length < 13) {
//         getStudentAnswersSection3.push(prompt ("SECTION 3:" + "\n"+ "Please enter your answer for question " + (getStudentAnswersSection3.length + 1) + ":"));
//         };
//         return getStudentAnswersSection3;
//     }
// let studentAnswersSection3 = getStudentAnswersSection3();


// //funcion que cuenta la cantidad de respuestas correctas en cada seccion.
// function countCorrectAnswers (suggestedAnswers, givenAnswers){
//     let correctAnswers = 0;
//     for (let i = 0; i < givenAnswers.length; i++){
//         if (givenAnswers[i] === suggestedAnswers[i]){
//             correctAnswers++;
//         }
//     }
//     return correctAnswers;
// }
// let countCorrectAnswersSection1 = countCorrectAnswers(readingTest1Section1, studentAnswersSection1);
// let countCorrectAnswersSection2 = countCorrectAnswers(readingTest1Section2, studentAnswersSection2);
// let countCorrectAnswersSection3 = countCorrectAnswers(readingTest1Section3, studentAnswersSection3);


// //funcion que suma la cantidad de respuestas correctas en todo el reading test.
// function sumCorrectAnswers (correctAnswersSection1, correctAnswersSection2, correctAnswersSection3){
//     let sumCorrectAnswers = correctAnswersSection1 + correctAnswersSection2 + correctAnswersSection3;
//     return sumCorrectAnswers;
// }
// let totalReadingPoints = sumCorrectAnswers(countCorrectAnswersSection1, countCorrectAnswersSection2, countCorrectAnswersSection3);




// //practica funciones de orden superior
// const studentsNames = students.map (student => student.name);
// const studentsTargetScore = students.map (student => student.targetScore);
// const studentsReadingPointsSection1 = students.map (student => student.readingPointsSection1);
// const studentsReadingPointsSection2 = students.map (student => student.readingPointsSection2);
// const studentsReadingPointsSection3 = students.map (student => student.readingPointsSection3);
// const studentsSumCorrectAnswers = students.map (student => student.sumCorrectAnswers);
// const studentsReadingScore = students.map (student => student.readingScore);
// const scoresSum = students.reduce ((acumulador, student) => 
//     acumulador + student.readingScore, 0);
// const averageScore = scoresSum / students.length;


