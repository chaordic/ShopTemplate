/*
* Biblioteca para overlay de users on site da shopback
* @author: Danilo Augusto Matos[da@shopback.com.br]
* @description: Conjunto de Métodos para criação e funcionalidade do users on site
* @version: 1.0.3
*/

jQuery.users = function( options ) {

    // Declara todas as variáveis utilizadas
    var element, frame, padding, style, borderTop, borderLeft, settings, sbUsers, newString, animatePos, animateVal, animationProperties = {}, animationHide = {};

    // Define as propriedades padrões do plugin
    settings = $.extend({
        wait: 100, // tempo em milisegundos de espera para iniciar
        close: 5000, // após o overlay estar na tela, depois de quantos milisegundos ele deve desaparecer
        min_users: 10, // mínimo de usuários
        max_users: 20, // máximo de usuários
        position: 'bottom right', // posição que o overlay vai aparecer, 'bottom right' é o padrão
        bottom: false, // propriedade para adicionar um espaço em relação ao bottom da window
        productPageElement: false, // útil quando a url não tem um parâmentro que define página de produto
        elementHeight: 60 // Definir altura variável no alerta.
    }, options );
    
    // Define o valor das variáveis de objeto
    element = $("#block");
    frame = $("#f-content-" + top.spl.cid_views, window.parent.document);

    // Verifica se o desenvolvedor adicionou padding ao objeto via CSS e se em caso positivo, soma esse padding ao iframe.
    padding = element.css('padding').split(' ');
    if ( padding.length == 2 || padding.length == 3 ) {
        padding = padding[1].replace('px', '') * 2;
    } else {
        padding = padding[1].replace('px', '') + padding[3].replace('px', '');
    }

    borderLeft = parseInt( $('#block').css("border-left-width") ) + parseInt( $('#block').css("border-right-width") );
    borderTop = parseInt( $('#block').css("border-top-width") ) + parseInt( $('#block').css("border-bottom-width") );

    // Define as propriedades de CSS padrões do iframe
    style = {
        width: element.width() + padding + borderLeft,
        height: (settings.elementHeight + borderTop),
        bottom: 5,
        overflow: 'hidden',
        position: 'fixed',
        top: 'initial',
        left: 'initial',
        display: 'none'
    };

    // Regra de animação padrão
    animatePos = 'height';
    animateVal = style.height - borderTop;

    /* Dependendo da posição selecionada no plugin, começa a definir as propriedades
     * customizadas para iframe e block
     */
    if ( settings.position == 'bottom center' || settings.position == 'center bottom' ) {
        // Aqui define-se somente para o iframe
        style.right = 'initial';
        style.left = '50%';
        style.marginLeft = -Math.abs(style.width / 2);
    } else if ( settings.position == 'bottom left' || settings.position == 'left bottom' ) {
        // Aqui define-se somente para o iframe
        style.left = '5px';
        style.right = "initial";
    } else if ( settings.position == 'center right' || settings.position == 'right center' ) {

        // Primeiro define-se propriedades para o elemento #block
        element.css({
            height: style.height - borderTop,
            bottom: 'initial',
            right: 0,
            width: 0
        });

        // É necesário esconder o '<p>' com o texto para a animação ficar mais fluída
        element.find('p').css('display','none');

        // Depois define-se as propriedades do iframe
        style.right = '5px';
        style.top = '50%';
        style.marginTop = -Math.abs(style.height / 2);

        // Por último, muda-se as propriedades da animação
        animatePos = 'width';
        animateVal = style.width - padding;
    } else if ( settings.position == 'center left' || settings.position == 'left center' ) {

        // Primeiro define-se propriedades para o elemento #block
        element.css({
            height: style.height - borderTop,
            bottom: 'initial',
            right: 'initial',
            left: 0,
            width: 0
        });

        // É necesário esconder o '<p>' com o texto para a animação ficar mais fluída
        element.find('p').css('display','none');

        // Depois define-se as propriedades do iframe
        style.left = "5px";
        style.right = 'initial';
        style.top = '50%';
        style.marginTop = -Math.abs(style.height / 2);

        // Por último, muda-se as propriedades da animação
        animatePos = 'width';
        animateVal = style.width - padding;
    } else if ( typeof settings.position == "object" ) {
        
        // Depois define-se as propriedades do iframe
        if ( typeof settings.position.left == "number" || settings.position.left != "undefined" ) {
            style.left = settings.position.left;
        } else {
            console.log( '%c  SB--> A posição LEFT deve ser um número válido.', 'color: #ff0000; font-size: 11px; font-family: "Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace padding: 5px;' );
        }
        
        if ( typeof settings.position.right == "number" || settings.position.left != "undefined" ) {
            style.right = settings.position.right;
        } else {
            console.log( '%c  SB--> A posição RIGHT deve ser um número válido.', 'color: #ff0000; font-size: 11px; font-family: "Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace padding: 5px;' );
        }

        if ( typeof settings.position.top == "number" || settings.position.left != "undefined" ) {
            style.top = settings.position.top;
        } else {
            console.log( '%c  SB--> A posição TOP deve ser um número válido.', 'color: #ff0000; font-size: 11px; font-family: "Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace padding: 5px;' );
        }

        if ( typeof settings.position.bottom == "number" || settings.position.left != "undefined" ) {
            style.bottom = settings.position.bottom;
        } else {
            console.log( '%c  SB--> A posição BOTTOM deve ser um número válido.', 'color: #ff0000; font-size: 11px; font-family: "Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace padding: 5px;' );
        }

    } else if ( settings.position == 'bottom right' || settings.position == 'right bottom' ) {
        // Não há necessidade de fazer nada já que 'bottom right' é a posição padrão
    } else {
        console.log( '%c  SB--> Posição de Overlay não reconhecida, por padrão, será posicionado em "bottom right"', 'color: #ff0000; font-size: 11px; font-family: "Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace padding: 5px;' );
    }

    // Verifica se existe um valor no parâmetro 'bottom'
    if ( settings.bottom == false ){
        // continue
    } else if ( settings.bottom != false && !isNaN(settings.bottom)  ) {
        style.bottom = settings.bottom
    } else {
        console.log( '%c  SB--> Propriedade "bottom" deve ser um número', 'color: #ff0000; font-size: 11px; font-family: "Courier New",Courier,"Lucida Sans Typewriter","Lucida Typewriter",monospace padding: 5px;' )
    }

    // Aplica-se todo o CSS necessário no iframe
    frame.css(style);

    // Salva o número de usuários definidos pela ferramenta da ShopBack
    sbUsers = $('.users').html();

    // Verifica se o número de usuários da ferramenta ShopBack é maior que o limite definido pelo plugin
    if ( sbUsers > settings.max_users ) {
        
        // Caso positivo, aplica um random entre os valores definidos no plugin
        sbUsers = Math.floor(Math.random()*(settings.max_users - settings.min_users + 1 ) + settings.min_users);

        // Aplica o novo valor no Overlay
        $('.users').html(sbUsers);

    }

    // Função responsável por fazer o overlay aparecer/sumir
    function showOverlay(){
        // Inicia a animação do overlay
        setTimeout(function() {
            // Deixa o iframe visível
            frame.css('display','block');

            // Atualiza as propriedades da animação definidas anteriormente
            animationProperties[animatePos] = animateVal;
            animationHide[animatePos] = 0;
            
            // Inicia a animação para o overlay aparecer na tela
            element.animate(animationProperties, 500, function() {
                // Caso esteja na posição central e esquerda/direita, precisa exibir o '<p>' escondido anteriormente
                if ( settings.position == 'center right' || settings.position == 'right center' || settings.position == 'center left' || settings.position == 'left center' ) {
                    element.find('p').fadeIn('fast');
                }

                // Marcamos como overlay visualizado na ferramenta ShopBack
                top.spl.view(top.spl.cid_views);
            });

            // Inicia a animação para o overlay sair da tela depois de X segundos
            setTimeout(function() {
                // Caso esteja na posição central e esquerda/direita, precisa exibir o '<p>' escondido anteriormente
                if ( settings.position == 'center right' || settings.position == 'right center' || settings.position == 'center left' || settings.position == 'left center' ) {
                    element.find('p').fadeOut('fast');
                }

                // Animação de sair da tela
                element.animate(animationHide, 500, function() {
                    frame.css("display","none");
                });
            }, settings.close);
        }, settings.wait);
    }

    // Verifica se é uma página de produto quando necessário
    if ( settings.productPageElement != false ) {
        // Só mostra o overlay se for página de produto
        if ( $(settings.productPageElement, window.parent.document).length > 0 ) {
            showOverlay();
        }
    } else {
        showOverlay();
    }
};