//Una nueva forma de escribir atributos y metodos.

let nombre = "Manu";
edad = 31;

const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guauu, guauu");
  },
};

console.log(perro);

//Creando objetos literales
const dog = {
  //Cuando el nombre de la propiedad es igual al nombre de la variable se escribe simplement una vez, por que nombre: nombre seria redundante.
  nombre,
  edad,
  raza: "Callejero",
  //de esta forma se escriben las funciones dentro de un objeto literal
  ladrar() {
    console.log("Guauu, guauu, guauu");
  },
};

console.log(dog);
dog.ladrar();
