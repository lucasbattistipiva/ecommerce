
const resultado = document.getElementById("res");

document.getElementById('atualizaritempedidoForm').addEventListener("click", async (e) => {
  e.preventDefault();

  const pedidoId = document.getElementById('pedidoId').value
  const produtoId = document.getElementById('produtoId').value
  const quantidadeProduto = document.getElementById('quantidadeProduto').value
  const precoProduto = document.getElementById('precoProduto').value

  const itempedidoId = document.getElementById('itempedidoId').value
  const valores={
      pedidoId,
      produtoId,
      quantidadeProduto,
      precoProduto
  }

  fetch(`http://localhost:3000/itens-pedido/${itempedidoId}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(valores)
  }).then(resp => resp.json())
  .then(dd=>{
    resultado.innerHTML= `
      <p style="color: green;">Item Pedido atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codItemPedido}</li>
        <li><strong>PedidoId:</strong> ${dd.pedidoId}</li>
        <li><strong>ProdutoId:</strong> ${dd.produtoId}</li>
        <li><strong>Quantidade:</strong> ${dd.quantidadeProduto}</li>
        <li><strong>Preco:</strong> ${dd.precoProduto}</li>
      </ul>
    `;
  }).catch(err=>{
    resultado.innerHTML = err.message
  })
  
});
