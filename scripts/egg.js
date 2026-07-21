const popup = document.getElementById('ventana-emergente');
const fifiPlantilla = document.getElementById('fifi-dvd');

let fifi = []; // Aquí guardaremos todos los fifi activos
let animacionId;

// 4 Esquinas posibles en coordenadas binarias (0 = inicio, 1 = extremo)
const esquinas = [
  { xPct: 0, yPct: 0 },
  { xPct: 1, yPct: 0 },
  { xPct: 0, yPct: 1 },
  { xPct: 1, yPct: 1 }
];

function crearNuevofifi() {
  // Clones
  const nuevofifi = fifiPlantilla.cloneNode(true);
  
  // evitar repetir id
  nuevofifi.removeAttribute('id');
  nuevofifi.style.display = 'block';
  nuevofifi.style.position = 'absolute';

  
  popup.appendChild(nuevofifi);

  
  const limiteX = popup.clientWidth - nuevofifi.clientWidth;
  const limiteY = popup.clientHeight - nuevofifi.clientHeight;

  const esquinaAleatoria = esquinas[Math.floor(Math.random() * esquinas.length)];
  const posX = esquinaAleatoria.xPct === 0 ? 0 : limiteX;
  const posY = esquinaAleatoria.yPct === 0 ? 0 : limiteY;

  // No olvidar que esto son las velocidades
  const velX = Math.random() < 0.5 ? 3 : -3;
  const velY = Math.random() < 0.5 ? 3 : -3;

  // Guardamos las propiedades individuales de este clon
  fifi.push({
    elemento: nuevofifi,
    x: posX,
    y: posY,
    vX: velX,
    vY: velY
  });
}

function animarMovi() {
  // Recorremos todos los clones activos para moverlos de forma independiente
  fifi.forEach(fifi => {
    // Calculamos límites por si acaso redimensionan la ventana
    const limiteX = popup.clientWidth - fifi.elemento.clientWidth;
    const limiteY = popup.clientHeight - fifi.elemento.clientHeight;

    fifi.x += fifi.vX;
    fifi.y += fifi.vY;

    // Control de rebotes corregido para que no se quede pegado
    if (fifi.x >= limiteX) {
      fifi.x = limiteX; 
      fifi.vX *= -1;
    } else if (fifi.x <= 0) {
      fifi.x = 0; 
      fifi.vX *= -1;
    }

    if (fifi.y >= limiteY) {
      fifi.y = limiteY; 
      fifi.vY *= -1;
    } else if (fifi.y <= 0) {
      fifi.y = 0; 
      fifi.vY *= -1;
    }

    // Aplicamos los cambios al estilo del clon actual
    fifi.elemento.style.left = fifi.x + 'px';
    fifi.elemento.style.top = fifi.y + 'px';
  });

  animacionId = requestAnimationFrame(animarMovi);
}

function fifiegg() {
  popup.style.display = 'block';
  
  // Ocultamos la imagen original de fondo para usar solo los clones
  fifiPlantilla.style.display = 'none';

  // Decidimos cuántos van a salir esta vez (un número aleatorio entre 1 y 4)
  const cantidadfifi = Math.floor(Math.random() * 4) + 1; 

  // Creamos la cantidad de imágenes asignada
  for (let i = 0; i < cantidadfifi; i++) {
    crearNuevofifi();
  }

  animarMovi();
}

function byfifi() {
  popup.style.display = 'none';
  cancelAnimationFrame(animacionId); 

  // Eliminamos del HTML todos los clones creados para limpiar el sitio
  fifi.forEach(fifi => fifi.elemento.remove());
  
  // Vaciamos el arreglo para la próxima vez
  fifi = [];
}