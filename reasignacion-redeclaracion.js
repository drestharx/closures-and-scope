// --------------- VAR ----------------

var firstName; // declaracion (valor undefined)
firstName = 'Oscar'; // asignacion
console.log(firstName);

var lastName = 'David'; //declaracion y asignacion
lastName = 'Ana'; //reasignacion
console.log(lastName);

var secondName = 'David'; //declaracion y asignacion
var secondName = 'Ana'; //redeclarando y reasignacion
console.log(secondName); // mostrara el valor 'Ana';


// --------------- LET ----------------

// no se puede redeclarar variables con let, esto retornara un error directamente

let fruit = 'apple'; //declarando
fruit = 'kiwi'; // reasignando
console.log(fruit);

let fruit = 'banana'; //redeclarando y reasignando
console.log(fruit);


// --------------- CONST ----------------

const animal = 'perro'; //declaracion y asignacion
animal = 'cat'; // reasignacion
console.log(animal);
//const no permite las reasignaciones

const animal = 'snake'; //redeclarando y reasignando
//const tampoco puede redeclararse

//es diferente con los arreglos, ya que al utilizar los metodos de manipulacion solo estamos haciendo referencia a dicho arreglo y no cambiandolo con otros valore (revisar concepto de inmutabilidad)

const vehiculos = [];
vehiculos.push('Toyota');
console.log(vehiculos);