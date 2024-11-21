const resultado = document.getElementById("res");

document.getElementById("excluirprodutoForm").addEventListener('click', async (e) => {
    e.preventDefault();

    const produtoId = document.getElementById('produtoId').value;

   fetch(`http://localhost:3000/produtos/${produtoId}`,{
    method: "DELETE"
   }).then(resp=>resp.json())
   .then(dd=>{
    resultado.innerHTML = dd.message
   })
   .catch(err=>{
    resultado.innerHTML = err.message
   })
});
