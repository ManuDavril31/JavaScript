// DETRO DE LA PROGRAMACION ORIENTADA A OBJETOS HAY TRES CONCEPTOS IMPORTANTES QUE DEBEMOS APRENDER

/*
CLASES - Modelo a seguir.
OBJETOS - instancia de una clase
    ATRIBUTOS - es una caracteristica o propiedad del objeto(son variables de un objeto)
    METODOS - son acciones que un objeto puede realizar (son funciones dentro de un objeto)
*/

//Una CLASE es un modelo a seguir, nos sirve como plantilla para basarnos y poder generar instancias.

//Un OBJETO es una instancia/copia de una CALSE

//PROTOTIPO - es un mecanismo por el cual un objeto puede heredar de un objeto padre atributos y metodos

//Función constructora
//tanto los atributos como los metodos, tienen que integrar de la palabra this.

function Animal(nombre, genero) {
  (this.nombre = nombre),
    (this.genero = genero),
    (this.sonar = function () {
      console.log("Hago sonidos por que estoy vivo");
    });
}

//Creando instancias a partier de una funcion constructura

const snoopy = new Animal("Snoppy", "Macho");
const lolaBunny = new Animal("Lola Bunny", "Hembra");
console.log(snoopy);
console.log(lolaBunny);
