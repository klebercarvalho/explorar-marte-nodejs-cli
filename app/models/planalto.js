/*
 * Um conjunto de sondas foi enviado pela NASA à Marte e irá pousar num planalto.
 * Esse 'planalto', que curiosamente é retangular, deve ser explorado pelas sondas
 * para que suas câmeras embutidas consigam ter uma visão completa da área e enviar
 * as imagens de volta para a Terra.
 */
module.exports = class Planalto {

    /**
     * Cria uma instancia de Planalto
     * Planalto é uma plano cartesia com que tem uma numero
     * de posicoes limitas baseado na quatidade de x e y
     * 
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log('Iniciando Planalto(' + x + ',' + y + ')');
    }

    /**
     *  Verifica se a posicao está dentro de Planalto
     *
     * @param {object} Posicao
     * @returns boolean 
     * True caso posição.x seja menor ou igual que o this.x e posição.y < this.y. alse caso contrário.
     */
    posicaoValida(posicao) {
        var retorno = posicao.x <= this.x && posicao.y < this.y;
        console.log('posicaoConhecida ' + retorno);
        return retorno;
    }
};
