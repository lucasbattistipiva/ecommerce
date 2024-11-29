const resposta = document.getElementById('resposta');
document.getElementById('atualizarEstoque').addEventListener('click', async (e) => {
    e.preventDefault()
    const id = document.getElementById('id').value;
    const quantidadeEstoque = document.getElementById('quantidadeEstoque').value;
    const nomeProduto = document.getElementById('nomeProduto').value;
    

    const dados={
        quantidadeEstoque,
        nomeProduto
    }

    
         fetch(`http://localhost:3000/estoques/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        }).then(resp=>resp.json())
        .then(dd=>{
            resposta.innerHTML = `Estoque ID ${id} atualizado com sucesso!`;
        }).catch(err=>{
            resposta.innerHTML = err.message
        })

});
