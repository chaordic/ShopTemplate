    // FUNÇÂO PUSH
    $(".js-decline").click(function(){
        $(".footer--recomendacao").stop().animate({
          opacity: "0"
        }, 220, function(){
          $(".footer--recomendacao").css("display", "none");
          $(".btn--close").attr("onclick", "top.spl.close();top.spl.redirect();");
        });
      });
  
      //if( typeof window.top.shopback.showPushRequest == "undefined"){
        //$(".footer--recomendacao").hide();
      //}
  
      $(".js-accept").click(function(){
        if( typeof window.top.shopback.showPushRequest != "undefined"){
          window.top.shopback.showPushRequest();
        }
  
        $(".section--facebook").stop().animate({
          opacity: "0"
        }, 220, function(){
            $(".section--facebook").css("display", "none");
            $(".js-thanks").css("display", "block").animate({
              opacity: "1"
            }, 120);
                $(".btn--close").attr("onclick", "top.spl.close();top.spl.redirect();");
        });
      });
      // FIM FUNÇÂO PUSH
  