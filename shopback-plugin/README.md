# ShopBack Plugin

__Overlay Shopback - Criação e funcionalidades.__


### LOAD JQUERY & Bibliotecas default

```javascript
// Jquery Load
  (function () {
    var ss = document.createElement('script');
    ss.type = 'text/javascript';
    ss.async = false;
    ss.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
    var sc = document.getElementsByTagName('script')[0];
    sc.parentNode.insertBefore(ss, sc);
  })();
```

```javascript
// Jquery Migrate Load
  (function () {
    var ss = document.createElement('script');
    ss.type = 'text/javascript';
    ss.async = false;
    ss.src = 'https://cdn.jsdelivr.net/jquery.migrate/1.4.1/jquery-migrate.min.js';
    var sc = document.getElementsByTagName('script')[0];
    sc.parentNode.insertBefore(ss, sc);
  })();
```

```javascript
// Slick Carrossel Load
  (function () {
    var ss = document.createElement('script');
    ss.type = 'text/javascript';
    ss.async = false;
    ss.src = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js';
    var sc = document.getElementsByTagName('script')[1];
    sc.parentNode.insertBefore(ss, sc);
  })();
```

```javascript
//Objeto [S]hop[B]ack
  var SB = {},
    force = false,
    forceShopConvertAjax = false;
```
