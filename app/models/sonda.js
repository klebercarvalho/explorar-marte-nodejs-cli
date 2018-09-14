module.exports = class Sonda {

    /**
     * Cria uma instancia de Sonda
     * @param {object} lancamento
     * @param {object} nome
     */
    constructor(lancamento, nome) {

        let DIRECAO = require('./direcao');

        this.lancamento = lancamento;
        this.nome = nome;
        this.planalto = undefined;
        this.posicao = undefined;
        this.direcao = undefined;
        let self = this;

        this.acoes = {
            R: girarDireita,
            M: moverFrente,
            L: girarEsquerda,
        };

        /**
         * Mover para frente
         */
        function moverFrente() {
            console.log('Girar para Frente');
            console.log('||');
            var novaPosicao = self.posicao.mover(self.direcao);
            if (self.planalto.posicaoValida(novaPosicao)) {
                self.posicao = novaPosicao;
            }
        }

        /**
         * Fazer a sonda virar 90 graus para a esquerda
         */
        function girarEsquerda() {
            console.log('Girar para Esquerda');
            console.log('<');
            self.direcao = DIRECAO[self.direcao.L];
        }

        /**
         * Fazer a sonda virar 90 graus para a direita
         */
        function girarDireita() {
            console.log('Girar para Direita');
            console.log('<');
            self.direcao = DIRECAO[self.direcao.R];
        }
    }

    /**
     * Recebe os comandos
     * (L)eft, (R)ight, (M)frente
     *
     * @param {objeto} comando
     */
    receberComando(comando) {
        console.log('receberComando = ' + comando);
        if (comando === 'R' || comando == 'L' || comando == 'M') {
            this.acoes[comando]();
        }
    }

    /**
     * Aterrisa a Sonda, baseado no planalto, posicao, e apontada
     * para um direcao especifica
     *
     * @param {object} planalto
     * @param {object} posicao
     * @param {object} direcao
     */
    aterrissar(planalto, posicao, direcao) {
        console.log('Aterrisando na direção ' + direcao.A);
        this.planalto = planalto;
        this.posicao = posicao;
        this.direcao = direcao;
    }

    /**
     * Mostra a posicao agora
     *
     * @returns posicao
     */
    posicaoAgora() {
        console.log('posicaoAgora ');
        return this.posicao;
    }

    /**
     * Mostra a direcao agora
     *
     * @returns
     */
    direcaoAgora() {
        console.log('direcaoAgora ' + this.direcao.A);
        return this.direcao;
    }
};