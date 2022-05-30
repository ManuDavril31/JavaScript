//La destructuración es una nueva forma de asignar valores sobre todo a arreglos u objetos.

//Asignas dinamicamento lo que viene de un arreglo u objeto a nuevas variables pero de una manera más ágil.

const numeros = [1, 2, 3];

//SIN DESTRUCTURACIÓN
let uno = numeros[0];
dos = numeros[1];
tres = numeros[2];

console.log(uno, dos, tres);

console.log("------------");

//CON DESTRUCTURACIÓN
//A cada una de los valores que vienen del array numeros le estoy asignando dinámicamente una variable, ej, al numero 1 que esta en la posición 0 del array le asigno el nombre uno.
const [one, two, three] = numeros;

console.log(one, two, three);

console.log("-----------");

//Para que la destructuracion funcione en los objetos es muy importante que la variable que trato de crear se llame igual que la propiedad que pretendo extraer o aislar en una sola variable.
const persona = {
  nombre: "Manuel",
  apellido: "Martinez",
  edad: 31,
};

let { nombre, apellido, edad } = persona;

//Incorrecto por que estoy intentando llamar la propiedad age pero esta no ha sido declarada en el objeto persona.
// console.log(nombre, apellido, age);

//Correcta
console.log(nombre, apellido, edad);
