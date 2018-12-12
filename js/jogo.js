function criaJogo(sprite){

    var palavraSecreta = '';
    var etapaAtual = 1;
    var lacunas = [];
    var acertou = false;

    function ganhou(){
        if(lacunas.length == 0){
            return false;
        }

        for(var i = 0;i < palavraSecreta.length; i++){
            if(lacunas[i] == ''){
                return false;
            }
        }
        return true;
    }

    function perdeu(){
        return sprite.isFinished();
    }

    function ganhouOuPerdeu(){
        return ganhou() || perdeu();
    }

    function reinicia(){
        etapaAtual = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    }

    function processaChute(letra){
        if(!letra.trim()) throw Error('Chute inválido');
        acertou = false;
        for(var i = 0; i < palavraSecreta.length; i++){
            var letraPalavra = palavraSecreta.substr(i, 1);
            if(letra == letraPalavra){
                lacunas[i] = letra;
                acertou = true;
            }
        }
        if(acertou == false){
            sprite.nextFrame();
        }
    }

    function getAcertou(){
        return acertou;
    }

    function proximaEtapa(){
        etapaAtual = 2;
    }

    function setPalavraSecreta(palavra){
        if(!palavra.trim()) throw Error('Palavra secreta inválida');
        palavraSecreta = palavra;
        tamanhoPalavra = palavraSecreta.length;
        for(var i = 0; i < tamanhoPalavra; i++){
            lacunas.push('');
        }
        proximaEtapa();
    }

    function getLacunas(){
        return lacunas;
    }

    function getEtapa(){
        return etapaAtual;
    }

    return {
        setPalavraSecreta: setPalavraSecreta,
        getLacunas: getLacunas,
        getEtapa: getEtapa,
        processaChute: processaChute,
        ganhou: ganhou,
        perdeu: perdeu,
        ganhouOuPerdeu: ganhouOuPerdeu,
        reinicia: reinicia,
        getAcertou: getAcertou
    }

}