class Pedido {
    constructor(id, titulo, quantidade, valor, total) {
        this.id = id;
        this.titulo = titulo;
        this.quantidade = quantidade;
        this.valor = valor; 
        this.total = total;
    }
}

module.exports = Pedido;
