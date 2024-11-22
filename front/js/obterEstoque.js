document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscarestoqueForm");
    const estoqueInfo = document.getElementById("estoqueInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const estoqueId = document.getElementById("estoqueId").value;

        try {
            const response = await fetch(`http://localhost:3000/estoques/${estoqueId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    estoqueInfo.innerHTML = "<p style='color: red;'>estoque não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar estoque");
                }
                return;
            }

            const estoque = await response.json();

            // Renderiza as informações do cliente
            estoqueInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>ProdutoId</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${estoque.codEstoque}</td>
                            <td>${estoque.produtoId}</td>
                            <td>${estoque.nomeProduto}</td>
                            <td>${estoque.quantidadeEstoque}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            estoqueInfo.innerHTML = "<p style='color: red;'>Erro ao buscar estoque!</p>";
        }
    });
});
