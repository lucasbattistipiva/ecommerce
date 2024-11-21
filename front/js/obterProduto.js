document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscarprodutoForm");
    const produtoInfo = document.getElementById("produtoInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const produtoId = document.getElementById("produtoId").value;

        try {
            const response = await fetch(`http://localhost:3000/produtos/${produtoId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    produtoInfo.innerHTML = "<p style='color: red;'>produto não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar produto");
                }
                return;
            }

            const produto = await response.json();

            
            produtoInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Fabricante ID</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Preco</th>
                            <th>Descricao</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${produto.codProduto}</td>
                            <td>${produto.fabricanteId}</td>
                            <td>${produto.nomeProduto}</td>
                            <td>${produto.quantidadeProduto}</td>
                            <td>${produto.precoProduto}</td>
                            <td>${produto.descricaoProduto}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            produtoInfo.innerHTML = "<p style='color: red;'>Erro ao buscar cliente!</p>";
        }
    });
});
