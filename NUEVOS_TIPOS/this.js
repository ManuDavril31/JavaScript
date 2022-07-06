//Como estamos en el javaScript de la navegadores this va hacer referencia al objeto global, y el objeto global en este objeto que se llama windows

console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//creando una variable en el contexto global windows

this.nombre = "Contexto Global";
console.log(this.nombre);

//Creando una funcion para imprimir el this.nombre

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: "Contexto Obejto",
  imprimir: function () {
    console.log(this.nombre);
  },
};
obj.imprimir();

//

const obj2 = {
  nombre: "Contexto Objeto 2",
  //le asignamos como propiedad a este objeto la funcion de ambito global imprimir que se encuentra en la línea 12 y como el nombre de la propiedad es igual al nombre de la funcion simplemente hacemos referencia al nombre.
  imprimir,
};

obj2.imprimir();

//
const obj3 = {
  nombre: "Contexto Obejto 3",
  //La arrow function no maneja su propio contexto, por ende esta haciendo refeencia al contexto global
  imprimir: () => {
    console.log(this.nombre);
  },
};

//una arrow function lo que hace es mantener un enlace del contexto en el que ha sigo creado el objeto donde aparece, es decir,  a direfencia de la funcion anonima crada en la línea 20 la cual maneja su propio scope o contexto, la arrow function no maneja su propio contexto
obj3.imprimir();

//funcion constructora la cual crea su propio scope o contexto
function Persona(nombre) {
  this.nombre = nombre;
  return console.log(this.nombre);
}

let manuel = new Persona("Manuel"); //Manuel

//Es esta funcion ya no me imprime manuel, tendria que ejecutar manuel2 como un metodo porque esta retornando una funcion
function Persona2(nombre) {
  this.nombre = nombre;

  //esta nueva funcion crea un nuevo contexto, entonces esta funcion no tienen ninguna propiedad nombre, y como no tiene propiedad nombre lo que hacer es regresarse al this del contexto global y por eso cuando ejecutamos este metodo en la linea 70 retorna 'Contexto Global'
  return function () {
    console.log(this.nombre);
  };
}

//Es esta funcion ya no me imprime manuel, tendria que ejecutar manuel2 como un metodo porque esta retornando una funcion. y esto me devuelve el contexto global
let manuel2 = new Persona2("manuel");

//Casa funcion dentro de javascript crea un contexto exepto las arrow function.
manuel2();

//

function Persona3(nombre) {
  this.nombre = nombre;

  //Si retornamos esto con una arrow function, ahora si nos retorna el valor de la propiedad del contexto
  return function () {
    console.log(this.nombre);
  };
}

let manuel3 = new Persona("manuel3");
