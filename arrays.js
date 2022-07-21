
//array con las respueas correctas para las secciones 1, 2 y 3 del Reading Test 1

let readingTest1Section1 = ["d", "c", "b", "a", "c", "b", "a", "false", "false", "true", "not given", "true", "not given", "true"]; //14 respuestas

let readingTest1Section2 =["v", "i", "viii", "vi", "iv", "iii", "new employees", "next orientation session", "the orientation", "procedures and policies", "the employee's supervisor", "human resources","March 15"]; //13 respuestas

let readingTest1Section3= ["c", "b", "a", "b", "a", "c", "a", "parallel floats", "a platform", "huge expanses", "many fighters", "recreational", "birch-barck"]; //13 respuestas


//array con estudiantes
let students = [
    { 
    name: "Cristina",
    targetScore: 6,
    readingPointsSection1: 10,
    readingPointsSection2: 10,
    readingPointsSection3: 10,
    sumCorrectAnswers: 30,
    readingScore: calculateReadingScore (30),
    },
    {
    name: (prompt("What's your name?")),
    targetScore: (parseInt(prompt("What's your target score?"))),
    readingPointsSection1: countCorrectAnswersSection1,
    readingPointsSection2: countCorrectAnswersSection2,
    readingPointsSection3: countCorrectAnswersSection3,
    sumCorrectAnswers: sumCorrectAnswers(countCorrectAnswersSection1, countCorrectAnswersSection2, countCorrectAnswersSection3),
    readingScore: resultReadingScore,
    }
];


