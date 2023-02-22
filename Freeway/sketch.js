function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarAtor ();
  mostrarCarro ();
  movAtor();
  movCarro();
  voltarCarro();
  verificaColisao();
  marcarPontos();
  placar ();
  atorNaTela();
  calcDificuldade();
}