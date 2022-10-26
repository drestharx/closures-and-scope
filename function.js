//toda variable decalrada dentro de una function tiene su alcance solamente dentro de la funcion y las funciones anidadas

function saludo() {
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana') { //si userName es exactamente igual en valor y tipo
        console.log(`Hello ${userName}`);
    }

}

console.log(userName);
//El resultado sera que userName es no defined, porque la variable userName solo existe dentro de la funcion saludo