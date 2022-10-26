function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(10);
//con esta funcion anidada podemos ver que para muMoneyBox al final, despues de ejecutarla 3 veces tendremos como valor final $20 ahorrados

const myMoneyBoxAna = moneyBox();
myMoneyBoxAna(10);
myMoneyBoxAna(10);
myMoneyBoxAna(30);
//y creando una variable que contenga esta misma funcion recordara montos diferenciados, para ana teniendo al final $50