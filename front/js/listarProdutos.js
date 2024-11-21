
const tabelaprodutos = document.getElementById("tabela-produtos");

    
function carregarprodutos() {
   
        fetch('http://localhost:3000/produtos')
        .then(resp => resp.json())
        .then(produtos=>{
            tabelaprodutos.innerHTML = "";

            produtos.forEach(produto => {
                const row = document.createElement("tr");
                console.log(produtos);

                row.innerHTML = `
                    <td>${produto.codProduto}</td>
                    <td>${produto.fabricanteId}</td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.quantidadeProduto}</td>
                    <td>${produto.precoProduto}</td>
                    <td>${produto.descricaoProduto}</td>
                    
                `;

                tabelaprodutos.appendChild(row);
            });
        }).catch(err=>{
            console.error(err);
        }) }


window.onload = carregarprodutos;

