//api: es aquella serie de objetos y mecanismos que tiene el lenguaje implementado, en este caso los navegadores para poder interactuar con el navegador

console.log(window);
console.log(document);

let texto = "Hola, doy tu amigo y docente digital... Manuel Martinez";

const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};

hablar(texto);
