window.fbAsyncInit = function() {
    FB.init({
        appId: '151991902050983',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.4'
    });
};

// Cria tag script com arquivo do Facebook SDK
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if(d.getElementById(id)) {
        return;
    }

    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Função para conexão no Facebook e coletar informações abertas dos usuários
var disabled = false;
var force = false;

function connect() {
    if(!disabled) {
        disabled = true;

        var link = top.spl.b64(String(top.location.href) + "#conectar-facebook");
        var url = top.spl.base_url + '/tr/tc/' + top.spl.acc + '/' + top.spl.cid + '/' + link;
        top.spl.ajax(url, false);

        if(force) {
            var scope_context = {
                scope: 'public_profile, email',
                auth_type: 'rerequest',
                return_scopes: true
            };
        } else {
            var scope_context = {
                scope: 'public_profile, email',
                return_scopes: true
            };
        }

        FB.login(function(response) {
            if(response.authResponse && String(response.authResponse.grantedScopes).search("email") > -1) {

                $(".main--pesquisa__facebook-home").animate({

                    opacity: "0"

                }, 120, function(){

                    $(".main--pesquisa__facebook-home").css("display", "none");
                    $(".main--pesquisa__facebook-thanks").css("display", "block").stop().animate({

                        opacity: "1"

                    }, 120);

                });

                FB.api('/me?fields=name,email,gender', function(user) {

                    $(".main--pesquisa__figure-user img").attr("src", "https://graph.facebook.com/" + user.id + "/picture?type=large");
                    $("#user__name").html(user.name);

                    $.ajax({
                        type: "POST",
                        url: "//app.shopconvert.com.br/facebook/callback.php?ref=" + String(top.location.href),
                        data: {
                            token: response.authResponse.accessToken,
                            user_id: user.id,
                            user_name: user.name,
                            user_email: user.email,
                            user_gender: user.gender,
                            post: true
                        },
                        success: function(data) {
                            $.post('//app.shopconvert.com.br/tr/tl/' + top.spl.acc + '/' + top.spl.cid, {
                                email: user.email
                            });

                            top.spl.set_cookie('_spl_overlay_social', "disabled", 720);

                            try {
                                top._st_app.ci(String(user.email));
                                top._st_app.set_name(String(user.name));
                            } catch(e) {}
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            // error
                        }
                    });
                });
            } else {
                disabled = false;
                $(".facebook").css("opacity", "1");

                if(!force) {
                    force = true;
                    $(".facebook").trigger("click");
                }
            }
        }, scope_context);
    }
}
