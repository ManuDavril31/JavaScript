//UN OBJETO ES UNA COLECCION DE LLAVES - VALORES

const b = {};
console.log(b);

//DENTRO DE UN OBJETO A LAS VARIABLES SE LES VA A LLAMAR ATRIBUTOS/PROPIDADES
//A LAS FUNCIONES SE LES LLAMA METODOS

const jon = {
  nombre: "Jon",
  apellido: "MirCha",
  edad: 35,
  pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
  soltero: false,
  contacto: {
    email: "mail@mail.com",
    twitter: "@mail",
    movil: "234565",
  },
  //ESTO SERIA UN METODO DESTRO DE UN OBJETO
  saludar: function () {
    console.log("Hola :)");
  },
  decirMiNombre: function () {
    //EL OPERADOR this HACE REFERENCIA AL OBJETO EN EL CUAL SE ESTA TRABAJANNDO, EN ESTE CASO HACE REFERENCIA A OBJETO jon.
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  },
};

console.log(jon);
//ACCEDIENDO A UN VALOR DEL OBJETO CON CORCHETES
console.log(jon["nombre"]);
console.log(jon["apellido"]);
//ACCEDIENDO A UN VALOR DEL OBJETO CON LA NOTACION DE PUNTO | LA MAS USADA |
console.log(jon.nombre);
console.log(jon.edad);
console.log(jon.pasatiempos[1]);
console.log(jon.contacto);
console.log(jon.contacto.twitter);
jon.saludar();
jon.decirMiNombre();

//METODO PARA LISTAR LAS LLAVES EL OBJETO
console.log(Object.keys(jon));
//METODO PARA LISTAR LOS VALORES DE LA LLAVES
console.log(Object.values(jon));
//DEVUELVE VERDADERO SI ENCUENTA LA LLAVE QUE LE MANDO DENTRO DEL OBJETO
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));
