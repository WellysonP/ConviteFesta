function VerificarEntrada(){
    NomeConvidade = document.getElementById('nome').value
    ConvidadeWellyson = ['Amanda','Arlete','Miguel','Wiliken','Wellyson','Humberto']
    if (ConvidadeWellyson.includes(NomeConvidade)){
        document.getElementById('PermissaoDeEntrada').innerText='Você pode entrar!'
    } else{
        document.getElementById('PermissaoDeEntrada').innerText='Você não pode entrar!'
    }
}