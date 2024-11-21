const resultado = document.getElementById("res");

document.getElementById("excluiritempedidoForm").addEventListener('click', async (e) => {
    e.preventDefault();

    const itempedidoId = document.getElementById('itempedidoId').value;

   fetch(`http://localhost:3000/clientes/${itempedidoId}`,{
    method: "DELETE"
   }).then(resp=>resp.json())
   .then(dd=>{
    resultado.innerHTML = dd.message
   })
   .catch(err=>{
    resultado.innerHTML = err.message
   })
});
