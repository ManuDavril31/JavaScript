// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const textoSeparado = (cadena) => {
  if (typeof cadena === "string" || cadena instanceof String) {
    //El metodo spit no devuelva un array segun le indiquemos como lo va a cortar.
    const nuevaCadena = cadena.split(" ");
    console.log(nuevaCadena);
  } else {
    console.log(
      "El argumento enviado no es una tipo cadena de texto, favor corregir."
    );
  }
};

textoSeparado("Hola que tal");
