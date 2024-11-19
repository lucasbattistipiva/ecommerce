
const resultado = document.getElementById("res");

document.getElementById('atualizarClienteForm').addEventListener("click", async (e) => {
  e.preventDefault();

  const nomeCliente = document.getElementById("nomeCliente").value;
  const sobrenomeCliente = document.getElementById("sobrenomeCliente").value;
  const emailCliente = document.getElementById("emailCliente").value;
  const telefoneCliente = document.getElementById("telefoneCliente").value;
  const statusCliente = document.getElementById("statusCliente").value;
  const logradouro = document.getElementById("logradouro").value;
  const numero = document.getElementById("numero").value;
  const complemento = document.getElementById("complemento").value;
  const bairro = document.getElementById("bairro").value;
  const localidade = document.getElementById("localidade").value;
  const uf = document.getElementById("uf").value;
  const cep = document.getElementById("cep").value;
  const cpfCliente = document.getElementById("cpfCliente").value;

  const clienteId = document.getElementById("clienteId").value;
  const dados = {
    nomeCliente,
    sobrenomeCliente,
    emailCliente,
    telefoneCliente,
    statusCliente,
    logradouro,
    numero,
    complemento,
    bairro,
    localidade,
    uf,
    cep,
    cpfCliente
  };

  fetch(`http://localhost:3000/clientes/${clienteId}`,{
    method: "PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(dados)
  }).then(resp => resp.json())
  .then(dd=>{
    resultado.innerHTML= `
      <p style="color: green;">Cliente atualizado com sucesso!</p>
      <h3>Detalhes Atualizados:</h3>
      <ul>
        <li><strong>ID:</strong> ${dd.codCliente}</li>
        <li><strong>Nome:</strong> ${dd.nomeCliente}</li>
        <li><strong>Sobrenome:</strong> ${dd.sobrenomeCliente}</li>
        <li><strong>Email:</strong> ${dd.emailCliente}</li>
        <li><strong>Telefone:</strong> ${dd.telefoneCliente}</li>
        <li><strong>Status:</strong> ${dd.statusCliente}</li>
        <li><strong>Logradouro:</strong> ${dd.logradouro}</li>
        <li><strong>Número:</strong> ${dd.numero}</li>
        <li><strong>Complemento:</strong> ${dd.complemento}</li>
        <li><strong>Bairro:</strong> ${dd.bairro}</li>
        <li><strong>Localidade:</strong> ${dd.localidade}</li>
        <li><strong>UF:</strong> ${dd.uf}</li>
        <li><strong>CEP:</strong> ${dd.cep}</li>
        <li><strong>CPF:</strong> ${dd.cpfCliente}</li>
      </ul>
    `;
  }).catch(err=>{
    resultado.innerHTML = err.message
  })
  
});
