//Es una nueva forma de definir funciones anonimas que sean expresadas.

//Una funcion expresada se genera cuando a  una variable le asignas el valor de una funcion anonima. y la cual no puedo invocar primero sin antes definirla o declararla #Hoisting

//EJEMPLO DE FUNCION EXPRESADA
const saludar = function () {
  console.log("Hola");
};
saludar();

//ARROW FUNCTION

const saludar2 = () => {
  console.log("Hola que tal");
};

//Cuando la funcion flecha tiene solo una linea de codigo en el cuerpo, puedo omitir las llaves.

const saludar3 = () => console.log("Hola que tal");

//Parametros en la funcion flecha

const saludar4 = (nombre) => console.log(`Hola que tal ${nombre}`);

saludar4("Manuel");

//Cuando una funcion flecha recibe solamente un parametro no es necesario poner parentesis, EJ.

//const saludar5 = nombre => console.log(`Hola que tal ${nombre}`);

//saludar5("Nevis");

console.log("-------------");

//return inplicito cuando tengo una linea de codigo, pero cuando tiene varias lineas de codigo hay que respetar el cuarpo de la funcion y el return ya no es implicito

const sumar = (a, b) => a + b;

console.log(sumar(9, 9));

console.log("-------------");

const numeros = [1, 2, 3, 4, 5];

numeros.forEach((ele, index) => {
  console.log(`${ele} esta en la posición ${index}`);
});

console.log("-------------");

//Las funciones flechas capturan el objetos this en el que se encuentren

function perro() {
  console.log(this);
}

perro();

const perro1 = {
  nombre: "Pimbo",
  ladrar() {
    console.log(this);
  },
};

//this hace referencia al objeto perro1
perro1.ladrar();

//hay que tener cuidado e utilizar metodos dentro de objetos literales. no respeta el contexto en el que se encuentra

const perro3 = {
  nombre: "Pimbo",
  ladrar: () => {
    console.log(this);
  },
};

perro3.ladrar();
