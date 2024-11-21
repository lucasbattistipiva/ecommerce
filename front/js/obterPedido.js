document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscarpedidoForm");
    const pedidoInfo = document.getElementById("pedidoInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const pedidoId = document.getElementById("pedidoId").value;

        try {
            const response = await fetch(`http://localhost:3000/pedidos/${pedidoId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    pedidoInfo.innerHTML = "<p style='color: red;'>pedido não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar pedido");
                }
                return;
            }

            const pedido = await response.json();

            
            pedidoInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Cliente Id</th>
                            <th>Data</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${pedido.codpedido}</td>
                            <td>${pedido.clienteId}</td>
                            <td>${pedido.dataPedido}</td>
                            <td>${pedido.valorPedido}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            pedidoInfo.innerHTML = "<p style='color: red;'>Erro ao buscar pedido!</p>";
        }
    });
});
