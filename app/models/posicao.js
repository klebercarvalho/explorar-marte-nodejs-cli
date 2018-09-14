module.exports = class Posicao {
    /**
     * Cria uma instancia de Posicao.
     * A posição e direção de uma sonda são representadas por uma combinação de coordenadas x-y e uma 
     * letra representando a direção cardinal para qual a sonda aponta, seguindo a rosa dos ventos em inglês.
     * A posição e direção de uma sonda são representadas por uma combinação de coordenadas x-y 
     * e uma letra representando a direção cardinal para qual a sonda aponta, seguindo a rosa dos ventos em inglês.

     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log('Posicao(' + x + ',' + y + ')');
    }
    /**
     *
     * Mover para uma deteminada direcao
     * @param {object} direcao
     * @returns
     */
    mover(direcao) {
        let x = this.x + direcao.M.x;
        let y = this.y + direcao.M.y;

        return new Posicao(x, y);
    }
};
