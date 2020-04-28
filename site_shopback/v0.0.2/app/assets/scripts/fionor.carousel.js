var $fionorCarousel = {},
    Fionor = function(){

      return $fionorCarousel;

    };

      $fionorCarousel.cloneOrder = 0;
      $fionorCarousel.prev = function(){

            var __target = this.target,
                __time = this.config.timeTransition,
                __metrics = this.metrics,
                __pos = this.indPos,
                __items = this.items;
                this.indPos += 1;

            var _clone = $(__items[this.cloneOrder]).clone();
            this.cloneOrder += 1;
                  _clone.addClass("clone").css("left", ( parseInt(__metrics.large) + ( parseInt(__metrics.default) * (this.config.number - 1))));
                  __target.append(_clone);
            __items = Array.from(__target.children());
            __items.forEach(function(_val, _ind){

                  var _item = $(_val),
                      _translate = _item.data('width');

                  if(_ind + 1 != __pos){

                        if(_ind + 1 == __pos + 1){

                              _item.animate({

                                    width: __metrics.large,
                                    left: (parseInt(_item.css('left')) - __metrics.large) + "px"

                              }, __time).attr("data-width", __metrics.large);

                        }else{

                              _item.animate({

                                    left: (parseInt(_item.css('left')) - _translate) + "px"

                              }, __time);

                        }

                  }else{

                        var _nTop,
                            _tTop;

                        if($(__items[_ind + 1]).length > 0){

                              _nTop = $(__items[_ind + 1]).css("margin-top");
                              _tTop = _item.css("margin-top");

                        }else{

                              _nTop = _tTop = _item.css("margin-top");

                        }

                        $(__items[_ind + 1]).css({"margin-top": _tTop});
                        _item.animate({

                              left: (parseInt(_item.css('left')) - __metrics.default) + "px",
                              width: __metrics.default,
                              "margin-top": _nTop

                        }, __time).attr("data-width", __metrics.default);

                  }

            });

            this.items = Array.from(this.target.children());

      };

      $fionorCarousel.next = function(){

          

      };

      $fionorCarousel.defineMetrics = function(){

            this.target.addClass("fionor-carousel");

            var _childs = Array.from(this.target.children()),
                  _number = this.config.number,
                  _pSet = this.config.pictureSet,
                  _target = this.target,
                  _defaultWidth = Math.floor(this.target.innerWidth() / _number),
                  __left = 0;
            _childs.forEach(function(_val, _ind){


                  $(_val).addClass("fionor__item");

                  if(_pSet != (_ind + 1)){

                        $(_val).css("width", (_defaultWidth * 0.95).toFixed(0)).attr("data-width",(_defaultWidth * 0.95).toFixed(0));

                  }else{

                        $(_val).css("width", (_defaultWidth + ((_defaultWidth * 0.05) * _number)).toFixed(0)).attr("data-width",(_defaultWidth + ((_defaultWidth * 0.05) * _number)).toFixed(0));

                  }

                  $(_val).css("margin-top", "-" + Math.floor($(_val).innerHeight()/2) + "px");

                  if(_ind > 0){
                        __left += $('.fionor__item', _target).eq(_ind - 1).data('width');
                        $(_val).css("left", __left);

                  }else{

                        $(_val).css("left", 0);

                  }

            });

            this.metrics = {

                  "default": (_defaultWidth * 0.95).toFixed(0),
                  "large": (_defaultWidth + ((_defaultWidth * 0.05) * _number)).toFixed(0)

            };

            this.items = _childs;
            this.indPos = this.config.pictureSet;

      };

      $fionorCarousel.run = function(){

            this.defineMetrics();
            var __instance = this;
            this.config.prevSet.on("click",function(){

                 __instance.prev();

            });

            this.config.nextSet.on("click",function(){

                 __instance.next();

            });

      };
      
      $fionorCarousel.construct = function(_target, _config = {}){

            this.target = $(_target);

            $fionorCarousel.config = $.extend({

                  number: 4,
                  pictureSet: 1,
                  nextSet: $($(_target).data('next')),
                  prevSet: $($(_target).data('prev')),
                  timeTransition: 250

            }, _config);

            this.run();

      };

      