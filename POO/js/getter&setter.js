class Animal {
  //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Metodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Animal("Scooby", "Macho");
console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //Con el mpetoodo super() se manda a llamar el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  //sobreescribir los metodos sonar() y ladrar()
  sonar() {
    console.log("Hola soy un perro y mi sonido es un ladrido");
  }

  ladrar() {
    console.log("Guauu, guauu");
  }

  //los método estático se pueden ejecutar sin necesidad de instanciar la clase
}

const mimi2 = new Animal("Mimi", "Hembra");
scooby2 = new Perro("Scooby", "Macho", "Gigant");

console.log(mimi2);
mimi.saludar();
mimi.sonar();
console.log(scooby2);
scooby2.saludar();
scooby2.sonar();
scooby2.ladrar();
