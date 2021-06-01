window.onload = function inicio() {
  document.getElementById('black').classList.add('selected');
  function criarCores() {
    document.getElementById('black').style.backgroundColor = 'black';
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('blue').style.backgroundColor = 'blue';
    document.getElementById('green').style.backgroundColor = 'green';
    const pixelB = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelB.length; index += 1) {
      pixelB[index].style.backgroundColor = 'white';
    }
  }
  criarCores();
};
function trocarSelected(clique) {
  if (clique.target.className === 'color') {
    document.querySelector('.selected').classList.remove('selected');
    clique.target.className += ' selected';
  }
}
document.querySelector('#color-palette').addEventListener('click', trocarSelected);
function mudarCor(clique) {
  const corSelected = document.querySelector('.selected').style.backgroundColor;
  if (clique.target.className === 'pixel') {
    clique.target.style.backgroundColor = corSelected;
  }
}
document.querySelector('#pixel-board').addEventListener('click', mudarCor);
function limpaBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
document.getElementById('clear-board').addEventListener('click', limpaBoard);
