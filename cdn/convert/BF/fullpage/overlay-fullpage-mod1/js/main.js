//ARQUIVO JS PAI

    // Valores Default
    var $ID = campaignID,
        __SCOPE = window.top.document,
        $FRAME = $("#f-content-" + $ID, __SCOPE),
        $VIEW = false,
        $LABEL = undefined,
        $CTA = $('.btn--cta'),
        $CLOSE = $('.btn--close');
        

    function SEND_SEARCH(_callback = function(){}){

        $.post( '{base_url}tr/tp/' + top.spl.acc + '/' + top.spl.cid, { resposta: $LABEL }, _callback);

    }

    

            

