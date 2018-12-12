function criaController(jogo){

    var entrada = $('.entrada');
    var lacunas = $('.lacunas');

    function exibeLacunas(){
        lacunas.empty();
        jogo.getLacunas().forEach(function(lacuna){
            var linha = $('<li>').addClass('lacuna').text(lacuna);
            lacunas.append(linha);
        });
    }

    function mudaPlaceHolder(texto){
        entrada.attr('placeholder', texto);
    }

    function guardaPalavraSecreta(){
        try{
            jogo.setPalavraSecreta(entrada.val().trim());
            entrada.val('');
            mudaPlaceHolder('Faça um chute');
            exibeLacunas();
        } catch(err){
            alert(err.message);
        }
        
    }

    function leChute(){
        try{
            jogo.processaChute(entrada.val().trim().substr(0, 1));
            entrada.val('');
            exibeLacunas();
            if(jogo.ganhouOuPerdeu()){

                setTimeout(function(){
                    if(jogo.ganhou()){
                        alert('Parabens, você ganhou o jogo!');
                    } else if(jogo.perdeu()){
                        alert('Você perdeu, tente novamente!');
                    }
                    jogo.reinicia();
                    lacunas.empty();
                    mudaPlaceHolder('palavra secreta');
                }, 200);

            }
        } catch(err){
            alert(err.message);
        }
        
    }

    function inicia() {

        entrada.keypress(function (event) {
            if (event.which == 13) {
                switch (jogo.getEtapa()) {
                    case 1:
                        guardaPalavraSecreta();
                        break;
                    case 2:
                        leChute();
                        break;
                }
            }
        });
    }

    return{
        inicia: inicia
    }

}