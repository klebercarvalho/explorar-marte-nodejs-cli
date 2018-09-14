(function() {
    'use strict';
    /*
     * A posição e direção de uma sonda são representadas por uma combinação de coordenadas x-y representada por Posicao
     * e uma letra representando a direção cardinal para qual a sonda aponta, seguindo a rosa dos ventos em inglês.
     * DIRECAO.A = Direcao Agora
     * DIRECAO.NORTE = Norte
    */
    let DIRECAO = {
        // Nesta malha o ponto ao norte de (x,y) é sempre (x, y+1).
        NORTE: {A: 'NORTE', L: 'OESTE', R: 'LESTE', M: {x: 0, y: 1}},
        // Sul (x+1, y)
        LESTE: {A: 'LESTE', L: 'NORTE', R: 'SUL', M: {x: 1, y: 0}},
        // Sul (x, y-1)
        SUL: {A: 'SUL', L: 'LESTE', R: 'OESTE', M: {x: 0, y: -1}},
        // Sul (x-1, y)
        OESTE: {A: 'OESTE', L: 'SUL', R: 'NORTE', M: {x: -1, y: 0}}
    };

    module.exports = DIRECAO;
} )();