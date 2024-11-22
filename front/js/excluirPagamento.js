const resultado = document.getElementById("res");

document.getElementById("excluirpagamentoForm").addEventListener('click', async (e) => {
    e.preventDefault();

    const pagamentoId = document.getElementById('pagamentoId').value;

   fetch(`http://localhost:3000/pagamentos/${pagamentoId}`,{
    method: "DELETE"
   }).then(resp=>resp.json())
   .then(dd=>{
    resultado.innerHTML = dd.message
   })
   .catch(err=>{
    resultado.innerHTML = err.message
   })
});
