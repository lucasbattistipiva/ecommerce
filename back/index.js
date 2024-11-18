const express = require('express');
const app = express();
const cors = require('cors');

const clienteRoutes = require('./routes/ClienteRotas');
const pedidoRoutes = require('./routes/PedidoRotas');
const entregaRoutes = require('./routes/EntregaRotas');
const estoqueRoutes = require('./routes/EstoqueRotas');
const fabricanteRoutes = require('./routes/FabricanteRotas');
const itemPedidoRoutes = require('./routes/itemPedidoRotas');
const pagamentoRoutes = require('./routes/PagamentoRotas');
const reabastecimentoRoutes = require('./routes/ReabastecimentoRotas');
const produtoRoutes = require('./routes/ProdutoRotas');

const PORT = 3000
const host = 'localhost'



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/entregas', entregaRoutes);
app.use('/estoques', estoqueRoutes);
app.use('/fabricantes', fabricanteRoutes);
app.use('/itens-pedido', itemPedidoRoutes);
app.use('/pagamentos', pagamentoRoutes);
app.use('/reabastecimentos', reabastecimentoRoutes);
app.use('/produtos', produtoRoutes);



app.listen(PORT,host, () => {
    console.log(`Servidor rodando em ${host}:${PORT}`);
});

  