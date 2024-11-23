document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscaritempedidoForm");
    const itempedidoInfo = document.getElementById("itempedidoInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const itempedidoId = document.getElementById("itempedidoId").value;

        try {
            const response = await fetch(`http://localhost:3000/itens-pedido/${itempedidoId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    itempedidoInfo.innerHTML = "<p style='color: red;'>itempedido não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar itempedido");
                }
                return;
            }

            const itempedido = await response.json();

           
            itempedidoInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>PedidoId</th>
                            <th>ProdutoId</th>
                            <th>Quantidade</th>
                            <th>Preco</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${itempedido.codItemPedido}</td>
                            <td>${itempedido.pedidoId}</td>
                            <td>${itempedido.produtoId}</td>
                            <td>${itempedido.quantidadeProduto}</td>
                            <td>${itempedido.precoProduto}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            itempedidoInfo.innerHTML = "<p style='color: red;'>Erro ao buscar itempedido!</p>";
        }
    });
});
