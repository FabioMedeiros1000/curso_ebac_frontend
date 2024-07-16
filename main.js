$(document).ready(function(){
    $('button').on('click',function(e){
        e.preventDefault();
        const novaTarefa = $('input').val();
        const listaDeTarefas = $(`<li style='display:none'>${novaTarefa}</li>`);
        $(listaDeTarefas).appendTo('ol');
        $(listaDeTarefas).fadeIn(500);
        $('input').val(''); 
    })

    $('ol').on('click', 'li', function(e) {
        $(this).toggleClass('strikethrough');
    });

});