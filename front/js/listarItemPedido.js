
const tabelaitempedido = document.getElementById("tabela-item-pedido");

    
function carregaritempedido() {
   
        fetch('http://localhost:3000/itens-pedido')
        .then(resp => resp.json())
        .then(itens=>{
            tabelaitempedido.innerHTML = "";

            itens.forEach(item => {
                const row = document.createElement("tr");
                console.log(itens);

                row.innerHTML = `
                    <td>${item.codItemPedido}</td>
                    <td>${item.pedidoId}</td>
                    <td>${item.produtoId}</td>
                    <td>${item.quantidadeProduto}</td>
                    <td>${item.precoProduto}</td>
                    
                    
                `;

                tabelaitempedido.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregaritempedido;

