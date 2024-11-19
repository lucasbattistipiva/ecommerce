const resposta = document.getElementById('resposta');
document.getElementById('cadastrarEntrega').addEventListener('click', async (e) => {
    e.preventDefault();

    const pedidoId = document.getElementById('pedidoId').value;
    const nomeProduto = document.getElementById('nomeProduto').value;
    const quantidadeProduto = document.getElementById('quantidadeProduto').value;
    const dataEntrega = document.getElementById('dataEntrega').value;

    const dados = {
        pedidoId,
        nomeProduto,
        quantidadeProduto,
        dataEntrega
    }

    

    fetch('http://localhost:3000/entregas',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(dados)
    }).then(resp => resp.json())
    .then(dd=>{
        resposta.innerHTML = dd.message
    }).catch(err=>{
        resposta.innerHTML = err.message
    })
});
