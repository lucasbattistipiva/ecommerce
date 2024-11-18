const res = document.getElementById('res')
document.getElementById('cadastrarCliente').addEventListener('click', async (e) => {
    e.preventDefault();

   const nomeCliente = document.getElementById('nomeCliente').value
    const sobrenomeCliente = document.getElementById('sobrenomeCliente').value
    const cpfCliente = document.getElementById('cpfCliente').value
    const telefoneCliente = document.getElementById('telefoneCliente').value
    const emailCliente = document.getElementById('emailCliente').value
    const logradouro = document.getElementById('logradouro').value
    const numero = document.getElementById('numero').value
    const complemento = document.getElementById('complemento').value
    const bairro = document.getElementById('bairro').value
    const localidade = document.getElementById('localidade').value
    const uf = document.getElementById('uf').value
    const cep = document.getElementById('cep').value
    const statusCliente = document.getElementById('statusCliente').value

    const valores={
        nomeCliente,
        sobrenomeCliente,
        cpfCliente,
        telefoneCliente,
        emailCliente,
        logradouro,
        numero,
        complemento,
        bairro,
        localidade,
        uf,
        cep,
        statusCliente
    }

    fetch('http://localhost:3000/clientes/',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valores)
    }).then(resp => resp.json())
    .then(dd=>{
        res.innerHTML = dd.message
    }).catch(err=>{
        res.innerHTML = err.message
    })
});
