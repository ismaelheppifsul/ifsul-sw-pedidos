var pedido = require('../models/Pedido');

class PedidoDAO {
    constructor() {
        this.nextID = 6;
        this.pedidos = [
            {
                id: 1,
                titulo: 'O Cortiço',
                quantidade: '10',
                valor: '5',
                total: '50'
            },
            {
                id: 2,
                titulo: 'Era dos Extremos',
                quantidade: '5',
                valor: '7',
                total: '35'
            },
            {
                id: 3,
                titulo: 'Sejamos todos feministas',
                quantidade: '8',
                valor: '15',
                total: '120'
            },
            {
                id: 4,
                titulo: 'Quarto de Despejo. Diário de Uma Favelada',
                quantidade: '15',
                valor: '12',
                total: '180'
            },
            {
                id: 5,
                titulo: 'O mundo de Sofia',
                quantidade: '3',
                valor: '25',
                total: '75'
            }
        ];
    }
    getAll() {
        return this.pedidos;
    }
    get(id) {
        for (let i = 0; i < this.pedidos.length; i++) {
            if (this.pedidos[i].id == id) {
                return this.pedidos[i];
            }
        }

        return null;
    }
    add(pedido) {
        this.pedidos.push(pedido);
    }
    delete(id) {
        var pedido = this.get(id);
        var index = this.pedidos.indexOf(pedido);
        this.pedidos.splice(index, 1);
    }
    update(pedido) {
        var oldPedido = this.get(pedido.id);
        var index = this.pedidos.indexOf(oldPedido);
        this.pedidos.splice(index, 1, pedidos);
    }
    getNextID(){
        return this.nextID++;
    }
}

module.exports = PedidoDAO;