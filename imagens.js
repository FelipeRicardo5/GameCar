//Imagens do Jogo.

let imagemEstrada;
let imagemAtor;
let imagemCarroUm;
let imagemCarroDois;
let imagemCarroTres;
let imagemCarros;



let somTrilha;
let somColisao;
let somPonto;

function preload(){
    imagemEstrada = loadImage("imagens/estrada.png");
    imagemAtor = loadImage("imagens/ator-1.png");
    imagemCarroUm = loadImage("imagens/carro-1.png");
    imagemCarroDois = loadImage("imagens/carro-2.png");
    imagemCarroTres = loadImage("imagens/carro-3.png");
    imagemCarros = [imagemCarroUm, imagemCarroDois, imagemCarroTres, imagemCarroUm, imagemCarroDois, imagemCarroTres]

    somTrilha = loadSound("sons/Solto (Instrumental).mp3");
    somColisao = loadSound("sons/colidiu.mp3");
    somPonto = loadSound("sons/pontos.wav");
}