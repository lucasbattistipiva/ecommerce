const res = document.getElementById('res')
document.getElementById('cadastrarPedido').addEventListener('click', async (e) => {
    e.preventDefault();

   const clienteId = document.getElementById('clienteId').value
    const dataPedido = document.getElementById('dataPedido').value
    const valorPedido = document.getElementById('valorPedido').value

    const valores={
        clienteId,
        dataPedido,
        valorPedido
        
    }

    fetch('http://localhost:3000/pedidos',{
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
