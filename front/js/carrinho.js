document.addEventListener('DOMContentLoaded', () => {
    const comprasDiv = document.getElementById('compras');
    const finalizarButton = document.getElementById('finalizarCompra');

    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        comprasDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
        finalizarButton.disabled = true;
        return;
    }

    let total = 0;

    carrinho.forEach(item => {
        comprasDiv.innerHTML += `
            <p>Produto: ${item.nome} - Preço: R$${item.preco.toFixed(2)} - Quantidade: ${item.quantidade}</p>
        `;
        total += item.preco * item.quantidade;
    });

    comprasDiv.innerHTML += `<hr><p>Total: R$${total.toFixed(2)}</p>`;

    finalizarButton.addEventListener('click', async () => {
        try {
            const pedido = {
                clienteId: 1, // Id do cliente (pode vir de outro local, como sessão)
                dataPedido: new Date().toISOString(),
                valorPedido: total,
                itens: carrinho
            };

            const response = await fetch('http://localhost:3000/pedidos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pedido)
            });

            const result = await response.json();

            if (response.status === 400) {
                alert(`Erro: ${result.message}`);
                return;
            }

            if (response.status === 201) {
                localStorage.removeItem('carrinho');
                alert('Pedido criado e estoque atualizado com sucesso!');
                location.reload();
            }
        } catch (error) {
            alert('Erro ao finalizar o pedido. Tente novamente.');
            console.error(error);
        }
    });
});
