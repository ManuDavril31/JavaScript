//UNA FUNCION ES UN BLOQUE DE CODIGO QUE AUTOCONTENIDO QUE SE PUEDE DEFINIR UNA VEZ Y EJECUTAR EN CUALQUIER MOMENTO. OPCIONALMENTE, UNA FUNCION PUEDE ACEPTAR PARÁMETROS Y DEVOLVER UN VALOR.

//LA FUNCION EN JAVASCRIPT SON OBJETOS, UN TIPO ESPECIAL DE ONJETO.

//SE DICE QUE LAS FUNCIONES SON CIUDADANOS DE PRIMERA CLASE POQUE PUEDEN ADIGNARSE A UN VALOR, Y PUEDEN PASARSE COMO ARGUMENTOS Y USARSE COMO UN VALOR DE RETORNO

//FUNCIONES DECLARADAS
function estoEsUnaFuncion() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
}

//INVOCACION DE FUNCIÓN
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

function unaFuncionQueDevuelveValor() {
  console.log("Uno");
  //Cuando una funcion dentro del cuerpo de la misma funcion encuentra la palabra reservada return, en ese momento ignora todas las lineas que estan abajo y retorna ese valor como valor de la funcion.

  //Todo lo que esta antes del return se ejecuta y lo que esta despues del return se ignora y se para a la siguiente linea de codigo.
  return 19;
  console.log("Dos");
  console.log("Tres");
  return "La funcion ha retornado una cadena de texto";
}

let valorDeFuncion = unaFuncionQueDevuelveValor();
console.log(valorDeFuncion);
//asignando vaores por defecto a una funcion
function saludar(nombre = "Desconocido", estatura = 0) {
  console.log(`Hola mi nombre es ${nombre} y tengo ${estatura} años de edad`);
}

saludar("Manuel", 15);
saludar();

funcionDeclarada();

function funcionDeclarada() {
  console.log(
    "Esto es una funcion declarada, puede invocarse en cualquier parte de nuestro codigo, incluso anes de que la funcion sea declarada"
  );
}

//FUNCION ANONIMA: QUE NO TIENE NOMBRE

//funcionExpresada();

const funcionExpresada = function () {
  console.log(
    "Esto es una funcion expresada, es decir, una función que se le ha asignado el valor a una variable, si invocamos esta funcion antes de su definicion JavaScript nos dire... Cannot access 'funcionExpresada' before initialization"
  );
};

funcionExpresada();
