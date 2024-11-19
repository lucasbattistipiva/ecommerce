const resposta = document.getElementById('resposta');
document.getElementById('deleteForm').addEventListener('click', async (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value;
    

    
        fetch(`http://localhost:3000/entregas/${id}`, {
            method: 'DELETE'
        }).then(resp=>resp.json())
        .then(dd=>{
            resposta.innerHTML = dd.message
        }).catch(err=>{
            resposta.innerHTML = err.message
        })
});
