//Capacidad de heredar caracteristicas de un padre a un hijo

function Animal(nombre, genero) {
  (this.nombre = nombre),
    (this.genero = genero),
    (this.sonar = function () {
      console.log("Hago sonidos por que estoy vivo");
    });
}

//Herencia Prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro esta heredando de Animal

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos del Prototipo padre en el hijo
