//Los parámetros REST son una forma de virtualmente de ir agregando parametros infinitos a una función, etc.

//PARAMETROS REST
//capacidad de tener parámetros infinitos

function sumar(a, b, ...c) {
  let resultado = a + b;

  //Voy iterando los valores que vengan en el valor de los párametros REST ...c y los voy sumando al valor resultado
  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5, 6));

//OPERADOR DE PROPAGACION

//Nos va a permitir que cuando una expresion la tengamos que expandor en situacione donde tengamos que almacenar multiples argumentos o elementos lo podamos hacer.

const array = [1, 2, 3, 4, 5],
  array2 = [5, 6, 7, 8, 9];

console.log(array, array2);

const array3 = [...array, ...array2];
console.log(array3);
