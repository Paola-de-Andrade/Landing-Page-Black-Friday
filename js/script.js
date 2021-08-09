const form=document.getElementById('form')

form.addEventListener('submit', (e)  => {
    e.preventDefault();
    alert("Cadastrado com sucesso!")
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    console.log("nome = " + nome)
    console.log("email = " + email)
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    //let content = document.getElementById('content')

    //let carregando = `<p>Carregando...<\p>`

    //let pronto = `<p>Pronto, você foi cadastrado!<\p>`

    //content.innerHTML = carregando

    //setTimeout(() => {
        //content.innerHTML = pronto
//},1000)

})
