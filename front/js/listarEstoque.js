
const tabelaestoques = document.getElementById("tabela-estoques");

    
function carregarestoques() {
   
        fetch('http://localhost:3000/estoques')
        .then(resp => resp.json())
        .then(estoques=>{
            tabelaestoques.innerHTML = "";

            estoques.forEach(estoque => {
                const row = document.createElement("tr");
                console.log(estoques);

                row.innerHTML = `
                    <td>${estoque.codEstoque}</td>
                    <td>${estoque.produtoId}</td>
                    <td>${estoque.nomeProduto}</td>
                    <td>${estoque.quantidadeEstoque}</td>   
                `;

                tabelaestoques.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarestoques;

