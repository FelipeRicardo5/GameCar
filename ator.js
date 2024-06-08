//Códigos do Ator.

//Movitação do ator

let xAtor = 450; 
let yAtor = 850;
let colisao = false
let meusPontos = 0;

function mostraAtor(){
    image(imagemAtor, xAtor, yAtor, 100, 90);
}

function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor = yAtor - 5;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){
        yAtor = yAtor + 5;
      }
    }
}

function verificaColisao (){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 100, 60, xAtor, yAtor, 50)
    if (colisao){
      voltaPosicaoAtor();
      somColisao.play();
      if (meusPontos < 0){
        meusPontos -= 1;
      }
    }
  }
}
function voltaPosicaoAtor(){
  yAtor = 850;
}
function incluiPontos(){
  textStyle(BOLD)
  textAlign(CENTER);
  textSize(60);
  fill(color(0))
  text(meusPontos, width / 5, 60);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaPosicaoAtor();
  }
}

function podeSeMover(){
  return yAtor < 850;
}