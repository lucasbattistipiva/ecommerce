const res = document.getElementById('res')
document.getElementById('cadastrarCliente').addEventListener('click', async (e) => {
    e.preventDefault();

   const pedidoId = document.getElementById('pedidoId').value
    const dataVencimento = document.getElementById('dataVencimento').value
    const valorPagamento = document.getElementById('valorPagamento').value

    const valores={
        pedidoId,
        dataVencimento,
        valorPagamento
        
    }

    fetch('http://localhost:3000/pagamentos/',{
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
