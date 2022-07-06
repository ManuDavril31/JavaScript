//vamos a crear una variable
console.log(this);
this.lugar = "Contexto global";

function saludar(saludo, aQUien) {
  console.log(`${saludo} ${aQUien} desde el ${this.lugar}`);
}

saludar("Hola", "Manuel");

const obj = {
  lugar: "Contexto objeto",
};

//El método cal recibe como parametro un objeto el cual va hacer el contexto

//Voy a ejecutar la función saludar, pero con el método call le decimos que va a menejar otro contexto o un nuevo this. en este caso el nuevo this o contexto que quiero mandar a llamar es el de obj

saludar.call(obj, "Hola", "Manuel");
//El metodo apply funciona exactamente igual, pero la diferencia radica en la forma de mandar a llamar los parametros, los argumentos desde el método apply los recibe en forma de arreglo.

//Si ponemos null donde recibe el objeto te tira el contexto global
saludar.call(null, "Hola", "Manuel");

saludar.apply(obj, ["Adios", "Manuel"]);

//bind nos permite enlazar contextos diferentes

const persona = {
  nombre: "Manuel",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

persona.saludar();

const otraPersona = {
  //con el método bind enlazo el contexto que yo quiera, en este caso el del objeto persona
  saludar: persona.saludar.bind(persona),
};

/*Como el objeto otraPersona, no tiene una propiedad llamada nombre, el resultado da undefined, 
pero con el método blind le asigno el conrexto del objeto persona entonces me devuelve manuel */
otraPersona.saludar();
