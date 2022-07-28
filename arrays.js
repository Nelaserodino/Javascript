
//array con las respueas correctas para las secciones 1, 2 y 3 del Reading Test 1

let readingTest1Section1 = ["d", "c", "b", "a", "c", "b", "a", "false", "false", "true", "not given", "true", "not given", "true"]; //14 respuestas

let readingTest1Section2 =["v", "i", "viii", "vi", "iv", "iii", "new employees", "next orientation session", "the orientation", "procedures and policies", "the employee's supervisor", "human resources","March 15"]; //13 respuestas

let readingTest1Section3= ["c", "b", "a", "b", "a", "c", "a", "parallel floats", "a platform", "huge expanses", "many fighters", "recreational", "birch-barck"]; //13 respuestas



//array y objetos 

function Student(name, targetScore) {
    this.name = name;
    this.targetScore = targetScore;
    this.testReadingScores = [];
    //funcion para calcular el promedio de los puntos del reading test 
    this.getAverage = function() {
        let sum = 0;
        for (let i = 0; i < this.testReadingScores.length; i++) {
            sum += this.testReadingScores[i];
        }
        return Math.round(sum / this.testReadingScores.length);
    }//funcion para saber si el alumno llega al puntaje objetivo
    this.isPassed = function() {
        return this.getAverage() >= this.targetScore;
    }
}


let student1 = new Student("Pepe", 8);
let student2 = new Student("Elena", 8);
let student3 = new Student("Rosana", 8);
let student4 = new Student("Ignacio", 8);
let student5 = new Student("Rosana", 8);
let student6 = new Student("Marta", 7);

//agregar los puntos de los reading test a cada alumno
student1.testReadingScores.push(5,6,7,5);



console.log(student1.name); 
console.log(student1.testReadingScores); 
console.log(student1.getAverage());
console.log(student1.isPassed());


