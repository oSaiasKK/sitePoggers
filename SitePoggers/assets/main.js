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
      imagem.style.clipPath = 'inset(0 0 0 0)';
      imagem.style.opacity = 1;
}

async function textoNormal() {
  const paragrafos = document.querySelectorAll('.velNormal');
  const imagens = document.querySelectorAll('img');

  for (let i = 0; i < paragrafos.length; i++) {
    await digitarTexto(paragrafos[i], 100);
    setTimeout(() => {
      exibirImagem(imagens[i-1]);
    }, 200)
  }
  
}

async function textoDevagar() {
  const lento = document.querySelectorAll('.velDevagar');

  for (let i = 0; i < lento.length; i++) {
    await digitarTexto(lento[i], 200);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  await textoNormal();
  setTimeout (() => textoDevagar(), 2500);
});


/*
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
  setTimeout(() => {
    imagem.style.clipPath = 'inset(0 0 0 0)';
    imagem.style.opacity = 1;
  }, 200)
}

async function textoNormal() {
  const textosVelN = document.querySelectorAll('.velNormal');

  await digitarTexto(textosVelN, 100);
}

async function textoDevagar() {
  const textosVelD = document.querySelectorAll('.velDevagar');

  await digitarTexto(textosVelD, 200);
}

async function executarFunções() {
  const textos = document.querySelectorAll('.texto');

  for (let i = 0; i < textos.length; i++) {

    if (textos[i].classList.contains('velNormal')) {
      await textoNormal();
    } else if (textos[i].classList.contains('velDevagar')) {
      await textoDevagar();
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  executarFunções();
});
*/