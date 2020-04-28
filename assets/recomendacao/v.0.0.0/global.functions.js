
window.redirectTo = (_link) => {

      top.spl.click_only(_link);
      top.spl.set_cookie('_spl_tr', top.spl.cid, 720);

      setTimeout(function(){

            window.top.location = top.spl.link_transform(_link);

      }, 800);

};
window.vercpf = (cpf) => {

              if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){

                  return false;

              }

            var add = 0;

              for (i = 0; i < 9; i++){

                  add += parseInt(cpf.charAt(i)) * (10 - i);
                  
              }

              var rev = 11 - (add % 11);
              if (rev == 10 || rev == 11)
                  rev = 0;
              if (rev != parseInt(cpf.charAt(9))){
                  return false;
              }

              add = 0;

              for (i = 0; i < 10; i++){

                  add += parseInt(cpf.charAt(i)) * (11 - i);
                  
              }
              rev = 11 - (add % 11);

              if (rev == 10 || rev == 11){

                  rev = 0;

              }

              if (rev != parseInt(cpf.charAt(10))){

                  return false;

              }

            return true;

    },

window.makecookie = (_object) => {

            var _now = new Date(),
                  _cookieName = _object.name,
                  _cookieExpires = new Date(_now.getTime() + _object.timer).toUTCString(),
                  _cookiePath = _object.path,
                  _cookieValue = _object.value;

            window.top.document.cookie = _cookieName + "="+_cookieValue+";expires="+_cookieExpires+";path="+_cookiePath+";";

            return true;

      };

Array.prototype.toRemove = function(_k){

      var _tmp = [];

      this.forEach(function(_v, _ind){

            if(_v != _k){

                  _tmp.push(_v);

            }

      });

      return _tmp;

};

String.prototype.sbNumberFormat = function(){
      var n              = this,
            hasPoint = (/(\.)+/.test(this)) ? true : false;

      if(hasPoint){
            var int = n.split(".")[0],
                  c   = n.split(".")[1];
                  n   = int;
      } else {
            c = "00";
      }

      n = (typeof n == "string") ? n.replace(",","") : n.toString();
      L = n.length % 3;

      var newValue = false,
            loop   = "";

      if(n.toString().length > 3){
            if(L > 0){
                  newValue = n.substring('0', L);
            } else {
                  newValue = "";
            }

            loop = n.substring(L, n.length).length / 3;

            for (var i = 0; i < loop; i++) {
                  if(L > 0 || i > 0){
                        newValue += ".";    
                  }
                  newValue += n.substring((L + (i * 3)), (L + (i * 3) + 3)); 
            }
      } else {
            newValue = n;
      }

      if(c.length == 2 && parseInt(c) > 0) {
            newValue += ","+c;
      } else if (c.length > 2 && parseInt(c) > 0) {
            newValue += ","+c.substring('0','2');
      } else if (c.length > 0 && parseInt(c) > 0) {
            newValue += ","+c+"0";
      } else {
            newValue += ",00";
      }
      return newValue;
};

window.activateFunction = () => {

      $(`[or-click-redirect]`).click(function(){

            let _link = $(this).attr(`or-click-redirect`);
            window.redirectTo(_link);


      });

      $(`.js-close`).click(() => {

            top.spl.close();
            if(window.connect === true){

                  top.spl.redirect();

            }

      });

};
