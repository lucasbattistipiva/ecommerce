document.getElementById('cadastrarEstoque').addEventListener('click', async (event) => {
    event.preventDefault();

    const produtoId = document.getElementById('produtoId').value;
    const nomeProduto = document.getElementById('nomeProduto').value;
    const quantidadeEstoque = document.getElementById('quantidadeEstoque').value;
    const resposta = document.getElementById('resposta');

    const dados = {
        produtoId,
        nomeProduto,
        quantidadeEstoque
    }

   
        fetch('http://localhost:3000/estoques', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        }).then(resp =>resp.json())
        .then(dd =>{
            resposta.innerHTML = "Estoque cadastrado "
        }).catch(err=>{
            resposta.innerHTML = err.message
        })
   
});
