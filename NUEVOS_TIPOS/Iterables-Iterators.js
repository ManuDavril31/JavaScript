//es una estructura de datos lineal que hace que sus elementos sean publicos y se puedan recorrer, los arreglos, string, map, set.

const iterable = [1, 2, 3, 4, 5];
//acedemos al iterado del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);

//Iterando los elementos de la varible iterable
/*console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/

//
let next = iterador.next();
while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
//
