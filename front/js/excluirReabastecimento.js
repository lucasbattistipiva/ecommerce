const resultado = document.getElementById("res");

document.getElementById("excluirreabastecimentoForm").addEventListener('click', async (e) => {
    e.preventDefault();

    const reabastecimentoId = document.getElementById('reabastecimentoId').value;

   fetch(`http://localhost:3000/reabastecimentos/${reabastecimentoId}`,{
    method: "DELETE"
   }).then(resp=>resp.json())
   .then(dd=>{
    resultado.innerHTML = dd.message
   })
   .catch(err=>{
    resultado.innerHTML = err.message
   })
});
