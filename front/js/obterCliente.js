document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscarClienteForm");
    const clienteInfo = document.getElementById("clienteInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const clienteId = document.getElementById("clienteId").value;

        try {
            const response = await fetch(`http://localhost:3000/clientes/${clienteId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    clienteInfo.innerHTML = "<p style='color: red;'>Cliente não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar cliente");
                }
                return;
            }

            const cliente = await response.json();

            // Renderiza as informações do cliente
            clienteInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Status</th>
                            <th>Bairro</th>
                            <th>Logradouro</th>
                            <th>Localidade</th>
                            <th>Complemento</th>
                            <th>UF</th>
                            <th>CEP</th>
                            <th>Número</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${cliente.codCliente}</td>
                            <td>${cliente.nomeCliente}</td>
                            <td>${cliente.sobrenomeCliente}</td>
                            <td>${cliente.emailCliente}</td>
                            <td>${cliente.telefoneCliente}</td>
                            <td>${cliente.statusCliente}</td>
                            <td>${cliente.bairro}</td>
                            <td>${cliente.logradouro}</td>
                            <td>${cliente.localidade}</td>
                            <td>${cliente.complemento}</td>
                            <td>${cliente.uf}</td>
                            <td>${cliente.cep}</td>
                            <td>${cliente.numero}</td>
                            <td>${cliente.cpfCliente}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            clienteInfo.innerHTML = "<p style='color: red;'>Erro ao buscar cliente!</p>";
        }
    });
});
