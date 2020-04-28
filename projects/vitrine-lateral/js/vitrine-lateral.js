window.mobileAndTabletcheck = function() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
          return check;
        };
        
        var $ID = $('html').attr('data-campaign'),
            $CLIID = $('html').attr('data-client'),
            $STYLE = $('body').attr('data-style'),
            $STYLEMOB = $('body').attr('data-style-mobile-button'),
            $STYLEDEKMOB = $('body').attr('data-style-dekmob'),
            __SCOPE = window.top.document,
            $FRAME = $("#f-content-" + $ID, __SCOPE),
            $VIEW = false,
            $ACTIVATED = false,
            $RECOMENDACAO = false,
            $HISTORY = false,
            $VITRINE = $(".vitrine-main"),
            $POWER = $(".btn-power"),
            $CLOSE = $(".close-x"),
            $JSLINK = $(".js-link"),
            $CHANGESCREENS = $(".tabs"),
            $SEARCH_TRIGGER = $(".btn-search-trigger"),
            $SEARCH_SHOW = false,
            $SEARCH = $(".input-search"),
            $SEARCH_STATUS = false,
            $RESET_SEARCH = $(".btn-close-history"),
            $BTN_IS_MOB = $('body').hasClass('button-desk-is-mobile'),
            style = {

                width: "431px",
                height: "100%",
                opacity: "1",
                display: "block",
                position: "fixed",
                bottom: "auto",
                top: "0",
                right: "-400px",
                left: "auto"

            },
            styleMob = {

                width: "105px",
                height: "105px",
                opacity: "1",
                display: "block",
                position: "fixed",
                top: "inherit",
                bottom: "0",
                right: "0",
                left: "inherit"

            },
            styleDekMob = {

                width: "426px",
                height: "100%"

            };

            if($STYLE){
                style = $.extend(style, JSON.parse($STYLE));
            }

            if($STYLEMOB){
                styleMob = $.extend(styleMob, JSON.parse($STYLEMOB));
            }

            if($STYLEDEKMOB){
                styleDekMob = $.extend(styleDekMob, JSON.parse($STYLEDEKMOB));
            }

            var checkMobile = function(){
                if(mobileAndTabletcheck()){
                    $('body').addClass('main-mobile');
                    $FRAME.css(styleMob);
                }else{
                    $('body').addClass('main-desktop');
                    if($BTN_IS_MOB){
                        $FRAME.css(styleMob);
                    }else{
                        $FRAME.css(style);
                    }
                }
            },

            markConversion = function(_link){
                top.spl.cid = $ID;
                top.spl.click_only(_link);
                top.spl.set_cookie('_spl_tr', $ID, 720);
            },

            redirectTo = function(_link){

                markConversion(_link);

                setTimeout(function(){

                    top.location = top.spl.link_transform(_link);

                }, 500);

            },

            makeTheBoxes = function(_products, _target){

                var _timer = 800;

                _products.forEach(function(_valuel, _index){

                    var _template = $("#ghost .product").clone(),
                        _code = _template.html();

                    _code = _code.split("{imagem}").join(_valuel.images[0]).replace('data-src', 'src');
                    _code = _code.split("{name}").join(_valuel.title);
                    _code = (_valuel.installments != undefined) ? _code.split("{installments}").join(_valuel.installments) : _code.split("{installments}").join("");
                    _code = (_valuel.installments_price != undefined) ? _code.split("{installments_price}").join(_valuel.installments_price.toString().sbNumberFormat()) : _code.split("{installments_price}").join("");
                    _code = (_valuel.normal_price != undefined) ? _code.split("{old_price}").join(_valuel.normal_price.toString().sbNumberFormat()) : _code.split("{old_price}").join("");
                    _code = (_valuel.price != undefined) ? _code.split("{price}").join(_valuel.price.toString().sbNumberFormat()) : _code.split("{price}").join("");

                    _template.html(_code).css("opacity", "0").on('click', function(_evt){

                        redirectTo(_valuel.link);

                    });
                    
                    _target.append(_template);

                });     

                _target.children().each(function(){

                    var _el = $(this);
                    _timer += 200;

                    setTimeout(function(){

                        _el.stop().animate({

                            opacity: "1"

                        }, 180);

                    }, _timer);

                });

            },

            getHistory = function(_target){

                if(!$HISTORY){

                    $HISTORY = true;

                    top.shopback.getLastViewed(function(_products){

                        _target.html("");

                        $("#counter-h").prop('Counter', 0).animate({
                            Counter: _products.data.length
                        }, {
                            duration: 300,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });

                        if(_products.data.length == 0 || _products.data === false){

                            $(".tab-history").html("<h3 class='not-found'>Você ainda não visitou nenhum produto, em nossa loja.</h3>")

                        }else{

                            makeTheBoxes(Array.from(_products.data), _target);
                            
                        }

                    });

                }


            },

            getProducts = function(_params, _target){

                top.shopback.getRecommendations(_params, function(_products, _err) {
                    _target.html("");

                    $("#counter-r").prop('Counter', 0).animate({
                        Counter: _products.data.length
                    }, {
                        duration: 300,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });

                    makeTheBoxes(Array.from(_products.data), _target);

                });

            },

            getSearch = function(_search){

                $.get('https://api.shopback.net/clients/' + $CLIID + '/products_search?limit=10&keyword=' + _search, function(_products) {

                    var _data = _products.data;

                    $(".tab-search").html("");

                    if(_data.length == 0){

                        $(".tab-search").html("<h3 class='not-found'>Nenhum Resultado para sua pesquisa, foi encontrado.</h3>")

                    }else{

                        makeTheBoxes(Array.from(_data), $(".tab-search"));

                    }

                }).fail(function(){

                    $(".tab-search").html("<h3 class='not-found'>Nenhum Resultado para sua pesquisa, foi encontrado.</h3>")

                });

            },

            animateToggleVitrine = function(){

                $("body", __SCOPE).css({

                    position: "relative"

                });

                if(!$RECOMENDACAO){
                    
                    if(!$HISTORY){
                    
                        getProducts({}, $(".tab-recomendation"));
                        getHistory($(".tab-history"));

                    }

                    $RECOMENDACAO = true;

                }

                if(!$ACTIVATED){

                    if(mobileAndTabletcheck()){

                        $FRAME.css({
                            height: '100%',
                            width: '100%',
                            right: '0',
                            bottom: '0'
                        });

                    }else{

                        if($BTN_IS_MOB){

                            $FRAME.css({
                                height: styleDekMob.height,
                                width: styleDekMob.width,
                                right: '0',
                                bottom: '0'
                            });

                        }else{

                            $FRAME.animate({

                                right: '0'

                            });

                        }

                    }

                    $VITRINE.addClass("vitrine-active");
                    $POWER.addClass("active");
                    $ACTIVATED = true;


                }else{

                    if(mobileAndTabletcheck()){

                        $FRAME.css({

                            height: styleMob.height,
                            width: styleMob.width,
                            right: styleMob.right,
                            bottom: styleMob.bottom,
                            left: 'inherit'

                        });

                    }else{

                        if($BTN_IS_MOB){

                            $FRAME.css({

                                height: styleMob.height,
                                width: styleMob.width,
                                right: styleMob.right,
                                bottom: styleMob.bottom,
                                left: 'inherit'

                            });

                        }else{
                            $FRAME.animate({

                                right: style.right,
                                left: 'inherit'

                            });
                        }

                    }

                    $VITRINE.removeClass("vitrine-active");
                    $POWER.removeClass("active");
                    $ACTIVATED = false;

                }


            },
            showVitrine = function(){

                if(!$VIEW){

                    $VIEW = true;
                    top.spl.view($ID);

                }

                animateToggleVitrine();

            };

            $CLOSE.click(function(){
                if($ACTIVATED){

                    $VITRINE.removeClass("vitrine-active");
                    $POWER.removeClass("active");
                    $ACTIVATED = false;
                    
                    if(mobileAndTabletcheck() || $BTN_IS_MOB){
                        setTimeout(function(){
                            $FRAME.css({

                                height: styleMob.height,
                                width: styleMob.width,
                                right: styleMob.right,
                                bottom: styleMob.bottom

                            });
                        }, 500);
                    }

                }
            });

            $CHANGESCREENS.click(function(){

                markConversion(window.top.location.href);

                var _scope = '.' + $(this).attr("data-tab");

                $(this).addClass("tab-active").siblings().removeClass("tab-active");

                $(".collumns").fadeOut(function(){
                    $(".collumns").removeClass("collumns-active").hide();
                    $(_scope).addClass("collumns-active").fadeIn().css({opacity: 1});
                });

                if($SEARCH_SHOW){
                    $(".search").removeClass("search-active");
                    $SEARCH_SHOW = false;
                }

            });

            $SEARCH_TRIGGER.click(function(){

                if(!$SEARCH_SHOW){

                    $(".search").addClass("search-active");
                    $SEARCH_SHOW = true;

                }else{

                    $(".search").removeClass("search-active");
                    $SEARCH_SHOW = false;

                }

            });

            $RESET_SEARCH.click(function(_evt){

                $(this).animate({

                    opacity: "0"

                }, 100, function(){

                    $(this).css("display", "none");

                    $(".input-search").removeClass("active");
                    $SEARCH_SHOW = false;

                    $(".section-banner").animate({

                        height: "493px"

                    }, 120, function(){

                        $(".tab-search").stop().animate({

                            opacity: "0"

                        }, 20, function(){

                            $(".tab-search").css({

                                display: "none"

                            });

                            $(".tab-recomendation, .tab-history").css("display", "inline-block").animate({

                                opacity: "1"

                            }, 100, function(){

                                $SEARCH_STATUS = false;

                                $(".tab-search").html('<div class="loading"><span class="loader"></span></div>');

                            });

                        });

                    });


                });

            });

            $SEARCH.keyup(function(){

                markConversion(window.top.location.href);

                if(!$SEARCH_STATUS){

                    $SEARCH_STATUS = true;
                    $RESET_SEARCH.css("display", "block").animate({

                        opacity: "1"

                    }, 120);

                    $(".section-banner").animate({

                        height: "0"

                    }, 120);

                    $(".section-recommendacao").css("position", "relative").stop().animate({

                        left: "0px"

                    }, 120);

                    $(".tab-recomendation, .tab-history").animate({

                        opacity: "0"

                    }, 120, function(){

                        $(".tab-recomendation, .tab-history").css("display", "none");

                        $(".tab-search").css("display", "block").stop().animate({

                            opacity: "1"

                        }, 120);

                    });

                }

                getSearch($(this).val().trim());

            });

            $POWER.click(showVitrine);

            $JSLINK.click(function(){

                var link = $(this).attr('data-url');

                redirectTo(link);
            
            });

        checkMobile();

        String.prototype.sbNumberFormat = function() {
          var n = this,
            hasPoint = (/(\.)+/.test(this)) ? true : false;

          if (hasPoint) {
            var int = n.split(".")[0],
              c = n.split(".")[1];
            n = int;
          } else {
            c = "00";
          }

          n = (typeof n == "string") ? n.replace(",", "") : n.toString();
          L = n.length % 3;

          var newValue = false,
            loop = "";

          if (n.toString().length > 3) {
            if (L > 0) {
              newValue = n.substring('0', L);
            } else {
              newValue = "";
            }

            loop = n.substring(L, n.length).length / 3;

            for (var i = 0; i < loop; i++) {
              if (L > 0 || i > 0) {
                newValue += ".";
              }
              newValue += n.substring((L + (i * 3)), (L + (i * 3) + 3));
            }
          } else {
            newValue = n;
          }

          if (c.length == 2 && parseInt(c) > 0) {
            newValue += "," + c;
          } else if (c.length > 2 && parseInt(c) > 0) {
            newValue += "," + c.substring('0', '2');
          } else if (c.length > 0 && parseInt(c) > 0) {
            newValue += "," + c + "0";
          } else {
            newValue += ",00";
          }
          return newValue;
        };