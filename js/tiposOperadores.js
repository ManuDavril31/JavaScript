//OPERADORES ARITMETICOS + - * / % ()

const a = 5 + 5 - 10 * 3;
console.log(a);

const modulo = 5 % 2;
console.log(modulo);

//OPERADORES RELACIONALES <, >, <=, >=, ==, ===, !=, !==

console.log(8 > 9);
console.log(9 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 <= 7);

// = 1 igual es asignacion de variable
// == 2 iguales es comparacion de valores
console.log(7 == 7);

// === 3 iguales es comparacion de tipo de dato y de valor
console.log(7 === 7);

//INCREMENTO Y DECREMENTO
let i = 1;

//i = i + 2;
i += 3;
console.log(i);

//OPERADOR UNARIO
let j = 1;
j++;
console.log(j);
++j;
console.log(j);

//OPERADORES LOGICO
// ! NOT: niega, es decir lo que es verdadero lo vuelve falso y viceversa
console.log(!true);
console.log(!false);
// || - OR: Cuando tengo 2 o mas condiciones, con que una se cumpla, es decir sea verdadera, el OR validará
console.log(9 === 9 || "9" === 9);
//&& - And cuando tengo dos o mas condiciones todas tienen que cumplirse, es decir, ser verdaderas para que AND se valide
console.log(9 === 9 && "9" === 9);
console.log(9 === 9 && "9" === "9");
