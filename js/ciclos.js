let contador = 0;

//Revisa primero la comparacion a ver si se cumple y dependiendo realiza la ejecución del código.

while (contador < 10) {
  console.log(contador);
  contador++;
}

//Se ejecuta por lo menos una ves y luego hace la comprobacion de la condición.
do {
  console.log(contador);
  contador++;
} while (contador < 10);

//ciclo for
for (let i = 0; i < 10; i++) {
  console.log(`For: ${i}`);
}

//Recorriendo un Array
const num = [10, 20, 30, 40, 45, 50, 55];

for (let j = 0; j < num.length; j++) {
  console.log(num[j]);
}

//Ciclo for in Para recorrer/ iterar las propiedades de un objeto primitivo

const manuel = {
  nombre: "Manuel",
  apellido: "Martinez",
  edad: 30,
};

for (ele in manuel) {
  console.log(`Key: ${ele}, Value: ${manuel[ele]}`);
}

//For of me permite recorrer todos los elementos de cualquier objeto que sea iterable en JavaScript

for (const item of num) {
  console.log(item);
}

let cadena = "Hola Mundo";

for (const caracter of cadena) {
  console.log(caracter);
}
