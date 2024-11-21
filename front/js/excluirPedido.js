const resultado = document.getElementById("res");

document.getElementById("excluirPedidoForm").addEventListener('click', async (e) => {
    e.preventDefault();

    const pedidoId = document.getElementById('pedidoId').value;

   fetch(`http://localhost:3000/pedidos/${pedidoId}`,{
    method: "DELETE"
   }).then(resp=>resp.json())
   .then(dd=>{
    resultado.innerHTML = dd.message
   })
   .catch(err=>{
    resultado.innerHTML = err.message
   })
});
