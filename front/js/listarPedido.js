
const tabelapedidos = document.getElementById("tabela-pedidos");

    
function carregarpedidos() {
   
        fetch('http://localhost:3000/pedidos')
        .then(resp => resp.json())
        .then(pedidos=>{
            tabelapedidos.innerHTML = "";

            pedidos.forEach(pedido => {
                const row = document.createElement("tr");
                console.log(pedidos);

                row.innerHTML = `
                    <td>${pedido.codPedido}</td>
                    <td>${pedido.clienteId}</td>
                    <td>${pedido.dataPedido}</td>
                    <td>${pedido.valorPedido}</td>
                `;

                tabelapedidos.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarpedidos;

