
iconSource: 'fontAwesome'

var frases_ativas = 8;

var frases = [];

frase = {

  'style' : 'success',

  'icon' : 'fa fa-flag-checkered',

  'msg' : '<b>25</b> Pessoas estão comprando <b>PhytoPower Caps</b> nesse momento'

};

frases.push(frase);
frase = {

  'style' : 'info',

  'icon' : 'fa fa-flag-checkered',

  'msg' : '<b>701</b> Pessoas compraram <b>PhytoPower Caps</b> essa semana'

};

frases.push(frase);
frase = {

  'style' : 'success',

  'icon' : 'fa fa-check-circle',

  'msg' : '<b>Arão</b> comprou <b>PhytoPower Caps</b>'

};

frases.push(frase);
frase = {

  'style' : 'success',

  'icon' : 'fa fa-check-circle',

  'msg' : '<b>Marcus</b> comprou <b>PhytoPower Caps</b>'

};

frases.push(frase);
frase = {

  'style' : 'success',

  'icon' : 'fa fa-check-circle',

  'msg' : '<b>Renata</b> comprou <b>PhytoPower Caps</b>'

};

frases.push(frase);
frase = {

  'style' : 'success',

  'icon' : 'fa fa-check-circle',

  'msg' : '<b>Fátima</b> comprou <b>PhytoPower Caps</b>'

};

frases.push(frase);
frase = {

  'style' : 'success',

  'icon' : 'fa fa-check-circle',

  'msg' : '<b>Elieuma</b> comprou <b>PhytoPower Caps</b>'

};

frases.push(frase);
frase = {

  'style' : 'success',

  'icon' : 'fa fa-check-circle',

  'msg' : '<b>adriana</b> comprou <b>PhytoPower Caps</b>'

};

frases.push(frase);

var frases_ = frases.slice(0);

setInterval(function(){

  if(frases_.length == 0){
                // frases_ = frases.slice(0);
              }

              id = Math.floor(Math.random()*frases_.length);

              frase = frases_[id];

              Lobibox.notify( 
                frase.style,{
                  size: 'mini',
                  width: 400,
                  messageHeight: 50,
                  icon: frase.icon,
                  delayIndicator: true,
                  position: 'bottom left',
                  msg: frase.msg,
                  delay: 10000 
                }
                );

              frases_.splice(id,1);

            },12000);



