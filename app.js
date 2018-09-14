'use strict';

const Planalto = require('./app/models/planalto');
const Posicao = require('./app/models/posicao');
const Direcao = require('./app/models/direcao');
const Operador = require('./app/models/operador');


let planalto = new Planalto(10, 10);
let posicao = new Posicao(0,0);
let operador = new Operador();

// let sonda1 = operador.lancamento(planalto, posicao, Direcao.NORTE);
// // (L)eft, (R)ight, (M)frente
// operador.enviarComando(sonda1, ['M', 'M', 'M', 'L', 'R', 'L', 'L', 'M']);
// operador.informarPosicao(sonda1);


// let sonda2 = operador.lancamento(planalto, posicao, Direcao.NORTE);
// // (L)eft, (R)ight, (M)frente
// operador.enviarComando(sonda2, ['M', 'M', 'M', 'L', 'L', 'M', 'M', 'M', 'L']);
// operador.informarPosicao(sonda2);

let sonda3 = operador.lancamento(planalto, posicao, Direcao.NORTE);
// (L)eft, (R)ight, (M)frente
//operador.enviarComando(sonda3, ['M', 'M', 'R', 'R', 'R']);
operador.enviarComando(sonda3, ['M', 'M', 'R', 'M', 'M', 'M', 'M', 'M', 'M', 'L', 'L']);
operador.informarPosicao(sonda3);
//operador.enviarComando(sonda3, ['M', 'M', 'R', 'M', 'M', 'M', 'M', 'M', 'M', 'L', 'L']);

