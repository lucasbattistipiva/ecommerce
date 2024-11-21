
const resultado = document.getElementById("res");

document.getElementById('atualizarprodutoForm').addEventListener("click", async (e) => {
  e.preventDefault();

  const fabricanteId = document.getElementById("fabricanteId").value;
  const nomeProduto = document.getElementById("nomeProduto").value;
  const quantidadeProduto = document.getElementById("quantidadeProduto").value;
  const precoProduto = document.getElementById("precoProduto").value;
  const descricaoProduto = document.getElementById("descricaoProduto").value;

  const produtoId = document.getElementById("produtoId").value;
  const dados = {
    fabricanteId,
    nomeProduto,
    quantidadeProduto,
    precoProduto,
    descricaoProduto
    
  };

  fetch(`http://localhost:3000/produtos/${produtoId}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(dados)
  }).then(resp => resp.json())
  .then(dd=>{
    resultado.innerHTML= `
      <p style="color: green;">Produto atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codProduto}</li>
        <li><strong>Fabricante ID:</strong> ${dd.fabricanteId}</li>
        <li><strong>Nome:</strong> ${dd.nomeProduto}</li>
        <li><strong>Quantidade:</strong> ${dd.quantidadeProduto}</li>
        <li><strong>Preco:</strong> ${dd.precoProduto}</li>
        <li><strong>Descricao:</strong> ${dd.descricaoProduto}</li>
      </ul>
    `;
  }).catch(err=>{
    resultado.innerHTML = err.message
  })
  
});
