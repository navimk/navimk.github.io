const popup = document.getElementById('ventana-emergente');
    const logo = document.getElementById('eros-dvd');

    let x = 0;
    let y = 0;
    //vx y vy son las velocidades, no te olvides tonoto
    let vX = 3; 
    let vY = 3;
    let animacionId;


    function animarMovi() {
      const limiteX = popup.clientWidth - logo.clientWidth;
      const limiteY = popup.clientHeight - logo.clientHeight;

      x += vX;
      y += vY;

      if (x >= limiteX || x <= 0) {
        vX *= -1;
      }

      if (y >= limiteY || y <= 0) {
        vY *= -1;
      }

      logo.style.left = x + 'px';
      logo.style.top = y + 'px';

      animacionId = requestAnimationFrame(animarMovi);
    }


    function erosegg() {
      popup.style.display = 'block';
      x = 0;
      y = 0;
      animarMovi();
    }

    function byeros() {
      popup.style.display = 'none';
      cancelAnimationFrame(animacionId); 
    }