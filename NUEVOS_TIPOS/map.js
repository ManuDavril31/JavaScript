//Los map son objetos que nos sirven para almacenar conjuntos de valores asociados a manera de objeto llave: valor.
const mapa = new Map();

//agregando valores, los cuales se agregan con llave, valor

mapa.set("nombre", "Manuel");
mapa.set("apellido", "Martinez");
mapa.set("edad", 35);

console.log(mapa);

//obteniendo la longitud del MAP

console.log(mapa.size);

//comprobando si existe un elemento dentro del MAP

console.log(mapa.has("nombre"));
console.log(mapa.has("edad"));

//obtenidendo elemnetos a MAP
console.log(mapa.get("nombre"));

//obreescribiendo elementos del MAP
mapa.set("nombre", "NEvis Polo");
console.log(mapa.get("nombre"));

//eliminando elementos de un MAP
mapa.delete("apellido");
console.log(mapa);

//La diferencia es que en un objeto primitivo el nombre de todas las propiedades de ese objeto son cadens de texto, resulta que en los mapas nosotros podermos generar llaves que no sean cadenas de texto, es decir, otros tipos de datos.

mapa.set(19, "diecinueve");
mapa.set(false, "false");
mapa.set({}, {});

console.log(mapa);

//Recorriendo un MAP
for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

//Segunda forma de inicializar un nuevo MAP
//Para cada lleva valor tenemos que poner como si fuera un arreglo dentro de un arreglo, ejemplo
const mapa2 = new Map([
  //Esta seria la primera propiedad.
  ["nombre", "Victoria"],
  ["edad", 7],
  ["animal", "perro"],
  [(null, "nulo")],
]);

console.log(mapa2);

//de mapa2 almacename las llaves en la variable llaveMapa2

const llavesMapa2 = [...mapa2.keys()];
//de mapa2 almacename los valores en la variable valoresMapa2
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
