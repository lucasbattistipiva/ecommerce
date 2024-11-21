
const tabelapagamentos = document.getElementById("tabela-pagamentos");

    
function carregarPagamentos() {
   
        fetch('http://localhost:3000/pagamentos')
        .then(resp => resp.json())
        .then(pagamentos=>{
            tabelapagamentos.innerHTML = "";

            pagamentos.forEach(pagamento => {
                const row = document.createElement("tr");
                console.log(pagamentos);

                row.innerHTML = `
                    <td>${pagamento.codPagamento}</td>
                    <td>${pagamento.pedidoId}</td>
                    <td>${pagamento.dataVencimento}</td>
                    <td>${pagamento.valorPagamento}</td>
                    
                    
                `;

                tabelapagamentos.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarPagamentos;

