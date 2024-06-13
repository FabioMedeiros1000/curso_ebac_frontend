let numberA = document.getElementById('nA');
let numberB = document.getElementById('nB');
let formulario = document.getElementById('formulario');
let elementoOculto = document.querySelector('.error-message');
let containerValidacao = document.getElementById('validacao')

function validarEntradas(a,b){
    if (b > a){
        return true;
    }
    else
    {
        return false;
    }
}

numberA.addEventListener('keyup',function(e){
    e.preventDefault();
    containerValidacao.innerHTML = "";
    containerValidacao.style.display = 'none';
    if(!validarEntradas(e.target.value,numberB.value)){
        numberB.classList.add('error');
        elementoOculto.innerHTML = "O número desse campo deve ser maior";
        elementoOculto.style.display = 'block';
    }
    else{
        numberB.classList.remove('error');
        elementoOculto.innerHTML = "";
        elementoOculto.style.display = 'none';
    }
})

numberB.addEventListener('keyup',function(e){
    e.preventDefault();
    containerValidacao.innerHTML = "";
    containerValidacao.style.display = 'none';
    if(!validarEntradas(numberA.value,e.target.value)){
        numberB.classList.add('error');
        elementoOculto.innerHTML = "O número desse campo deve ser maior";
        elementoOculto.style.display = 'block';
    }
    else{
        numberB.classList.remove('error');
        elementoOculto.innerHTML = "";
        elementoOculto.style.display = 'none';
    }
})

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    if(validarEntradas(numberA.value,numberB.value)){
        containerValidacao.innerHTML = "Formulário enviado com sucesso";
        containerValidacao.style.display = 'block';
        containerValidacao.style.color = '#00FF00';
    }
    else{
        containerValidacao.innerHTML = "Formulário inválido";
        containerValidacao.style.display = 'block';
        containerValidacao.style.color = '#FF0000';
    }
})