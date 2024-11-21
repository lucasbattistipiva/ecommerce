const res = document.getElementById('res')
document.getElementById('cadastrarReabastecimento').addEventListener('click', async (e) => {
    e.preventDefault();

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

    fetch('http://localhost:3000/reabastecimento/',{
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
