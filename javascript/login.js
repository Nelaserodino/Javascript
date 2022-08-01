//creo una clase constructora para obtener los datos de los alumnos
class Student {
    constructor(name, email, targetScore) {
        this.name = name;
        this.email = email;
        this.targetScore = targetScore;
    }
    //metodos
}

//creo un array con los datos de los alumnos, para luego enviarlo al local storage
let arrayStudents = [];

//genero los eventos para capturar la informacion de los alumnos
let formLogIn = document.querySelector (".form-LogIn");

formLogIn.addEventListener ("submit", (event) => {
    event.preventDefault ();
    let name = document.querySelector (".loginName").value;
    let email = document.querySelector (".loginEmail").value;
    let targetScore = document.querySelector (".loginTargetScore").value;
    let student = new Student (name, email, targetScore);
    arrayStudents.push (student);
    displayStudentInfo();
}
);

//funcion que se encarga de generar el html con la informacion del estudiante

const displayStudentInfo = () => {
    let container = document.querySelector (".personalDetails");
    arrayStudents.map (el => container.innerHTML += 
    `<h5>Welcome ${el.name}!</h5>
    <p>Your target Score is ${el.targetScore}.</p>
    <p>Let's start practising!</p>
    </div>`);
    container.append(container.innerHTML);
};



