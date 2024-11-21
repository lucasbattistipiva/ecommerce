
const resultado = document.getElementById("res");

document.getElementById('atualizarFabricanteForm').addEventListener("click", async (e) => {
  e.preventDefault();

  const nomeFabricante = document.getElementById('nomeFabricante').value
  const marcaFabricante = document.getElementById('marcaFabricante').value
  const cnpjFabricante = document.getElementById('cnpjFabricante').value
  const telefoneFabricante = document.getElementById('telefoneFabricante').value
  const emailFabricante = document.getElementById('emailFabricante').value
  const logradouro = document.getElementById('logradouro').value
  const numero = document.getElementById('numero').value
  const complemento = document.getElementById('complemento').value
  const bairro = document.getElementById('bairro').value
  const localidade = document.getElementById('localidade').value
  const uf = document.getElementById('uf').value
  const cep = document.getElementById('cep').value

  const fabricanteId = document.getElementById('fabricanteId').value
  const valores ={
      nomeFabricante,
      marcaFabricante,
      cnpjFabricante,
      telefoneFabricante,
      emailFabricante,
      logradouro,
      numero,
      complemento,
      bairro,
      localidade,
      uf,
      cep
  }


  fetch(`http://localhost:3000/fabricantes/${fabricanteId}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(valores)
  }).then(resp => resp.json())
  .then(dd=>{
    resultado.innerHTML= `
      <p style="color: green;">Fabricante atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codFabricante}</li>
        <li><strong>Nome:</strong> ${dd.nomeFabricante}</li>
        <li><strong>Marca:</strong> ${dd.marcaFabricante}</li>
        <li><strong>CNPJ:</strong> ${dd.cnpjFabricante}</li>
        <li><strong>Telefone:</strong> ${dd.telefoneFabricante}</li>
        <li><strong>Email:</strong> ${dd.emailFabricante}</li>
        <li><strong>Logradouro:</strong> ${dd.logradouro}</li>
        <li><strong>Número:</strong> ${dd.numero}</li>
        <li><strong>Complemento:</strong> ${dd.complemento}</li>
        <li><strong>Bairro:</strong> ${dd.bairro}</li>
        <li><strong>Localidade:</strong> ${dd.localidade}</li>
        <li><strong>UF:</strong> ${dd.uf}</li>
        <li><strong>CEP:</strong> ${dd.cep}</li>
      </ul>
    `;
  }).catch(err=>{
    resultado.innerHTML = err.message
  })
  
});
