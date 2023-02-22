//Imagens
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemEstrada;
let imagemAtor;

let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemCarro = loadImage ("image/carro-1.png");
  imagemCarro2 = loadImage ("image/carro-2.png");
  imagemCarro3 = loadImage ("image/carro-3.png");
  imagemEstrada = loadImage ("image/estrada.png");
  imagemAtor = loadImage ("image/ator-1.png");
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3]
  somTrilha = loadSound ("Sons/trilha.mp3");
  somPonto = loadSound ("Sons/pontos.wav");
  somColisao = loadSound ("Sons/colidiu.mp3");
}