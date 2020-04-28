# FACEBOOK Biblioteca
***
A Biblioteca `Facebook`, vem com o intuíto de facilitar a interação das peças de **ShopConvert** com o facebook.

> **Primeira configurações**
* Chamando Biblioteca, `<script type="text/javascript" src="https://shopbackbr.github.io/ShopTemplate/assets/libs/facebook/facebook.plugin.0.0.1.js" ></script>`, emplemente este script abaixo no final do seu HTML.
* Execute em sue script, o objeto `Facebook.ready(Aqui se segue o id do facebook para este cliente => Type: string)`.

> **Usando métodos disponíveis**
* `Facebook.checkUser`, essa função vem para válidar os usuários segundo o facebook.
EX:
```js
Facebook.ready('15cd156v1vv5dvd');
function userLogged(){
    if(Facebook.checkUser()){
        console.log("User are logged :);");
    }else{
        console.log("User not are logged :);");
    }
}
```

* `Facebook.getUser`, está função vem para capturar os dados disponibilizados pela api do facebook, uma vez que o usuário esteja logado no aplicátivo do cliente.
**Obs:** _Caso o usuário não esteja logado no facebook, ou no app do cliente, a função retornara um `Boolean false`._
```js

Facebook.ready('15cd156v1vv5dvd');
function userLogged(){
    if(Facebook.checkUser()){
        console.log("User are logged :);");
    }else{
        Facebook.getUser(function(_response){
            //Aqui se segue o callback.
            console.log(_response);
            //Este console, retornara o seguinte JSON:
            //{
               //"name": "Mizael Job",
               //"gender": "male",
               //"first_name": "Mizael",
               //"link": "https://www.facebook.com/app_scoped_user_id/348119765638466/",
               //"locale": "pt_BR",
               //"age_range": {
                //  "min": 21
               //},
               //"id": "348119765638466"
            //}
        });
    }
}
```

* `Facebook.login`, está função, terá o objetivo de efetuar o login do usuário no appId do cliente, _basicamente uma versão mais maleável do_ `connect()` _que usamos nos overlays sociais._
```js

Facebook.ready('15cd156v1vv5dvd');
function userLogged(){
    if(Facebook.checkUser()){
        console.log("User are logged :);");
    }else{
        Facebook.login(function(_response){
            //Aqui se segue o callback.
            console.log(_response);
            //Este console, retornara o seguinte JSON:
            //{
            //    authResponse: {
            //      accessToken: "EAAFD94B5hCABAE41UEIe9L50Pr1P4RveTbZBfR0..."
            //      expiresIn: 5241
            //      signedRequest:"uEvbq3ZFlV_nFyAXyZkKM.."
            //      userID: "348119765638466"
            //   },
            //   status:"connected"
            //}
        });
    }
}
```
    
    