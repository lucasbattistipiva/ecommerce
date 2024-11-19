const resposta = document.getElementById('resposta');
document.getElementById('excluirEstoque').addEventListener('click', async () => {
    const id = document.getElementById('id').value;
    

    
        fetch(`http://localhost:3000/estoques/${id}`, { 
            method: 'DELETE' })
            .then(resp=>resp.json())
            .then(dd=>{
                resposta.innerHTML = dd.message
            })
            .catch(err=>{
                resposta.innerHTML = err.message
            })

        
});
