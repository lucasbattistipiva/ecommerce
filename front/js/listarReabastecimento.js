
const tabelareabastecimentos = document.getElementById("tabela-reabastecimentos");

    
function carregarreabastecimentos() {
   
        fetch('http://localhost:3000/clientes')
        .then(resp => resp.json())
        .then(reabastecimentos=>{
            tabelareabastecimentos.innerHTML = "";

            reabastecimentos.forEach(reabastecimento => {
                const row = document.createElement("tr");
                console.log(reabastecimentos);

                row.innerHTML = `
                    <td>${reabastecimento.codReabastecimento}</td>
                    <td>${reabastecimento.estoqueId}</td>
                    <td>${reabastecimento.nomeProduto}</td>
                    <td>${reabastecimento.quantidadeEstoque}</td>
                    <td>${reabastecimento.dataReabastecimento}</td>
                    
                `;

                tabelareabastecimentos.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarreabastecimentos;

