window.onload = function inicio() {
  document.getElementById('black').classList.add('selected');
  function criarCores() {
    document.getElementById('black').style.backgroundColor = 'black';
    document.getElementById('red').style.backgroundColor = 'red';
    document.getElementById('blue').style.backgroundColor = 'blue';
    document.getElementById('green').style.backgroundColor = 'green';
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
    let corSelected = document.querySelector('.selected').style.backgroundColor;
    if (clique.target.className === 'pixel') {
      clique.target.style.backgroundColor = corSelected;
    }
  }
  document.querySelector('#pixel-board').addEventListener('click', mudarCor);
