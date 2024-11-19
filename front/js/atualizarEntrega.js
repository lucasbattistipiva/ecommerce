const resposta = document.getElementById('resposta');
document.getElementById('updateForm').addEventListener('click', async (e) => {
    e.preventDefault();

    const id = document.getElementById('id').value;
    const nomeProduto = document.getElementById('nomeProduto').value;
    const quantidadeProduto = document.getElementById('quantidadeProduto').value;
    const dataEntrega = document.getElementById('dataEntrega').value;

    

    const dados = {
        nomeProduto,
        quantidadeProduto,
        dataEntrega
    }

 
        fetch(`http://localhost:3000/entregas/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        }).then(resp => resp.json())
        .then(dd=>{
            resposta.innerHTML = `
      <p style="color: green;">Entrega atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codEntrega}</li>
        <li><strong>PedidoID:</strong> ${dd.pedidoId}</li>
        <li><strong>Nome:</strong> ${dd.nomeProduto}</li>
        <li><strong>Quantidade:</strong> ${dd.quantidadeProduto}</li>
        <li><strong>Data de Entrega:</strong> ${dd.dataEntrega}</li>
      </ul>
    `;
        })

       
});
