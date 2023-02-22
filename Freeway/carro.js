//Lista de Carros

let xCarros = [600 , 600 , 600, 600, 600, 600 ]
let yCarros = [40 , 95 , 150, 210, 260, 310 ]
let compCarro = 50;
let altCarro = 40
let velCarros = [2.3 , 3.1 , 4.3 , 4.9, 2.6, 3.5 ]

let maisDificuldade = 0

function mostrarCarro(){
  for (let i = 0 ; i < imagemCarros.length ; i ++){
  image (imagemCarros[i] ,xCarros[i] ,yCarros[i] , compCarro,altCarro);
  }
}

function movCarro(){
  for (let i = 0 ; i < imagemCarros.length ; i ++){
  xCarros[i] -= velCarros [i];
  }
}

function voltarCarro(){
  for (let i = 0 ; i < imagemCarros.length ; i ++){
    if(atingiuATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function atingiuATela (xCarro){
  return xCarro < -50;
}

function calcDificuldade(){
  if (pontos - maisDificuldade > 4){
    maisDificuldade = pontos;
    for (let i = 0 ; i < imagemCarros.length ; i ++){  
    velCarros[i] *= 1.3;
    }
  }
}