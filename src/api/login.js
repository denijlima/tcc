const efetuarLogin =  async (usuario, senha) =>{
    let url = "iwallet-e.herokuapp.com";

    const cabecalhoHTTP = {
        method:"POST",
        body:JSON.stringify({
            login:usuario,
            password:senha
        }),
        headers:{
            "Content-type" : "application/json"
        }
    }
    const resposta = await fetch(`http://${url}/auth`, cabecalhoHTTP);

    console.warn(resposta);

    }


export default efetuarLogin;