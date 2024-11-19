function digitarTexto(elemento, intervalo) {
  const texto = elemento.textContent;
  elemento.textContent = '';
  let index = 0;
  elemento.style.visibility = 'visible';

  return new Promise((resolve) => {
    const timer = setInterval(() => {
      elemento.textContent += texto[index];
      index++;

      if (index == texto.length) {
        clearInterval(timer);
        resolve();
      }

    }, intervalo);
  });
}

function exibirImagem(imagem) {
    imagem.style.opacity = 1;
}

async function algo() {
  const Textos = document.querySelectorAll('.velNormal');
  const imagens = document.querySelectorAll('img');

  for (let i = 0; i < Textos.length; i++) {

    setTimeout(() => {
      for (let j = 0; j < 5; j++) {
        exibirImagem(imagens[j-1]);
      }
    }, 400);

    await digitarTexto(Textos[i], 100);
    
  }
  
}

document.addEventListener('DOMContentLoaded', async () => {
  await algo();
});