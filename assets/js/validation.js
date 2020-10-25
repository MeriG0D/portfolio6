

//Eventos do Formulário.

$('#form1').submit(function(e){
   e.preventDefault();
    var nome = $('input[name=nome]').val();
    var telefone = $('input[name=telefone]').val();
    var textarea = $('textarea').val();

   if(verificarNome(nome) == false){
      AplicarCampoInvalido($('input[name=nome]'));
   }else if(verificarTelefone(telefone) == false){
      AplicarCampoInvalido($('input[name=telefone]'));
   }else if(verificarTextarea(textarea) == false){
      AplicarCampoInvalido($('textarea'));
   }
   else{
      alert('Sua mensagem foi enviada com sucesso!')
   }

   
   $('.focus').focus(function(){
      resetarCampoInvalido($(this));
   })


    //Funçoes para estilizar o campo do formulário.

      function AplicarCampoInvalido(el){
         el.css('color','#bf2000')
         el.css('border','2px solid #bf2000');
         el.val('Campo Inválido.')
         //el.data('invalido','true');
    }

    function resetarCampoInvalido(el){
         el.css('color','black')
         el.css('border','1px solid black');
         el.val('')
    }

    //Funçoes para verificar nossos campos.

    function verificarNome(nome){
      //Contando a quantidade de espaços e seus respectivos valores//
      if(nome == ' '){
         return false
      }
      var amount = nome.split(' ').length;
      var splitStr = nome.split(' ');
      if(amount >= 2){
         for(var i = 0; i < amount; i++){
           if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
   
           }else{
              AplicarCampoInvalido($('input[name=nome]'));
              return false;
           }
         }
      }else{
         AplicarCampoInvalido($('input[name=nome]'));
         return false;
      }
  
      //Se chegou até o final é pq está ok!
      };

      function verificarTelefone(telefone){
         if(telefone == ''){
            return false;
         }
         if(telefone.match(/^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/) == null){
            return false;
         }
      }

      function verificarTextarea(textarea){
         if(textarea == ''){
            return false;
         }
         if(textarea.match(/^[a-z]{1,}$/) == null){
            return false;
         }
      }
})