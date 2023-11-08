$(document).ready(function() {
    $('header button').click(function() {  /* $('') = seletor do jquery*/
        $('form').slideDown();  /*adiciona um evento a um elemento*/
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();  /*previne o conportamneto padrão do formulario, que é atualizar a pagina quando é submetido*/
        const enderecoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display: none" ></li>');
        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver a imagem em tamnho real" 
                    Ver a imagem em tamanho real  
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val('')/*limpam o formulario depois que a imagem foi add*/
    })
})
