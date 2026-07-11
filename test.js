// arreglo con frases
  const frases = [
    "Omar gay",
    "Hallo, Ten un buen dia :3",
    "Que bonito/a eres :3c",
    "Iphone es una mierda",
    "f'(x) e^x es eterno",
    "SIN SEMEEEEN",
    "Evox is da bess custom rum",
    ":artiboop:",
    ":fakenitroemoji:",
    "I lov \"Mei\" 💖",
    "Ximi 13 lite, i miss yu",
    "Me encanta AJR",
    "Arch linux no es tan bueno",
    "Sans eeeee 🏳️‍⚧️",
    "fastboot erase abl",
    "Beware of the Magisk Man - he bricked my phone.",
    "No quemen los memes porfa",
    "-. .- ...- .. .-.-.",
    "-. .. -. .- .-.-.",
    "Don't look at me, don't look at me, I'm just too dumb",
    "Soy un desastre escribiendo codigo",
    "Salchipapa con queso y mostaza 🗣️",
    "🫪🫪🫪🫪🫪🫪🫪🫪🫪🫪🫪🫪🫪🫪"
    ];
  function cambiarTexto() {
    // Genera un índice aleatorio entre 0 y el largo del arreglo
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    // Reemplaza el contenido del elemento HTML con la frase seleccionada
    document.getElementById("texto-dinamico").textContent = frases[indiceAleatorio];
    }
    window.onload = cambiarTexto;
    