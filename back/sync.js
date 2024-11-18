const conn = require('./db/conn')
const { Cliente, Pedido, Entrega, Pagamento, 
    ItemPedido, Produto, Estoque, Reabastecimento } = require('./models/associacao')

async function syncDataBase() {
    try{
        
        await conn.sync({ force: true })
        console.log('Tabelas criadas e banco de dados sincronizado!')
    } catch (err) {
        console.error('Não foi possível sincronizar o Banco de dados', err)
    } finally {
        await conn.close()
        console.log('Fechando a conexão com o banco de dados!')
    }
}


syncDataBase()