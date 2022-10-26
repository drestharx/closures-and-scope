// HOISTING EN VARIABLES

var name; // el hoisting eleva la declaracion de la variable y lo deja como undefined y al hacer el console.log se queda con el valor undefined
console.log(name);
var name = 'Elmo';
console.log(name);// aca si mostrara el valor de name

//HOISTING EN FUNCIONES

var elmo; // se creo esta variable con valor undefined 

//mientras que la asignacion de la funcion se realizara en memoria antes de su llamado

name1();

function name1() {
    console.log(`El nombre es: ${elmo}`);
}

var elmo = 'Elmillo';