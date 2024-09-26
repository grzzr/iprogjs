
const btLogin = document.querySelector("#btLogin")
if(btLogin)
    btLogin.addEventListener('click', login)

const nomeUsuario = localStorage.getItem("login")
const spanNome=document.querySelector("#nomeUsuario")
if(spanNome) {
    spanNome.innerHTML="<strong>"+nomeUsuario+"</strong>"
}

function login() {
    const usrLogin = "usuario"
    const usrSenha = "abcd"

    /* Aqui validamos os dados
    do formulário de login
    */

    // pegar valores dos campos do form

    const login = document.querySelector("#txLogin").value
    const senha = document.querySelector("#txSenha").value
    let destino = ""

    if(login == usrLogin && senha == usrSenha) {
        // login válido
        localStorage.setItem("login", usrLogin)
        destino = "protegida.html"
    } else {
        // login inválido
        destino  = "index.html"
    }

    /**
     * Depois de validados
     * temos que tomar uma decisão
     * de para onde remeter o cliente
     * (rotear)
     * 
     */

    document.location = destino
}