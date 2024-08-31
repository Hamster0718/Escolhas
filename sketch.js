let musica;

function preload(){
  musica = loadSound('fundo.mp3');
}

function setup() {
  musica.play();
  musica.loop();
}
const avança = document.querySelectorAll(".proxima");
avança.forEach(button => {
button.addEventListener('click', function(){
const atual = document.querySelector('.ativo');
const proximaPasso = 'passo-' + this.getAttribute('data-proximo');
atual.classList.remove('ativo');
document.getElementById(proximaPasso).classList.add('ativo');
})
})
