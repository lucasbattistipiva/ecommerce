const res = document.getElementById('res')
document.getElementById('cadastrarProduto').addEventListener('click', async (e) => {
    e.preventDefault();

   const fabricanteId = document.getElementById('fabricanteId').value
    const nomeProduto = document.getElementById('nomeProduto').value
    const quantidadeProduto = document.getElementById('quantidadeProduto').value
    const precoProduto = document.getElementById('precoProduto').value
    const descricaoProduto = document.getElementById('descricaoProduto').value

    const valores={
        fabricanteId,
            nomeProduto,
            quantidadeProduto,
            precoProduto,
            descricaoProduto
    }

    fetch('http://localhost:3000/produtos',{
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
