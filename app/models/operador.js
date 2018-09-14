module.exports = class Operador {

    /**
     * Cria uma instacia da Nasa.
     */
    constructor() {
        this.sondas = [
            'Sonda-001',
            'Sonda-002',
            'Sonda-003',
            'Sonda-004',
            'Sonda-004',
            'Sonda-005',
            'Sonda-006',
            'Sonda-007',
            'Sonda-008',
            'Sonda-009',
            'Sonda-010'
        ];
        this.numeroLancamento = 0;
    }

    /**
     * Lancamento de Sonda baseado em planato, posicao e direcao
     *
     * @param {Object} planalto
     * @param {Object} posicao
     * @param {Object} direcao
     * @returns sonda
     */
    lancamento(planalto, posicao, direcao) {
        console.log('Lançando a sonda');
        let Sonda = require('./sonda');
        let nome = this.sondas[this.numeroLancamento];
        this.numeroLancamento++;
        let sonda = new Sonda(this.numeroLancamento, nome);
        sonda.aterrissar(planalto, posicao, direcao);
        return sonda;
    }
    /**
     * Enviar o commando recebido para a Sonda
     *
     * @param {Object} sonda
     * @param {Object} comandos são um cojuntos de direções
     */
    enviarComando(sonda, comandos) {
        comandos.forEach(function(comando) {
            sonda.receberComando(comando);
        });
    }
    /**
     * Informar Posicao
     * 
     * @param {*} sonda
     */
    informarPosicao(sonda) {
        let posicao = sonda.posicaoAgora();
        let direcao = sonda.direcaoAgora();
        console.log(
            'Sonda:',
            sonda.nome,
            'X:',
            posicao.x,
            'Y:',
            posicao.y,
            'DIR:',
            direcao.A
        );
    }
};
