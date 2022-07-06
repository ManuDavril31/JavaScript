//

const objUsiarios = {};

const usuarios = ["manuel", "nevis", "victoria", "sisxta"];

//una manera de crear una propiedad después que ha sido definido un objeto es con la notación del punto o con la notacion de corchetes [].

//La notacion de corchetes es la que nos va a permitir crear de manera dinámica los nombres de las propiedades de nuestro objeto.

//Aquí estamos creando nuevas propiedades al array objUsiarios con la notacion de corchetes y con templete string estamos concatenando id+ el indice y luego a esa propiedad le asignamos el usuario.
usuarios.forEach((usuario, index) => (objUsiarios[`id_${index}`] = usuario));

console.log(objUsiarios); /* {
    "id_0": "manuel",
    "id_1": "nevis",
    "id_2": "victoria", 
    "id_3": "sisxta"
}*/

//Creando directamente detro del objeto las propiedades dinámicas.

const aleatorio = Math.round(Math.random() * 100 + 5);

const objeto = {
  //Creando propiedades dinámicas destro del objeto con la notacion de corchetes.
  [`id_${aleatorio}`]: "Valor aleatorio",
};

console.log(objeto);
