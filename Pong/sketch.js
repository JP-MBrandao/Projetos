//Variáveis posição bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Variáveis Velocidade Bolinha
let velocidadeXBolinha = 6;
let velocidadeyBolinha = 6;

//Variáveis Minha Raquete
let xMinhaRaquete=5
let yMinhaRaquete=155
let altRaquete = 70
let compRaquete = 10

//Variáveis Raquete Oponente
let xOpRaquete = 585;
let yOpRaquete = 155;
let yVelRaquete;

//Placar
let meusPontos=0;
let opPontos=0;

let colisao = false

//Trilha
let trilha;
let raquetada;
let ponto;

//Chance de errar
let chanceErro = 0;

function desenhoBolinha(){
    circle (xBolinha,yBolinha,diametro);
}

function velocidadeBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificarColisao(){
  if (xBolinha + raio > width || xBolinha - raio < 0 ){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
}

function mostrarRaquete(x,y){
  rect (x, y, compRaquete, altRaquete)
}

function moverMinhaRaquete(){
  if (keyIsDown (UP_ARROW)){
    yMinhaRaquete -= 10;
    if(yMinhaRaquete < -altRaquete/2){
      yMinhaRaquete = -altRaquete/2
    }
  }
  if(keyIsDown (DOWN_ARROW)){
    yMinhaRaquete += 10;
    if(yMinhaRaquete + altRaquete > 400 + altRaquete/2){
      yMinhaRaquete = 400 - altRaquete/2
    }
    }
  }

function colisaoMinhaRaquete (){
  if (xBolinha - raio < xMinhaRaquete + compRaquete &&
     yBolinha + raio > yMinhaRaquete &&
     yBolinha - raio < yMinhaRaquete + altRaquete){
    velocidadeXBolinha *= -1
  }
}

function colisaoOpRaquete (){
  if (xBolinha + raio > xOpRaquete &&
     yBolinha + raio > yOpRaquete &&
     yBolinha - raio < yOpRaquete + altRaquete){
    velocidadeXBolinha *= -1
  }
}

function movRaqueteOp(){
  yVelRaquete = yBolinha - yOpRaquete - altRaquete/2 - 30;
  yOpRaquete += yVelRaquete + chanceErro
  calculaChanceErro()
}

function calculaChanceErro(){
  if(opPontos >= meusPontos){
    chanceErro += 1
    if (chanceErro >=39){
      chanceErro = 40
    }
  }else {
      chanceErro -=1
      if (chanceErro <=35){
        chanceErro =35
      }
    }
}


function mostrarPlacar(){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(255,25,0));
  rect(230,5,40,20);
  rect(330,5,40,20);
  fill (255);
  text (meusPontos,250, 20);
  text(opPontos,350,20);
}

function placar(){
  if(xBolinha < 10){
    opPontos += 1;
    ponto.play();
  }
  if (xBolinha > 590){
    meusPontos += 1;
    ponto.play();
  }
}

function mostrarColisao (x,y){
  colisao = collideRectCircle(x, y, compRaquete, altRaquete, xBolinha, yBolinha, raio);
  if(colisao){
    velocidadeXBolinha *= -1;
    raquetada.play();
  } 
}

function preload(){
  trilha = loadSound ("trilha.mp3");
  raquetada = loadSound ("raquetada.mp3");
  ponto = loadSound ("ponto.mp3")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function multiplayer(){
  if (keyIsDown (87)){
    yOpRaquete -= 10;
  }
  if(keyIsDown (83)){
    yOpRaquete += 10
  }
}

function draw() {
  background(0);
  desenhoBolinha();
  velocidadeBolinha();
  verificarColisao();  
  mostrarRaquete(xMinhaRaquete,yMinhaRaquete);
  moverMinhaRaquete();
  //colisaoMinhaRaquete();
  mostrarRaquete(xOpRaquete,yOpRaquete);
  //colisaoOpRaquete();
  movRaqueteOp();
  mostrarPlacar();
  placar();
  mostrarColisao(xMinhaRaquete,yMinhaRaquete);
  mostrarColisao(xOpRaquete,yOpRaquete);
  //multiplayer();
}