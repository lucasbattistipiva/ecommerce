document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscarpagamentoForm");
    const pagamentoInfo = document.getElementById("pagamentoInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const pagamentoId = document.getElementById("pagamentoId").value;

        try {
            const response = await fetch(`http://localhost:3000/pagamentos/${pagamentoId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    pagamentoInfo.innerHTML = "<p style='color: red;'>pagamento não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar pagamento");
                }
                return;
            }

            const pagamento = await response.json();

            // Renderiza as informações do cliente
            pagamentoInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Pedido</th>
                            <th>data de vencimento</th>
                            <th>Valor</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${pagamento.codPagamento}</td>
                            <td>${pagamento.pedidoId}</td>
                            <td>${pagamento.dataVencimento}</td>
                            <td>${pagamento.valorPagamento}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            pagamentoInfo.innerHTML = "<p style='color: red;'>Erro ao buscar pagamento!</p>";
        }
    });
});
