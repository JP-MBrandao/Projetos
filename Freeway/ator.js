//Ator
let yAtor = 370;
let xAtor = 80;
let velAtor = 4;

let colidiu = false;

let pontos = 0;

function mostrarAtor (){
  image(imagemAtor,xAtor,yAtor,30,30);
}

function movAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= velAtor;
    }
      if(keyIsDown(DOWN_ARROW)){
      yAtor += velAtor;
    }
      if(keyIsDown(LEFT_ARROW)){
      xAtor -= velAtor;
    }
      if(keyIsDown(RIGHT_ARROW)){
      xAtor += velAtor;
    }
}

function verificaColisao (){
  for( let i = 0; i < imagemCarros.length; i++){
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    colidiu = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 30);
    if(colidiu){
      voltarAtorInicial();
      pontos = 0;
      velCarros = [2.3 , 3.1 , 4.3 , 4.9, 2.6, 3.5 ];
      somColisao.play();
    }
  }
}

function voltarAtorInicial(){
  yAtor = 370;
}

function marcarPontos(){
  if (yAtor < 5){
    voltarAtorInicial();
    pontos ++;
    somPonto.play();
  }
}

function placar (){
  textAlign (CENTER);
  textSize (25);
  fill (color(255,240,50));
  text (pontos,100,25)
}

//Limitador
function atorNaTela(){
  if(xAtor<0){
    xAtor = 0;
  }
  if(yAtor>370){
    yAtor = 370;
  }
    if(xAtor>470){
    xAtor = 470;
  }
}