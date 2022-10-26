// es usado para tener mucho mas control de la asignacion de variables utilizando reglas mas concretas

'use strict';
pi = 3.1416;
console.log(pi); // nos mostrara que pi no esta definido, de este modo es necesario declarar y asignar las variables manualmente siempre, dejando de lado la interpretacion del navegador

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction()); // nos devolvera que pi no esta definida ya que pi no esta siendo declarada anteriormente