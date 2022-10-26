//Las variables definidas dentro de un bloque solo pueden ser utilizadas dentro de ese bloque
// var es utilizado para tener acceso a este a apartir de distintos elementos
//la intencion de let y const es dejar de utilizar la palabra reservada var

//UN BLOQUE ESENCIALMENTE ES TODO LO QUE ESTE DENTRO DE LAS LLAVES {}

function fruits() {
    if (true) {
        var fruit1 = 'apple'; //function scope
        let fruit2 = ' kiwi'; //block scope
        const fruit3 = 'banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();

//las variables que tienen block scope solo pueden ser accedidas dentro el bloque de codigo
//fruit1 tiene function scope por lo tanto puede accederse a ella dentro la funcion, pero no de forma global