console.log(Math);
console.log(Math.PI);
//El Math.abs() nos devuelve el valor absoluto de un número, es decir devuelve la cantidad como tal sin considerar que sea numero positivo o negativo
console.log(Math.abs(7.8));
console.log(Math.abs(-7.8));
//Metodos Math.ceil(7.8) -- 8 para redondear un número entero posterior inmediato
console.log(Math.ceil(7.8));
//Lo contario con el metodo Math.floor(7.8) -- 7 para redondear un número entero a su numero anterior
console.log(Math.floor(7.8));
//El metodo Math.round va a redondear un numero decimal al inmediatamente más cercano inmediato
console.log(Math.round(7.2)); // 7 por que esta más cercano a 7 que a 8
console.log(Math.round(7.5)); // 8 por que esta más cercano a 8 que a 7
//Metodo para sacar raiz cuadrada
console.log(Math.sqrt(81));
//Metodo para elevar potencia donde el primer numero es la base y el segundo numero es el exponente
console.log(Math.pow(2, 5));
//Metodo Math.sign() no da referencia si es un numero posotivo, negativo o si es cero
console.log(Math.sign(25)); // Es positivo devuelve 1
console.log(Math.sign(-25)); // Es negativo devuelve -1
console.log(Math.sign(0)); // devuelve 0
//Metodo random devuelve un numero aleatorio comprendido entre 0 y 1 si no le indicamos el un numero maximo como se muestra --> console.log(Math.random() * 1000)
console.log(Math.random());
console.log(Math.random() * 1000);
//numero aleatorio sin decimales
console.log(Math.round(Math.random() * 1000));
