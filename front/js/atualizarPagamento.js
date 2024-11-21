
const resultado = document.getElementById("res");

document.getElementById('atualizarPagamentoForm').addEventListener("click", async (e) => {
  e.preventDefault();

  const codPagamento = document.getElementById("codPagamento").value;
  const pedidoId = document.getElementById("pedidoId").value;
  const dataVencimento = document.getElementById("dataVencimento").value;
  const valorPagamento = document.getElementById("valorPagamento").value;
  

  
  const dados = {
    pedidoId,
    dataVencimento,
    valorPagamento
  };

  fetch(`http://localhost:3000/pagamentos/${codPagamento}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(dados)
  }).then(resp => resp.json())
  .then(dd=>{
    resultado.innerHTML= `
      <p style="color: green;">Pagamento atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codPagamento}</li>
        <li><strong>Pedido:</strong> ${dd.pedidoId}</li>
        <li><strong>Data de Vencimento:</strong> ${dd.dataVencimento}</li>
        <li><strong>Valor:</strong> ${dd.valorPagamento}</li>
      </ul>
    `;
  }).catch(err=>{
    resultado.innerHTML = err.message
  })
  
});
