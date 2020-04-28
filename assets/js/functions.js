var close = function close() {
  window.top.spl.close()
}

var redirect = function redirect(link, utms) {

  var _link = link,
    _hash = "",
    _utms = utms;

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

  for (var _utm in _utms) {

    _link += _utm + "=" + _utms[_utm] + "&"

  }

  _link = _link.replace(/(\&)$/g, "") + _hash;

  window.top.spl.click_only(_link);
  window.top.spl.set_cookie('_spl_tr', window.top.spl.cid, 720);

  setTimeout(function () {

    window.top.location = _link;

  }, 800);

}

var generateImpression = function generateImpression(idCampaign) {
  window.top.spl.view(idCampaign)
}

var stopShowCustomization = function stopShowCustomization(idCampaign) {
  window.top.spl.cid_views = idCampaign;
  window.top.spl.close_views();
}
