const resultado = document.getElementById("res");

document.getElementById("excluirClienteForm").addEventListener('click', async (e) => {
    e.preventDefault();

    const clienteId = document.getElementById('clienteId').value;

   fetch(`http://localhost:3000/clientes/${clienteId}`,{
    method: "DELETE"
   }).then(resp=>resp.json())
   .then(dd=>{
    resultado.innerHTML = dd.message
   })
   .catch(err=>{
    resultado.innerHTML = err.message
   })
});
