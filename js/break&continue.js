// break - continue
//Estas palabras nos van ayudar a controlar el flujo de nuetras estructuras de control o bucles.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//Las palabras break y continue no se pueden utilizar en metodos de los arreglos, estan destiandas para utilizarlas en estructuras de control como el for, while, do while, if, witch case.

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    //El break lo que hace es salirse de la estructura de control cuando se cumple cierta condición.
    break;
  }
  console.log(numeros[i]);
}

console.log("----------------");

for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    //Omite el codigo que se encuentra en la iteracion cuando se cumple cierta condición. en este caso cuando la variable i es igual a 5, entonces el continue omite el valor 6 del array numero y continua imprimiendo los dempas valores del array
    continue;
  }
  console.log(numeros[i]);
}
