//efeito do botão voltar ao Topo

function topo() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: "smooth"
        }
    )
}

//Validação de Login

function login() {
    var logado = 0;
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if (usuario === 'mauricio' && senha === '123') {
        window.location = 'index.html';
        logado = 1;
    }

    if (logado === 0) {
        alert('Acesso negado. Dados incorretos');
    }

}

//Ativar alert no botão cadastrar

function cadastro() {
    var usuarioCadastrar = document.getElementById('usuario-cadastrar').value;
    var emailCadastrar = document.getElementById('email').value;
    var senhaCadastrar = document.getElementById('senha-cadastrar').value;

    if (!usuarioCadastrar ||
        !emailCadastrar ||
        !senhaCadastrar) {
        alert('Preencha todos os dados.')
        
    } else {
        alert('Cadastrado com sucesso!')
        window.location = 'login.html'
    }
}