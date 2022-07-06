//es un mecamnismo que permite crear un objeto basado en un objeto literal inicial, hace una vinvulacion del objeto original y del objeto copia y a través de su objeto especial manejador podemos hacer validaciones antes de hacer la asignación

const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  set(obj, prop, valor) {
    //aqui validamos que en el objeto persona este la propiedad que le estamos mandando
    //Si el indexOf devuelve un -1 significa que esa propiedad no existe en el objeto persona
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad ${prop} no existe en el objeto persona`
      );
    }
    //en el objeto persona, en su propiedad se le va a asignar el valor
    obj[prop] = valor;
  },
};

const manuel = new Proxy(persona, manejador);
manuel.nombre = "Manuel";
manuel.apellido = "Martinez";
//Como tienen una vinculacion, al momento de asignar una nueva propiedad, esta se le asigna tambien al objeto de referencia, en este caso persona. pero podemos validar con un if que no se le modifiquen las propiedades a ese objeto persona: VER LINEA 13
manuel.twitter = "@manudavril";
manuel.edad = 31;

console.log(manuel);
