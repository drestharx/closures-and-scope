// Scope es el alcance que determina la accedibilidad de las variables, ¿en donde podremos utilizarlas?
//Tanto los objetos como las funciones se declaran como variables, entonces el scope los afecta 
// Tipos de Scope 
// Global.-  
// Function.-  
// Block.- 


var a; //declaracion
var b = 'b'; // declarando y asignando
var b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion y asignacion

//  --------------  GLOBAL SCOPE  ---------------

//cualquier variable declarada en el documento se estancia en el objeto llamado window, entonces tenemos acceso a estas en cualquier parte del documento
//el siguiente ejemplo demuestra q cualquier variable que este declarada en el documento esta accesible para funciones o bloques de codigo

var fruit = 'apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();

//Cuidado con solo asignar variables, ya que al hacerlo estas pasan a ser variables globales

function countries() {
    country = 'Colombia'; //variable global
    console.log(country)
}
// al hacer esto la variable country deberia ser accesible solo en la funcion pero pasa a ser global por no declararla apropiadamente
countries();
console.log(country);

