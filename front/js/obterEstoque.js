document.getElementById('getButton').addEventListener('click', async () => {
    const id = document.getElementById('id').value;
    const resposta = document.getElementById('resposta');

    fetch(`http://localhost:3000/estoques/${id}`)
    .then(resp=>resp.json())
    .then(estoque=>{
        resposta.textContent = `ID: ${estoque.codEstoque}, Produto: ${estoque.nomeProduto}, Quantidade: ${estoque.quantidadeEstoque}`
    }).catch(err=>{
        console.error("Erro ao obterEstoque",err)
        alert("Erro ao obterEstoque")
    })

});
