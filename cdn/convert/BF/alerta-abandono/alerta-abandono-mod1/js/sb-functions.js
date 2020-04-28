// FUNÇÂO INCLUSÂO DA UTM
top.spl.link_transform = function(_link, _utmsRedirect) {
    var _hash = "",
        _utms = _utmsRedirect;

        if (/(\?)+/.test(_link)) {
          _link += "&";
        } else {
          _link += "?";
        }

        for (_utm in _utms) {
          _link += _utm + "=" + _utms[_utm] + "&"
        }

        _link = _link.replace(/(\&)$/g, "") + _hash;

        return _link;
  };

  top.spl.redirect = function(_utmsRedirect) {
    var _link = window.top.location.href,
        _hash = "",
        _utms = _utmsRedirect;

        if (/(\#)+/.test(_link)) {
          _link = _link.split("#");
          _hash = "#" + _link[1],
          _link = _link[0];
        }


        if (/(\?)+/.test(_link)) {
          _link += "&";
        } else {
          _link += "?";
        }


        for (_utm in _utms) {
          _link += _utm + "=" + _utms[_utm] + "&"
        }


        _link = _link.replace(/(\&)$/g, "") + _hash;


        top.spl.click_only(_link);
        top.spl.set_cookie('_spl_tr', top.spl.cid, 720);


        setTimeout(function() {
            top.location = _link;
        }, 800);

  };
  // FIM DA FUNÇÂO INCLUSÂO DA UTM