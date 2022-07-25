let studentReadingPoints = document.getElementById("input-reading");

let studentNeededScore = document.getElementById("needed-score");

let btnClick = document.getElementById("btn");
btnClick.addEventListener("click", handleBtnClick);

let btnClick2 = document.getElementById("btn2");
btnClick2.addEventListener("click", handleBtnClick2);

// //funcion que calcula el score segun puntos ingresados
function getStudentScore (){
    let studentReadingPoints = document.getElementById("input-reading").value;
   let readingScore = 0;
   if (studentReadingPoints == 40){
           readingScore = 9;
    } else if (studentReadingPoints ==  39){
           readingScore = 8.5;
   } else if (studentReadingPoints ==  38){
           readingScore = 8;
   } else if ((studentReadingPoints > 34)&&(studentReadingPoints < 38)){
           readingScore = 7.5;
   } else if (studentReadingPoints == 34) {
           readingScore = 7;
   } else if ((studentReadingPoints > 30)&&(studentReadingPoints < 34)){
           readingScore = 6.5;
   } else if (studentReadingPoints == 30) {
           readingScore = 6;
   } else if ((studentReadingPoints > 23)&&(studentReadingPoints < 30)){
           readingScore = 5.5;
   } else if (studentReadingPoints == 23){
           readingScore = 5;
   } else if ((studentReadingPoints > 15)&&(studentReadingPoints < 23)){
           readingScore = 4.5;
   } else if (studentReadingPoints == 15) {
           readingScore = 4;
   } else if ((studentReadingPoints > 11)&&(studentReadingPoints < 15)){
           readingScore = 3.5;
   } else if ((studentReadingPoints > 8)&&(studentReadingPoints < 11)){
           readingScore = 3;
   } else if ((studentReadingPoints > 5)&&(studentReadingPoints < 8)){
           readingScore = 2.5;
   } else if (studentReadingPoints < 6){
           readingScore = 2;
   } else {
       alert ('Please enter a number between 0 - 40');
   }
   return readingScore;
   }    

let resultReadingScore = getStudentScore ();

// //funcion que controla el click del boton CALCULATE para dar el score 
function handleBtnClick (){
    let header = document.createElement ("p");
    let container = document.getElementById("formulario-points");
    header.innerText = "Your score is " + getStudentScore ();
    container.append(header);
}



//funcion que determina los puntos minimos para llegar al score deseado
function getMinPoints (){
    let studentNeededScore = document.getElementById("needed-score").value;
    if (studentNeededScore == 9){
        return 40;
    }
    else if (studentNeededScore == 8.5){
        return 39;
    }
    else if (studentNeededScore == 8){
        return 38;
    }
    else if (studentNeededScore == 7.5){
        return 35;
    }
    else if (studentNeededScore == 7){
        return 34;
    }
    else if (studentNeededScore == 6.5){
        return 31;
    }
    else if (studentNeededScore == 6){
        return 30;
    }
    else if (studentNeededScore == 5.5){
        return 24;
    }
    else if (studentNeededScore == 5){
        return 23;
    }
    else if (studentNeededScore == 4.5){
        return 16;
    }
    else if (studentNeededScore == 4){
        return 15;
    }
    else if (studentNeededScore == 3.5){
        return 12;
    }
    else if (studentNeededScore == 3){
        return 9;
    }
    else if (studentNeededScore == 2.5){
        return 6;
    }
    else if (studentNeededScore == 2){
        return 5;
    }
    else {
        return "Please enter a number between 1 - 40";
    }
}

let minPoints = getMinPoints ();

// //funcion que controla el click del boton CALCULATE para dar los puntos minimos
function handleBtnClick2 (){
    let header = document.createElement ("p");
    let container = document.getElementById("formulario-score");
    header.innerText = "You need at least " + getMinPoints () + " points";
    container.append(header);
}

