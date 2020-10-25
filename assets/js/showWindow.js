$(function(){
    abrirJanela();
    verificarCliqueFechar();
    //Aparecer bg-black
    function abrirJanela(){
        $('.img-1').click(function(e){
            e.stopPropagation();
            $('.bg-black,.closeBtn,.img_1').fadeIn()
        })
        $('.img-2').click(function(e){
            e.stopPropagation();
            $('.bg-black,.closeBtn,.img_2').fadeIn()
        })
        $('.img-3').click(function(e){
            e.stopPropagation();
            $('.bg-black,.closeBtn,.img_3').fadeIn()
        })
        $('.img-4').click(function(e){
            e.stopPropagation();
            $('.bg-black,.closeBtn,.img_4').fadeIn()
        })
        $('.img-5').click(function(e){
            e.stopPropagation();
            $('.bg-black,.closeBtn,.img_5').fadeIn()
        })
        $('.img-6').click(function(e){
            e.stopPropagation();
            $('.bg-black,.closeBtn,.img_6').fadeIn()
        })
    }
    //Fechar bg-black.
    function verificarCliqueFechar(){
        el = $('body,.closeBtn,.img_1,.img_2,.img_3,.img_4,.img_5,.img_6');

        el.click(function(){
            $('.bg-black,.closeBtn,.img_1,.img_2,.img_3,.img_4,.img_5,.img_6').fadeOut();
        })
    }


})