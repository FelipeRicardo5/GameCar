//Codigos do carro.

let xCarros = [1920, 1920, 1920, 1920, 1920, 1920]
let yCarros = [110, 240, 360, 505, 630, 760];
let velocidadeCarros = [11.5, 6, 18, 9, 15, 7.5]

function mostraCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1 ){
        image(imagemCarros[i], xCarros[i], yCarros[i], 100, 70); //Para redimensionar o carro é criar mais alguns parâmetros, como em imagemAtor
    }
}
function movimentaCarro(){
    for (let i = 0; i < imagemCarros.length; i = i + 1 ){
        xCarros[i] = xCarros[i] - velocidadeCarros[i];
    }
}
function voltaPosicaoCarro(){
    if (xCarros[0] < -150){
        xCarros[0] = 1920
    }
    if (xCarros[1] < -150){
        xCarros[1] = 1920
    }
    if (xCarros[2] < -150){
        xCarros[2] = 1920
    }
    if (xCarros[3] < -150){
        xCarros[3] = 1920
    }
    if (xCarros[4] < -150){
        xCarros[4] = 1920
    }
    if (xCarros[5] < -150){
        xCarros[5] = 1920
    }
}
