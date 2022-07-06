//Symbol es un tipo de dato primitivo, una vez que creamos un dato tipo symbol su valor se va a mantener privado y para uso interno.
//Los symbols nos permiten crear identificadores de referencias unicos

let id = "Hola";
let id2 = "Hola";

//Esto da verdadero porque se cumple la condisión
console.log(id === id2);

let id3 = Symbol();
let id4 = Symbol();

//Da falso por que el tipo de dato Symbol crea identificadores unicos. Crea una referencia unica.
console.log(id3 === id4);

let id5 = Symbol("id5");
let id6 = Symbol("id6");

console.log(id5, id6);
console.log(typeof id5, typeof id6);

//Aqui le pasamos una descripción al tipo de dato Symbol con el fin de poder diferenciarlos.
const NAME = Symbol("name");
const SALUDAR = Symbol("saludar");

const person = {
  //declaramos la propiedad de symbol dentro del objeto, con la notacion de corchetes
  [NAME]: "Manuel",
  edad: 35,
};

console.log(person);

//Aqui declaramos una nueva propiedad con la noración de punto y la llamamos igual que el symbol, esta no afecta la propiedad de tipo Symbol.
person.NAME = "Mnuel Martinez";

console.log(person);

//Para mandar a llamar la propiedad de notacion Symbol del objeto person utilizamos los corchetes.

console.log(person[NAME]); // Manuel

//Asignando una nueva propiedad de tipo Symbols al objeto persona como una función.
person[SALUDAR] = function () {
  console.log("Hola");
};

console.log(person);
//Ejecutando una función establecida con la notación de Symbol.
person[SALUDAR]();

//Recorriendo las propiedades del objeto persona, en el cual no se van a listar las de tipo Symbol
for (let propiedad in person) {
  //Aqui me regresa el nombre
  console.log(propiedad);
  //Me regresa el valor de la propiedad
  console.log(person[propiedad]);
}

//devolviendo la lista de los Symbol del objeto persona. Los cuales se devuelven en un array
console.log(Object.getOwnPropertySymbols(person));
