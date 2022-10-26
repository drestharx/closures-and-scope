//ambito lexico es la accesibilidad que tendremos de las variables anidadas dentro de funciones y asi poder llamarlas
//la accesibilidad de las variables esta determinada por la posicion de las mismas, dentro de los ambitos anidados

const myGlobal = 0;

function myFunction() {
    const myNumber = 1
    console.log(myGlobal);

    //al crear una funcion dentro de otra funcion (funcion anidada) tendremos un closure
    const p = function parent() {
        const inner = 2;
        console.log(myNumber, myGlobal);
        
        const c = function child() {
            console.log(inner, myNumber, myGlobal);
        }
        return c();

    }

    return p();
}

myFunction();