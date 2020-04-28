//SOMENTE EVENTOS AQUI

    $CLOSE.click(function(){

        top.spl.close();
        if($LABEL != undefined){

            SEND_SEARCH(function(){

                top.spl.redirect();

            });

        }

    });

    $CTA.click(function(){

        if($LABEL != undefined){

            SEND_SEARCH(function(){

                top.spl.redirect();

            });

        }else{

            top.spl.click_only(window.top.location.href);
            top.spl.redirect();

        }

    });