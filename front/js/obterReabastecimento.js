document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscarreabastecimentoForm");
    const reabastecimentoInfo = document.getElementById("reabastecimentoInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const reabastecimentoId = document.getElementById("reabastecimentoId").value;

        try {
            const response = await fetch(`http://localhost:3000/reabastecimentos/${reabastecimentoId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    reabastecimentoInfo.innerHTML = "<p style='color: red;'>reabastecimento não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar reabastecimento");
                }
                return;
            }

            const reabastecimento = await response.json();

            // Renderiza as informações do cliente
            reabastecimentoInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>EstoqueId</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${reabastecimento.codReabastecimento}</td>
                            <td>${reabastecimento.estoqueId}</td>
                            <td>${reabastecimento.nomeProduto}</td>
                            <td>${reabastecimento.quantidadeEstoque}</td>
                            <td>${reabastecimento.dataReabastecimento}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            reabastecimentoInfo.innerHTML = "<p style='color: red;'>Erro ao buscar reabastecimento!</p>";
        }
    });
});
