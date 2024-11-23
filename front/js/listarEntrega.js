
const tabelaentregas = document.getElementById("tabela-entregas");

    
function carregarentregas() {
   
        fetch('http://localhost:3000/entregas')
        .then(resp => resp.json())
        .then(entregas=>{
            tabelaentregas.innerHTML = "";

            entregas.forEach(entrega => {
                const row = document.createElement("tr");
                console.log(entregas);

                row.innerHTML = `
                    <td>${entrega.codEntrega}</td>
                    <td>${entrega.pedidoId}</td>
                    <td>${entrega.nomeProduto}</td>
                    <td>${entrega.quantidadeProduto}</td>
                    <td>${entrega.dataEntrega}</td>
                    
                `;

                tabelaentregas.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarentregas;

