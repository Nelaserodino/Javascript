// simulador de puntaje parcial y final sobre un test de inglés que evalúa las habilidades de reading y listening.
let readingScore = 0;
let listeningScore = 0;
let readingPointsCounter = 0;
let listeningPointsCounter = 0;


//funcion que permite contar cuantas respuestas correctas obtuvo el alumno en el reading
function calculateReadingPoints () {
    let numberOfQuestions = 10;

    for (let i = 1; i <= numberOfQuestions; i ++) {
    let answer1 = prompt ("Answer 1:"); 
        if (answer1 == "d") {
            readingPointsCounter ++;}
        i ++;
    let answer2 = prompt ("Answer 2:");
        if (answer2 == "a") {
            readingPointsCounter ++;}
        i ++;
    let answer3 = prompt ("Answer 3:");
        if (answer3 == "c") {
            readingPointsCounter ++;}
        i ++;
    let answer4 = prompt ("Answer 4:");
        if (answer4 == "a") {
            readingPointsCounter ++;}
        i ++;
    let answer5 = prompt ("Answer 5:");
        if (answer5 == "c") {
            readingPointsCounter ++;}
        i ++;
    let answer6 = prompt ("Answer 6:");
        if (answer6 == "b") {
            readingPointsCounter ++;}
        i ++;
    let answer7 = prompt ("Answer 7:");
        if (answer7 == "a") {
            readingPointsCounter ++;}
        i ++;
    let answer8 = prompt ("Answer 8:");
        if (answer8 == "false") {
            readingPointsCounter ++;}
        i ++;
    let answer9 = prompt ("Answer 9:");
        if (answer9 == "false") {
            readingPointsCounter ++;}
        i ++;
    let answer10 = prompt ("Answer 10:");
        if (answer10 == "true"){
            readingPointsCounter ++;}
        i ++;
    }
    return alert ("You got " + readingPointsCounter + " points in the Reading section."); 
}



//funcion que permite calcular el puntaje equivalente segun los puntos obtenidos en el reading test.

function calculateReadingScore () {

let puntajeReading = readingPointsCounter;

if (puntajeReading == 40){
    alert ('Your Reading score is 9');
        readingScore = 9;
 } else if (puntajeReading ==  39){
    alert ('Your Reading score is 8.5');
        readingScore = 8.5;
} else if (puntajeReading ==  38){
    alert ('Your Reading score is 8');
        readingScore = 8;
} else if (puntajeReading > 34){
    alert ('Your Reading score is 7.5');
        readingScore = 7.5;
} else if (puntajeReading == 34) {
    alert ('Your Reading score is 7');
        readingScore = 7;
} else if (puntajeReading > 30){
    alert ('Your Reading score is 6.5');
        readingScore = 6.5;
} else if (puntajeReading == 30) {
    alert ('Your Reading score is 6');
        readingScore = 6;
} else if (puntajeReading > 23){
    alert ('Your Reading score is 5.5');
        readingScore = 5.5;
} else if (puntajeReading == 23){
    alert ('Your Reading score is 5');
        readingScore = 5;
} else if (puntajeReading > 15){
    alert ('Your Reading score is 4.5');
        readingScore = 4.5;
} else if (puntajeReading == 15) {
    alert ('Your Reading score is 4');
        readingScore = 4;
} else if (puntajeReading > 11){
    alert ('Your Reading score is 3.5');
        readingScore = 3.5;
} else if (puntajeReading > 8){
    alert ('Your Reading score is 3');
        readingScore = 3;
} else if (puntajeReading > 5){
    alert ('Your Reading score is 2.5');
        readingScore = 2.5;
} else if (puntajeReading < 6){
    alert ('Estas listo para comenzar a aprender inglés');
} else {
    alert ('Por favor, ingresa un valor numerico entre 0 - 40');
}

}    



//funcion que permite contar cuantas respuestas correctas obtuvo el alumno en el listening

function calculateListeningPoints () {
    let numberOfQuestions = 10;

    for (let i = 1; i <= numberOfQuestions; i ++) {
    let answer1 = prompt ("Answer 1:"); 
        if (answer1 == "wednesday and friday") {
            listeningPointsCounter ++;}
        i ++;
    let answer2 = prompt ("Answer 2:");
        if (answer2 == "intermediate") {
            listeningPointsCounter ++;}
        i ++;
    let answer3 = prompt ("Answer 3:");
        if (answer3 == "beginning") {
            listeningPointsCounter ++;}
        i ++;
    let answer4 = prompt ("Answer 4:");
        if (answer4 == "mornings") {
            listeningPointsCounter ++;}
        i ++;
    let answer5 = prompt ("Answer 5:");
        if (answer5 == "125") {
            listeningPointsCounter ++;}
        i ++;
    let answer6 = prompt ("Answer 6:");
        if (answer6 == "410") {
            listeningPointsCounter ++;}
        i ++;
    let answer7 = prompt ("Answer 7:");
        if (answer7 == "575") {
            listeningPointsCounter ++;}
        i ++;
    let answer8 = prompt ("Answer 8:");
        if (answer8 == "1050") {
            listeningPointsCounter ++;}
        i ++;
    let answer9 = prompt ("Answer 9:");
        if (answer9 == "the school office") {
            listeningPointsCounter ++;}
        i ++;
    let answer10 = prompt ("Answer 10:");
        if (answer10 == "Mr. Lindsay"){
            listeningPointsCounter ++;}
        i ++;
    }
    return alert ("You got " + listeningPointsCounter + " points in the Reading section."); 
}



//funcion que permite calcular el puntaje equivalente segun los puntos obtenidos en el listening test.

function calculateListeningScore () {

let puntajeListening = listeningPointsCounter;

if ((puntajeListening == 40) || (puntajeListening == 39)){
    alert ('Your Listening score is 9');
        listeningScore = 9;
 } else if (puntajeListening > 36){
    alert ('Your Listening score is 8.5');
        listeningScore = 8.5;
} else if (puntajeListening > 34){
    alert ('Your Listening score is 8');
        listeningScore = 8;
} else if (puntajeListening > 31) {
    alert ('Your Listening score is 7.5');
        listeningScore = 7.5;
} else if (puntajeListening == 29) {
    alert ('Your Listening score is 7');
        listeningScore = 7;
} else if (puntajeListening > 25){
    alert ('Your Listening score is 6.5');
        listeningScore = 6.5;
} else if (puntajeListening > 22) {
    alert ('Your Listening score is 6');
        listeningScore = 6;
} else if (puntajeListening > 17){
    alert ('Your Listening score is 5.5');
        listeningScore = 5.5;
} else if (puntajeListening > 15) {
    alert ('Your Listening score is 5');
        listeningScore = 5;
} else if (puntajeListening > 12){
    alert ('Your Listening score is 4.5');
        listeningScore = 4.5;
} else if (puntajeListening > 9) {
    alert ('Your Listening score is 4');
        listeningScore = 4;
} else if (puntajeListening > 7) {
    alert ('Your Listening score is 3.5');
        listeningScore = 3.5;
} else if (puntajeListening > 5){
    alert ('Your Listening score is 3');
        listeningScore = 3;
} else if (puntajeListening > 3){
    alert ('Your Listening score is 2.5');
        listeningScore = 2.5;
} else if (puntajeListening < 3){
    alert ('Estas listo para comenzar a aprender inglés');
} else {
    alert ('Por favor, ingresa un valor numerico entre 0 - 40');
}

}



//funcion que permite calcular el promedio final de los dos puntajes obtenidos

function calculateAverageScore (readingScore, listeningScore) {
    resultado = (readingScore + listeningScore) / 2;  
    return resultado; 
} 


calculateReadingPoints ();
calculateReadingScore ();
calculateListeningPoints ();
calculateListeningScore () ;
calculateAverageScore (readingScore, listeningScore);
alert ("Your average IELTS score is  " + (resultado)); 



//practica con objetos

class Alumno {
    constructor (nombre, apellido, scoreObjetivo, scoreLogrado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.scoreObjetivo = scoreObjetivo;
        this.scoreLogrado = scoreLogrado;
    }
   
}

const alumno1 = new Alumno ("Marianela", "Serodino Runco", 7, 8.5);

console.log(alumno1);


    
    