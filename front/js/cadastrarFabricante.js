const res = document.getElementById('res')

document.getElementById('cadastrarFabricante').addEventListener('click',(e)=>{
    e.preventDefault()

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

    fetch('http://localhost:3000/fabricantes',{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valores)
    }).then(resp => resp.json())
    .then(dd =>{
        res.innerHTML = "Fabricante cadastrado"
    }).catch(err=>{
        res.innerHTML = err.message
    })
})