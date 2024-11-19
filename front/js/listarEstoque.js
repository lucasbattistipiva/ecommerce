window.addEventListener('DOMContentLoaded', async () => {
    const estoquesElement = document.getElementById('estoques');

    
        fetch('http://localhost:3000/estoques')
        .then(resp=>resp.json())
        .then(estoques=>{
            estoquesElement.innerHTML = estoques.map(estoque => 
                `<li>ID: ${estoque.codEstoque}, Produto: ${estoque.nomeProduto}, Quantidade: ${estoque.quantidadeEstoque}</li>`
            ).join('');
        }).catch(err=>{
            console.error("Erro ao listar estoque",err)
            alert("Erro ao listar estoque")
        })
            
        
});
