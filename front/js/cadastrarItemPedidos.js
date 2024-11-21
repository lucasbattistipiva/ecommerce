const res = document.getElementById('res')
document.getElementById('cadastrarItemPedido').addEventListener('click', async (e) => {
    e.preventDefault();

   const pedidoId = document.getElementById('pedidoId').value
    const produtoId = document.getElementById('produtoId').value
    const quantidadeProduto = document.getElementById('quantidadeProduto').value
    const precoProduto = document.getElementById('precoProduto').value

    const valores={
        pedidoId,
        produtoId,
        quantidadeProduto,
        precoProduto
    }

    fetch('http://localhost:3000/itens-pedido/',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valores)
    }).then(resp => resp.json())
    .then(dd=>{
        res.innerHTML = dd.message
    }).catch(err=>{
        res.innerHTML = err.message
    })
});
