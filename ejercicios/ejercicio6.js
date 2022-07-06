// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const verTextoRepetido = (cadena = "", cadena2 = "") => {
  if (!cadena || typeof cadena === "number")
    return console.error(
      "Debes ingresar una cadena de texto como primer y segundo argumento"
    );
  if (!cadena2 || typeof cadena === "number")
    return console.error(
      "Debes ingresar una cadena de texto como segundo argumento"
    );
  const num = [];
  const nuevaCadena = cadena.split(" ");

  for (let i = 0; i < nuevaCadena.length; i++) {
    if (nuevaCadena[i].includes(",")) {
      num.push(nuevaCadena[i].replace(",", ""));
    } else if (nuevaCadena[i].includes(".")) {
      num.push(nuevaCadena[i].replace(".", ""));
    } else {
      num.push(nuevaCadena[i]);
    }
  }
  const result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i].toLowerCase() === cadena2.toLowerCase()) result.push(i);
  }
  return console.log(result.length);
};

const INFO =
  "Lorem ipsum dolor sit HOLA, consectetur adipiscing elit. Nullam eleifend dictum ligula, vitae egestas lacus sagittis ut. Nullam volutpat sodales odio et vestibulum. Curabitur nibh nisl, viverra id semper in, vehicula quis turpis. Aliquam id leo massa. Curabitur sit amet mauris HOLA nisi. Curabitur vitae pharetra diam, ac venenatis velit. Praesent rhoncus sapien sem, vitae porttitor mauris ultrices sed. Proin dolor ex, faucibus sed iaculis sit amet, suscipit ac hola turpis. Aliquam rhoncus, arcu sit amet efficitur accumsan, purus turpis bibendum nulla, sit amet lacinia eros orci a arcu. Donec HOLA in molestie lectus, a lobortis quam. In eget commodo metus. Aenean viverra elit feugiat viverra commodo. Nullam mollis enim dolor, et iaculis ante sollicitudin ut. Quisque quis malesuada lacus. Etiam a condimentum nisl. Donec semper hola leo placerat purus facilisis mattis. Curabitur finibus porta lacus eu accumsan. Sed eget luctus sem, non rutrum leo. Cras finibus, nisi at faucibus molestie, purus risus maximus massa, et tincidunt ipsum turpis eu ipsum. Proin id vestibulum sem, rutrum aliquam neque. Nam ut venenatis magna. Etiam nisi dui, viverra a ultrices hola porttitor, ullamcorper holA nec nisi. Maecenas efficitur eros in metus posuere, in mattis mauris finibus. Duis feugiat interdum semper. Donec vulputate dapibus nisi.";

verTextoRepetido(INFO, "hola");
