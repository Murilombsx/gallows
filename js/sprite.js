function createSprite(seletorSprite){
    var sprite = $(seletorSprite);
    frameAtual = 1;
    
    sprite.addClass("frame" + frameAtual);

    function nextFrame(){
        if(frameAtual == 9){
            return;
        } else{
            sprite.removeClass("frame" + frameAtual);
            frameAtual = frameAtual + 1;
            sprite.addClass("frame" + frameAtual);
        }
    }

    // voltar para frame inicial
    function reset(){
        sprite.removeClass("frame" + frameAtual);
        frameAtual = 1;
        sprite.addClass("frame" + frameAtual);
    }

    // return true se terminou e false se nao terminou
    function isFinished(){
        if(frameAtual == 9){
            return true;
        } else{
            return false;
        }
    }

    return{
        nextFrame: nextFrame,
        reset: reset,
        isFinished: isFinished
    }
}

