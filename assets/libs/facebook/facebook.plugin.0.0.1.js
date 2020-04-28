var Facebook = {};

    //Status do usuário, antes da verificação
    // este se segue indefinido.
    Facebook.status = undefined;
    Facebook.auth = undefined;
    Facebook.user = undefined;

    // Iniciando o sdk do Facebook
    Facebook.ready = function(_appID){

        window.fbAsyncInit = function() {
          
            FB.init({
        
              appId            : _appID,
              autoLogAppEvents : true,
              xfbml            : true,
              version          : 'v2.10',
              status           : true
        
            });
        
            FB.AppEvents.logPageView();
        
        };

        (function(d, s, id){

         var js, 
            fjs = d.getElementsByTagName(s)[0];
         
         if (d.getElementById(id)){return;}
         js = d.createElement(s); 
         js.id = id;
         js.src = "//connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       
       }(document, 'script', 'facebook-jssdk'));

        return this;


    };

    //Fazendo verificação do usuário, caso este estejá ou não logado.
    Facebook.checkUser = function(_success, _fail){

        FB.getLoginStatus(function(_response) {

            _fail = (typeof _fail == "function") ? _fail: function(){};
            _success = (typeof _success == "function") ? _success: function(){};
        
            if(_response.status == "connected"){

                Facebook.status = true;
                Facebook.auth = _response.authResponse;
                _success(_response.authResponse);

            }else{

                Facebook.status = false;
                _fail();

            }
        
        });

    };

    //Executando Login do usuário
    Facebook.login = function(_callBack){

        _callBack = (typeof _callBack == "function") ? _callBack: function(){};
        FB.login(_callBack, {scope: 'publish_actions'});
        return this;

    };

    //Recuperando informações do usuário
    Facebook.getUser = function(_callBack){

      FB.api("/me?fields=name,email,gender,first_name,link,locale,age_range,birthday",function(_response){

        Facebook.user = _response;
        _callBack(_response);

      });
      return this;


    };

    //Iniciando funcionalidades, após carregamento do SDK do Facebobook.
    Facebook.run = function(_callBack){

      var _checkFB = setInterval(function(){

        if(FB){

            clearInterval(_checkFB);
            _callBack();

        }

      }, 1000);

    };