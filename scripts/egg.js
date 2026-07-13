const popup = document.getElementById('ventana-emergente');
const erosPlantilla = document.getElementById('eros-dvd');

let eros = []; // Aquí guardaremos todos los eros activos
let animacionId;

// 4 Esquinas posibles en coordenadas binarias (0 = inicio, 1 = extremo)
const esquinas = [
  { xPct: 0, yPct: 0 },
  { xPct: 1, yPct: 0 },
  { xPct: 0, yPct: 1 },
  { xPct: 1, yPct: 1 }
];

function crearNuevoeros() {
  // Clones
  const nuevoeros = erosPlantilla.cloneNode(true);
  
  // evitar repetir id
  nuevoeros.removeAttribute('id');
  nuevoeros.style.display = 'block';
  nuevoeros.style.position = 'absolute';

  
  popup.appendChild(nuevoeros);

  
  const limiteX = popup.clientWidth - nuevoeros.clientWidth;
  const limiteY = popup.clientHeight - nuevoeros.clientHeight;

  const esquinaAleatoria = esquinas[Math.floor(Math.random() * esquinas.length)];
  const posX = esquinaAleatoria.xPct === 0 ? 0 : limiteX;
  const posY = esquinaAleatoria.yPct === 0 ? 0 : limiteY;

  // No olvidar que esto son las velocidades
  const velX = Math.random() < 0.5 ? 3 : -3;
  const velY = Math.random() < 0.5 ? 3 : -3;

  // Guardamos las propiedades individuales de este clon
  eros.push({
    elemento: nuevoeros,
    x: posX,
    y: posY,
    vX: velX,
    vY: velY
  });
}

function animarMovi() {
  // Recorremos todos los clones activos para moverlos de forma independiente
  eros.forEach(eros => {
    // Calculamos límites por si acaso redimensionan la ventana
    const limiteX = popup.clientWidth - eros.elemento.clientWidth;
    const limiteY = popup.clientHeight - eros.elemento.clientHeight;

    eros.x += eros.vX;
    eros.y += eros.vY;

    // Control de rebotes corregido para que no se quede pegado
    if (eros.x >= limiteX) {
      eros.x = limiteX; 
      eros.vX *= -1;
    } else if (eros.x <= 0) {
      eros.x = 0; 
      eros.vX *= -1;
    }

    if (eros.y >= limiteY) {
      eros.y = limiteY; 
      eros.vY *= -1;
    } else if (eros.y <= 0) {
      eros.y = 0; 
      eros.vY *= -1;
    }

    // Aplicamos los cambios al estilo del clon actual
    eros.elemento.style.left = eros.x + 'px';
    eros.elemento.style.top = eros.y + 'px';
  });

  animacionId = requestAnimationFrame(animarMovi);
}

function erosegg() {
  popup.style.display = 'block';
  
  // Ocultamos la imagen original de fondo para usar solo los clones
  erosPlantilla.style.display = 'none';

  // Decidimos cuántos van a salir esta vez (un número aleatorio entre 1 y 4)
  const cantidaderos = Math.floor(Math.random() * 4) + 1; 

  // Creamos la cantidad de imágenes asignada
  for (let i = 0; i < cantidaderos; i++) {
    crearNuevoeros();
  }

  animarMovi();
}

function byeros() {
  popup.style.display = 'none';
  cancelAnimationFrame(animacionId); 

  // Eliminamos del HTML todos los clones creados para limpiar el sitio
  eros.forEach(eros => eros.elemento.remove());
  
  // Vaciamos el arreglo para la próxima vez
  eros = [];
}