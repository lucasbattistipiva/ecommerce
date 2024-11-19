document.addEventListener('DOMContentLoaded', async () => {
    const listaElement = document.getElementById('lista');

    fetch('http://localhost:3000/entregas')
    .then(resp=>resp.json())
    .then(entregas=>{
        listaElement.innerHTML = `
                <ul>
                    ${entregas.map(entrega => `
                        <li>ID: ${entrega.codEntrega} - Produto: ${entrega.nomeProduto} - Quantidade: ${entrega.quantidadeProduto} - Data: ${new Date(entrega.dataEntrega).toLocaleDateString()}</li>
                    `).join('')}
                </ul>
            `;
    }).catch(err=>{
        console.error("Erro ao listar Entrega",err)
        alert("Erro ao listar Entrega")
    })

    
});
