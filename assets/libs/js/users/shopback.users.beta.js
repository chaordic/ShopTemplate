/*
 * Biblioteca para overlay de users on site da shopback
 * @author: Danilo Augusto Matos[da@shopback.com.br]
 * @description: Conjunto de Métodos para criação e funcionalidade do users on site
 * @version: 1.0.3
 */
/**
 * Setando $ como objeto jquery para que não haja conflito com outros frameworks tal como angular
 */
var $ = jQuery;

//Está variável será ustilisada para portar os parametros da animação.
var usersAnimateParamsBeforeAction = {},
    usersAnimateParamsAction = {};

/**
 * Helper de auxilío, para que seja setada a posição do alerta na página
 */
$.usersHelperSetPosition = function(position = "bottom center") {

    if (typeof position == "object") {

        var positionReferInString = "",
            positionNumberInString = "";

        for (obj in position) {

            positionReferInString += obj + " ";
            positionNumberInString += parseInt(position[obj]) + " ";

        }
        position = positionReferInString.trim() + " " + positionNumberInString.trim();

    }


    //Padrões de diretivas, para identificar a ordem de parametrização do eixo X & Y
    const Xrefer = ["left", "right", "center"];
    const Yrefer = ["top", "bottom", "center"];

    //Definindo parametrização de x e y e suas respectivas ordens:
    var style = usersAnimateParamsAction,
        positionRules = position.split(" "),
        y = (positionRules[1] == "center" && Yrefer.indexOf(positionRules[0]) < 0 || Yrefer.indexOf(positionRules[1]) >= 0 && Yrefer.indexOf(positionRules[0]) < 0) ? positionRules[1] : positionRules[0],
        x = (positionRules[0] == "center" && Xrefer.indexOf(positionRules[1]) < 0 || Xrefer.indexOf(positionRules[0]) >= 0 && Xrefer.indexOf(positionRules[1]) < 0) ? positionRules[0] : positionRules[1],
        yPositionInPixel = (isNaN(parseInt(positionRules[(positionRules.indexOf(y) + 2)]))) ? 0 : parseInt(positionRules[(positionRules.indexOf(y) + 2)]),
        xPositionInPixel = (isNaN(parseInt(positionRules[(positionRules.indexOf(x) + 2)]))) ? 0 : parseInt(positionRules[(positionRules.indexOf(x) + 2)]);

    //Setando posicionamento no eicho X:
    switch (x) {

        case "left":

            style.left = xPositionInPixel;
            style.right = "initial";
            style.margin = "0";
            break;
        case "right":

            style.left = "initial";
            style.right = xPositionInPixel;
            style.margin = "0";
            break;
        case "center":

            style.left = "50%";
            style.right = "initial";
            style["margin-left"] = "-" + (usersAnimateParamsBeforeAction.width / 2) + "px";
            usersAnimateParamsBeforeAction["margin-left"] = style["margin-left"];
            break;
    }

    //Setando posicionamento no eixo Y:
    switch (y) {

        case "top":

            style.top = yPositionInPixel;
            style.bottom = "initial"
            break;
        case "bottom":

            style.bottom = yPositionInPixel;
            style.top = "initial";
            break;
        case "center":
            style.top = ($(window.top.window).innerHeight() / 2) - (usersAnimateParamsBeforeAction.height / 2);
            style.bottom = "initial";
            break;
    }

    style.opacity = "1";


    usersAnimateParamsBeforeAction.top = style.top;
    usersAnimateParamsBeforeAction.bottom = style.bottom;
    usersAnimateParamsBeforeAction.left = style.left;
    usersAnimateParamsBeforeAction.right = style.right;

    usersAnimateParamsAction = style;

    console.log([x, y]);

    var parametersToStyle = [x, y];

    return parametersToStyle;

}


$.userSetAnimateParams = function(params, ordenAnimate = false) {

    var x = params[0],
        y = params[1],
        style = usersAnimateParamsBeforeAction;

    //Posicionando as coordenadas pré animação no exio X e Y
    if (!ordenAnimate) {

        if (y != "center") {

            switch (y) {

                case "bottom":

                    style.bottom = "-100%";
                    break;
                case "top":

                    style.top = "-100%";
                    break;
            }

        } else {

            switch (x) {

                case "left":

                    style.left = "-100%";
                    break;
                case "right":

                    style.right = "-100%";
                    break;
            }

        }

    } else {

        switch (ordenAnimate + " " + y + " " + x) {

            //X:left; Y:center
            case "bottom center left":

                style.top = (usersAnimateParamsBeforeAction.top + usersAnimateParamsBeforeAction.height) + "px";
                break;
            case "top center left":

                style.top = (usersAnimateParamsBeforeAction.top - usersAnimateParamsBeforeAction.height) + "px";
                break;

            case "right center left":

                style.left = (parseInt(style.width) + 5) + "px";
                break;

            case "left center left":

                style.left = "-100%";
                break;


                // X:left ; Y: bottom

            case "bottom bottom left":

                style.bottom = "-100%";
                break;
            case "top bottom left":

                style.bottom = (parseInt(style.height) + 5) + "px";
                break;

            case "right bottom left":

                style.left = (parseInt(style.width) + 5) + "px";
                break;

            case "left bottom left":

                style.left = "-" + (parseInt(style.width) + 5) + "px";
                break;



                // X:left ; Y: top

            case "bottom top left":

                style.top = (parseInt(style.height) + 5) + "px";
                break;

            case "top top left":

                style.top = "-100%";
                break;

            case "right top left":

                style.left = (parseInt(style.width) + 5) + "px";
                break;

            case "left top left":

                style.left = "-100%";
                break;


                //X:right; Y:center
            case "bottom center right":

                style.top = (usersAnimateParamsBeforeAction.top + usersAnimateParamsBeforeAction.height) + "px";
                break;
            case "top center right":

                style.top = (usersAnimateParamsBeforeAction.top - usersAnimateParamsBeforeAction.height) + "px";
                break;

            case "right center right":

                style.right = "-100%";
                break;

            case "left center right":

                style.right = (parseInt(style.width) + 5) + "px";
                break;



                // X:right ; Y: top
            case "bottom top right":

                style.top = (parseInt(style.height) + 5) + "px";
                break;

            case "top top right":

                style.top = "-100%";
                break;

            case "right top right":

                style.right = "-100%";
                break;

            case "left top right":

                style.right = (parseInt(style.width) + 5) + "px";
                break;



                //X:right ; Y: bottom

            case "bottom bottom right":

                style.bottom = "-100%";
                break;

            case "top bottom right":

                style.bottom = (parseInt(style.height) + 5) + "px";
                break;

            case "right bottom right":

                style.right = "-100%";
                break;

            case "left bottom right":

                style.right = (parseInt(style.width) + 5) + "px";
                break;



                //X:center; Y:center
            case "bottom center center":

                style.top = (usersAnimateParamsBeforeAction.top + usersAnimateParamsBeforeAction.height) + "px";
                break;

            case "top center center":

                style.top = (usersAnimateParamsBeforeAction.top - usersAnimateParamsBeforeAction.height) + "px";
                break;

            case "right center center":

                style.left = "50%";
                style["margin-left"] = usersAnimateParamsBeforeAction.width + "px";
                break;

            case "left center center":

                style.left = "50%";
                style["margin-left"] = "-" + usersAnimateParamsBeforeAction.width + "px";
                break;



                //X:center; Y:top
            case "bottom top center":

                style.top = (parseInt(style.height) + 5) + "px";
                break;

            case "top top center":

                style.top = "-100%";
                break;

            case "right top center":

                style.left = "50%";
                style["margin-left"] = usersAnimateParamsBeforeAction.width + "px";
                break;

            case "left top center":

                style.left = "50%";
                style["margin-left"] = "-" + usersAnimateParamsBeforeAction.width + "px";
                break;


                //X:center; Y:bottom
            case "bottom bottom center":

                style.bottom = "-100%";
                break;

            case "top bottom center":

                style.bottom = (parseInt(style.height) + 5) + "px";
                break;

            case "right bottom center":

                style.left = "50%";
                style["margin-left"] = usersAnimateParamsBeforeAction.width + "px";
                break;

            case "left bottom center":

                style.left = "50%";
                style["margin-left"] = "-" + usersAnimateParamsBeforeAction.width + "px";
                break;

        }

    }

    style.opacity = "0";

    return style;

};

$.users = function(options) {

    // Declara todas as variáveis utilizadas
    var element, frame, padding, style, borderTop, borderLeft, settings, sbUsers;

    // Define as propriedades padrões do plugin
    settings = $.extend({
        wait: 100, // tempo em milisegundos de espera para iniciar
        close: 5000, // após o overlay estar na tela, depois de quantos milisegundos ele deve desaparecer
        min_users: 10, // mínimo de usuários
        max_users: 20, // máximo de usuários
        position: 'bottom right', // posição que o overlay vai aparecer, 'bottom right' é o padrão
        bottom: false, // propriedade para adicionar um espaço em relação ao bottom da window
        productPageElement: false, // útil quando a url não tem um parâmentro que define página de produto
        elementHeight: 60, // Definir altura variável no alerta.
        animateFrom: false
    }, options);

    // Define o valor das variáveis de objeto
    element = $("#block");
    frame = $("#f-content-" + top.spl.cid_views, window.parent.document);

    //Resetando a posição para que os alertas antigos funcionem:
    element.css({

        position: "fixed",
        left: "0px",
        top: "0px",
        height: "auto"

    });

    borderTop = parseInt($('#block').css("border-top-width")) + parseInt($('#block').css("border-bottom-width"));

    // Define as propriedades de CSS padrões do iframe
    styleDefault = {
        width: "100%",
        height: (settings.elementHeight + borderTop),
        bottom: "initial",
        overflow: 'hidden',
        position: 'fixed',
        top: 'initial',
        left: 'initial',
        right: "initial",
        display: 'block'
    };

    //Setando dinâmicamente a largura do alerta
    frame.css(styleDefault);


    //Atribuindo o estilo pré animação do Alerta.
    usersAnimateParamsBeforeAction = styleDefault;
    usersAnimateParamsBeforeAction.width = element.innerWidth();
    styleDefault.width = element.innerWidth();
    frame.css(usersAnimateParamsBeforeAction);
    //Setando o posicionamento X Y do Alerta.
    usersAnimateParamsBeforeAction = $.userSetAnimateParams($.usersHelperSetPosition(settings.position), settings.animateFrom);

    usersAnimateParamsBeforeAction.width = element.innerWidth();

    // Aplica-se todo o CSS necessário no iframe
    frame.css(usersAnimateParamsBeforeAction);


    // Salva o número de usuários definidos pela ferramenta da ShopBack
    sbUsers = $('.users').html();

    // Verifica se o número de usuários da ferramenta ShopBack é maior que o limite definido pelo plugin
    if (sbUsers > settings.max_users) {

        // Caso positivo, aplica um random entre os valores definidos no plugin
        sbUsers = Math.floor(Math.random() * (settings.max_users - settings.min_users + 1) + settings.min_users);

        // Aplica o novo valor no Overlay
        $('.users').html(sbUsers);

    } else if (isNaN(parseInt(sbUsers))) {
        //Esta linha garante que caso o overlay não seja tipo visualizações, o número de usuários será setado da mesma forma
        sbUsers = Math.floor(Math.random() * (settings.max_users - settings.min_users + 1) + settings.min_users);
        $('.users').html(sbUsers);

    }

    // Função responsável por fazer o overlay aparecer/sumir
    function showOverlay() {
        // Inicia a animação do overlay
        setTimeout(function() {
            // Deixa o iframe visível
            usersAnimateParamsBeforeAction.display = "block";
            frame.css(usersAnimateParamsBeforeAction);

            console.log(usersAnimateParamsBeforeAction);
            console.log(usersAnimateParamsAction);

            setTimeout(function() {

                // Atualiza as propriedades da animação definidas anteriormente
                frame.animate(usersAnimateParamsAction, 500, function() {

                    // Marcamos como overlay visualizado na ferramenta ShopBack
                    top.spl.view(top.spl.cid_views);

                    setTimeout(function() {

                        // Animação de sair da tela
                        frame.animate(usersAnimateParamsBeforeAction, 500, function() {
                            frame.css("display", "none");
                        });
                        //Este é o tempo para o fechamento do alerta
                    }, settings.close);

                });

            }, 100);

            //Este é o tempo para a abertura do alerta
        }, settings.wait);

    }

    // Verifica se é uma página de produto quando necessário
    if (settings.productPageElement != false) {
        // Só mostra o overlay se for página de produto
        if ($(settings.productPageElement, window.parent.document).length > 0) {
            showOverlay();
        }
    } else {
        showOverlay();
    }
};