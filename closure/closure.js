function saludar() {
    let userName = 'Oscar';

    function displayUserName() {
        return `Hola ${userName}`;
    }

    return displayUserName;
}

const g = saludar();
console.log(g); //con esto estamos llamando solo a la definicion que tiene userName
console.log(g()); //con esto ejecutamos y nos entrega el valor