const resultado = document.getElementById("res");

document.getElementById("excluirfabricanteForm").addEventListener('click', async (e) => {
    e.preventDefault();

    const fabricanteId = document.getElementById('fabricanteId').value;

   fetch(`http://localhost:3000/fabricantes/${fabricanteId}`,{
    method: "DELETE"
   }).then(resp=>resp.json())
   .then(dd=>{
    resultado.innerHTML = dd.message
   })
   .catch(err=>{
    resultado.innerHTML = err.message
   })
});
