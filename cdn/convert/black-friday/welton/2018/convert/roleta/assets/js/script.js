var $ID = top.spl.cid,
    $FRAME = $("#f-content-"+$ID, window.top.document);

    function getRandomCupom(min, max) {

        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    function close() {
        $(".is-show").addClass("is-hidden").removeClass("is-show");
        setTimeout(function () {
            top.spl.close();
        }, 980)
    }
    
    function show() {
        $(".is-hidden").addClass("is-show").removeClass("is-hidden");
    }

    function rotate(_op) {
        var _roleta = $(".js-carosel"),
            _laps = 360 * 9,
            _ops = Math.floor(360/8) * _op,
            _result = _laps - _ops;
        $(".js-percent").html($(".js-percent").html().split("{percent}").join($Cupons[_op].percent));
        $(".js-code").html($Cupons[_op].code);
        $(".js-stoped").animate({
            bottom: "-500px"
        }, 110, function () {
            $(".js-running").css({
                bottom: "-500px"
            }).removeClass("is-hide").animate({
                bottom: "0"
            }, 110);
        });
        _roleta.css({
            "transform": "rotateZ("+_result+"deg)"
        });

        setTimeout(function () {
            $(".c-trapezio", $(".c-item").eq(_op)).addClass("jello-diagonal-1");
            $(".c-trapezio", $(".c-block .c-item").eq(_op)).addClass("jello-diagonal-1");
            $(".js-running").animate({
                bottom: "-500px"
            }, 110, function () {
                $(".js-stoped").css({
                    bottom: "-500px"
                }).removeClass("is-hide").animate({
                    bottom: "0"
                }, 110);
            });
            showCupom(_op);
        }, 830)
    }

    function showCupom(_op){
        var _form = $(".js-form"),
            _cupom = $(".js-cupom");

        _form.addClass("is-breaked");
        setTimeout(function () {
            _form.animate({
                opacity: "0"
            }, 280, function () {
                _form.hide();
                _cupom.css({
                    diplay: "block",
                    opacity: "0"
                }).removeClass("is-hide").animate({
                    opacity: "1"
                }, 220, function () {
                    $(this).addClass("is-animate")
                });
            });
        },240)
    }

    $(".js-close").click(close);