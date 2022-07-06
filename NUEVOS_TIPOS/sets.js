//Es una estructura similar a un Array pero de datos unicos

//Declarando una variable de tipo SET
const set = new Set([
  1,
  2,
  3,
  4,
  5,
  5,
  true,
  false,
  false,
  false,
  {},
  {},
  "Hola",
  "HOla",
]);

//Aqui podemos ver que el SET elimina los objetos dumplicados y lore reduce a 1 solo.
console.log(set);

//Aqui con la propiedad size obtenemos la longitud del SET
console.log(set.size);

//Otra forma de crear un SET

const set2 = new Set();

set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(true);
set2.add(false);
set2.add({});
console.log(set2);
console.log(set2.size);

//Iterando los tipos de datos SET

//Con el método for of
for (item of set) {
  console.log(item);
}

console.log("/////////////////////////");

//Con el método forEach
set2.forEach((item) => console.log(item));

//Para acceder a las propiedades o posiciones de los SET

//Para poder acceder a las posiciones de los SET tenemos que acceder a la poropiedad from de los objetos Array. Ejemplo.

//Los valores del tipo SET los guarde en una nueva variable de tipo Array
let arr = Array.from(set);

console.log(arr);
console.log(arr[9]);
console.log(arr[10]);

//Eliminando elementos de los SET

set.delete("HOla");
console.log(set);

//Comprobando si el valor existe en el SET con el método has()

console.log(set2.has("Hola")); // false por que este dato no existe en la coleccion de tipo SET que le estamos enviando

//limpiando los SET

set2.clear();
console.log(set2);
