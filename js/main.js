$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true
    });

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            let camposInvalidos = validator.numberOfInvalids();
            if(camposInvalidos == 1)
            {
                alert(`Existe ${validator.numberOfInvalids()} campo inválido. Por favor, preencha os campos para prosseguir com a compra!`);
            }
            else{
                alert(`Existem ${validator.numberOfInvalids()} campos inválidos. Por favor, preencha os campos para prosseguir com a compra!`);
            }
            
        },
        messages:{
            nome: 'Digite o seu nome',
            email: 'Digite o seu email',
            telefone: 'Digite o seu telefone',
            endereco: 'Digite o seu endereço',
            cep: 'Digite o seu CEP',
            cpf: 'Digite o seu CPF'
        }
    })
});

