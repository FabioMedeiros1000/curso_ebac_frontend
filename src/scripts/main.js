document.addEventListener('DOMContentLoaded', function(){
    function validarTelefone(t) {
        const regex = /^\d{5}-\d{4}$/;
        return regex.test(t);
    }
    function validarEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.com$/;
        return emailRegex.test(email);
    }

    document.getElementById('formulario').addEventListener('submit', function(evento){
        evento.preventDefault();

        let nome = document.getElementById('nome').value;
        let telefone = document.getElementById('telefone').value;
        let email = document.getElementById('email').value;

        document.getElementById('informacoes-incorretas-nome').style.display = 'none';
        document.getElementById('informacoes-incorretas-telefone').style.display = 'none';
        document.getElementById('informacoes-incorretas-email').style.display = 'none';

        nome = nome.split(' ');
        
        if (nome.length <= 1){
            document.getElementById('informacoes-incorretas-nome').style.display = 'block';
        }

        if(!validarTelefone(telefone)){
            document.getElementById('informacoes-incorretas-telefone').style.display = 'block';
        }

        if(!validarEmail(email)){
            document.getElementById('informacoes-incorretas-email').style.display = 'block';
        }
    })
})