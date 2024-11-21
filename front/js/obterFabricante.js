document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("buscarFabricanteForm");
    const fabricanteInfo = document.getElementById("fabricanteInfo");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const fabricanteId = document.getElementById("fabricanteId").value;

        try {
            const response = await fetch(`http://localhost:3000/fabricantes/${fabricanteId}`);
            if (!response.ok) {
                if (response.status === 404) {
                    fabricanteInfo.innerHTML = "<p style='color: red;'>fabricante não encontrado!</p>";
                } else {
                    throw new Error("Erro ao buscar fabricante");
                }
                return;
            }

            const fabricante = await response.json();

            // Renderiza as informações do cliente
            fabricanteInfo.innerHTML = `
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                        <th>Nome</th>
                        <th>Marca</th>
                        <th>CNPJ</th>
                        <th>Telefone</th>
                        <th>EMAIL</th>
                        <th>Bairro</th>
                        <th>Logradouro</th>
                        <th>Localidade</th>
                        <th>Complemento</th>
                        <th>UF</th>
                        <th>CEP</th>
                        <th>Número</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${fabricante.codFabricante}</td>
                            <td>${fabricante.nomeFabricante}</td>
                            <td>${fabricante.marcaFabricante}</td>
                            <td>${fabricante.cnpjFabricante}</td>
                            <td>${fabricante.telefoneFabricante}</td>
                            <td>${fabricante.emailFabricante}</td>
                            <td>${fabricante.bairro}</td>
                            <td>${fabricante.logradouro}</td>
                            <td>${fabricante.localidade}</td>
                            <td>${fabricante.complemento}</td>
                            <td>${fabricante.uf}</td>
                            <td>${fabricante.cep}</td>
                            <td>${fabricante.numero}</td>
                        </tr>
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error(error);
            fabricanteInfo.innerHTML = "<p style='color: red;'>Erro ao buscar fabricante!</p>";
        }
    });
});
