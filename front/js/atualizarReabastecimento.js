
const resultado = document.getElementById("res");

document.getElementById('atualizarClienteForm').addEventListener("click", async (e) => {
  e.preventDefault();
    const reabastecimentoId = document.getElementById('reabastecimentoId').value
  const estoqueId = document.getElementById('estoqueId').value
    const nomeProduto = document.getElementById('nomeProduto').value
    const quantidadeEstoque = document.getElementById('quantidadeEstoque').value
    const dataReabastecimento = document.getElementById('dataReabastecimento').value

    const valores={
        estoqueId,
        nomeProduto,
        quantidadeEstoque,
        dataReabastecimento
    }


  fetch(`http://localhost:3000/reabastecimentos/${reabastecimentoId}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(valores)
  }).then(resp => resp.json())
  .then(dd=>{
    resultado.innerHTML= `
      <p style="color: green;">Reabastecimento atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codReabastecimento}</li>
        <li><strong>EstoqueID:</strong> ${dd.estoqueId}</li>
        <li><strong>Nome:</strong> ${dd.nomeProduto}</li>
        <li><strong>Quantidade:</strong> ${dd.quantidadeEstoque}</li>
        <li><strong>Data:</strong> ${dd.dataReabastecimento}</li>
      </ul>
    `;
  }).catch(err=>{
    resultado.innerHTML = err.message
  })
  
});
