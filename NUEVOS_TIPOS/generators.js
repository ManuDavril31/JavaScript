//Es una funcion que nos permite trabajar de una manera más amigable con la interfece de los iteradores en un elemento iterable

//El asterisco le indica a javascipt que esto es un generador
function* iterable() {
  //es como un return que le va a indicar a la funcion que se va a detener, luego cuando se ejecute el proximo next, se va a detener luego cuando encuentre el proximo yield pero sin ejecutar el anterior
  yield "Hola";
  console.log("Hola consola");
  yield "Hola 2";
  console.log("Seguimos con más instrucciones de nuestro código");
  yield "Hola 3";
  yield "Hola 4";
}

//con esta funcion es un generador por el asterisco, puedo acceder a la interfece directamente sin tener que hacer esto:  'iterable[Symbol.iterator]();' para acceder a la interfece de iterador de   los tipos de datos iterables. .

let iterador = iterable();
//hasta que la propiedad done este en true puedo seguir ejecutando la función para que me retorne todo el contenido.
/*console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/

//por cada y que tenga en el iterador imprime en la consola ese y.
for (let y of iterador) {
  console.log(y);
}

//guardando en un arregle el resultado de una funcion generadora

//Por cada yield ve guardando en una posicion del arreglo los valores que ha ejecutado
const arr = [...iterable()];

console.log(arr); //he guardado los resltados de la función iteradora en un arreglo.

//

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, result: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.log("inicia Generator");
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("termina Generator");
}

let gen = generador();

for (let y of gen) {
  console.log(y);
}
