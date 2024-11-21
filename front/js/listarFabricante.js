const tabelaFabricantes = document.getElementById("tabela-fabricantes");

function carregarFabricantes() {
  fetch("http://localhost:3000/fabricantes")
    .then((resp) => resp.json())
    .then((fabricantes) => {
      tabelaFabricantes.innerHTML = "";

      fabricantes.forEach((fabricante) => {
        const row = document.createElement("tr");
        console.log(fabricantes);

        row.innerHTML = `
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
                `;

        tabelaFabricantes.appendChild(row);
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

window.onload = carregarFabricantes;
