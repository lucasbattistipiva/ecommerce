
const resultado = document.getElementById("res");

document.getElementById('atualizarPedidoForm').addEventListener("click", async (e) => {
  e.preventDefault();

  const codPedido = document.getElementById("codPedido").value;
  const clienteId = document.getElementById("clienteId").value;
  const dataPedido = document.getElementById("dataPedido").value;
  const valorPedido = document.getElementById("valorPedido").value;
  

  const dados = {
    clienteId,
    dataPedido,
    valorPedido
  };

  fetch(`http://localhost:3000/pedidos/${codPedido}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(dados)
  }).then(resp => resp.json())
  .then(dd=>{
    resultado.innerHTML= `
      <p style="color: green;">Pedido atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codPedido}</li>
        <li><strong>Cliente ID:</strong> ${dd.clienteId}</li>
        <li><strong>Data:</strong> ${dd.dataPedido}</li>
        <li><strong>Valor:</strong> ${dd.valorPedido}</li>
        
      </ul>
    `;
  }).catch(err=>{
    resultado.innerHTML = err.message
  })
  
});
