window.onload = function() {
    let corInicial = document.getElementById('black').className += ' selected';
    let cores = document.querySelector('#color-palette');
    cores.addEventListener('click', trocarSelected);    
  function trocarSelected(event) {
    if (event.target.className === 'color') {      
      let atual = document.querySelector('.selected').classList.remove('selected');   
      event.target.className += ' selected';
    }
  }




}