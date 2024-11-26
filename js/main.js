function playAudio(idAudio) {
  document.querySelector(idAudio).play();
}

const keys = document.querySelectorAll('.tecla');

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const instrument = key.classList[1]; // Ejemplo: tecla_pom
  const idAudio = `#sonido_${instrument}`; // Ejemplo: #sonido_tecla_pom

  key.addEventListener('click', () => {
    playAudio(idAudio);
  });

  key.addEventListener('keydown', (event) => {
    if (event.key === 'Space' || event.key === 'Enter') {
      key.classList.add('activa');
    }
  });

  key.addEventListener('keyup', () => {
    key.classList.remove('activa');
  });
}