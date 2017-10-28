/*
 * jQuery SelectBox Styler v1.0.1
 * http://dimox.name/styling-select-boxes-using-jquery-css/
 *
 * Copyright 2012 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2012.10.07
 *
 */
!function(e){e.fn.selectbox=function(){e(this).each(function(){function t(){var t=s.find("option"),o=t.filter(":selected"),l=t.filter(":first").text();o.length&&(l=o.text());var d="";for(i=0;i<t.length;i++){var c="",n=' class="disabled"';t.eq(i).is(":selected")&&(c=' class="selected sel"'),t.eq(i).is(":disabled")&&(c=n),d+="<li"+c+">"+t.eq(i).text()+"</li>"}var a=e('<div class="selectbox" style="display:inline-block;position:relative"><div class="select" style="float:left;position:relative;"><div class="text">'+l+'</div><b class="trigger"><i class="arrow"></i></b></div><div class="dropdown" style="position:absolute;overflow:auto;overflow-x:hidden;list-style:none"><ul>'+d+"</ul></div></div>");s.before(a).css({position:"absolute",top:-9999, left:-9999});var r=a.find("div.select"),f=a.find("div.text"),h=a.find("div.dropdown"),u=h.find("li"),v=a.outerHeight();"auto"==h.css("left")&&h.css({left:0}),"auto"==h.css("top")&&h.css({top:v});var p=u.outerHeight(),b=v;r.width(h.outerWidth()),h.outerWidth(r.outerWidth()),h.hide(),r.click(function(){var t=a.offset().top,s=e(window).height()-v-(t-e(window).scrollTop());return 0>s||6*p>s?(h.height("auto").css({top:"auto",bottom:b}),h.outerHeight()>t-e(window).scrollTop()-20&&h.height(Math.floor((t-e(window).scrollTop()-20)/p)*p)):s>6*p&&(h.height("auto").css({bottom:"auto",top:b}),h.outerHeight()>s-20&&h.height(Math.floor((s-20)/p)*p)),h.is(":hidden")?(e("div.dropdown:visible").hide(),h.show()):h.hide(),!1}),u.hover(function(){e(this).siblings().removeClass("selected")});var g=u.filter(".selected").text();u.filter(":not(.disabled)").click(function(){var i=e(this).text();g!=i&&(e(this).addClass("selected sel").siblings().removeClass("selected sel"),t.prop("selected",false).eq(e(this).index()).prop("selected",!0),g=i,f.text(i),s.change()),h.hide()}),h.mouseout(function(){h.find("li.sel").addClass("selected")}),s.focus(function(){e("span.selectbox").removeClass("focused"),a.addClass("focused")}).keyup(function(){f.text(t.filter(":selected").text()),u.removeClass("selected sel").eq(t.filter(":selected").index()).addClass("selected sel")}),e(document).on("click",function(t){e(t.target).parents().hasClass("selectbox")||(h.hide().find("li.sel").addClass("selected"),a.removeClass("focused"))})}var s=e(this);s.prev("span.selectbox").length<1&&(t(),s.on("refresh",function(){s.prev().remove(),t()}))})}}(jQuery);


function getSelected(element,parent) {
    var option = (typeof element == 'string') ? $(element+" option:first-child",parent) : $("option:first-child",element);
    

    $(element,parent).find("option").each(function() {
        if($(this).attr("selected") === "selected") {
            option = $(this);
            return false;
        }
       
    });

    return option;
}

$(function() {
  
    $('select:visible').selectbox();
    

    
    
//    $('.nav > li').hover(function() {
//        $(this).find('.nav__popup').stop().fadeToggle('fast');
//    });
    
    // выравнивание высоы попапов главного меню
   
//    $('.nav__popup').each(function() {
//        var $this = $(this);
//        $this.css({
//            'display': 'block',
//            'z-index': -3,
//            'visibility': 'hidden'
//        })
//        var $unit = $this.find('.nav__unit');
//        var bd_max_height = 0;    
//        for(var i = 0; i<$unit.length; i++) {
//            if ($unit.eq(i).outerHeight() > bd_max_height) {
//                bd_max_height = $unit.eq(i).outerHeight();
//            }
//        }
//        $unit.outerHeight(bd_max_height);
//        $this.css({
//            'display': 'none',
//            'z-index': 2,
//            'visibility': 'visible'
//        })
//    });
    
    $('.call-back').click(function(e) {
        e.stopPropagation();
        centralize($('.popup_call'))
    });
    
    /*$('.btn_click').parent().on('click', '.btn_click',function(e) {
        e.stopPropagation();
        e.preventDefault();
        centralize($('.popup_click'))
    });
    
    $('.btn_cart').on('click', function(e) {
        e.stopPropagation();
        centralize($('.popup_cart'))
    });*/
    
    $('.popup').click(function(e) {e.stopPropagation()});
    
    $('.popup .fa-close, .btn_close').add(document).click(function() {
        $('.popup').fadeOut('fast');
    });
    
    $('.block_toggle .block_header').click(function() {
        $(this).toggleClass('block_header_hide')
        .next('.block__in').slideToggle('fast');
    });
    
    $('.col-left .input-title').click(function() {
        $(this).toggleClass('input-title_hide')
        .next('.shop_unit').slideToggle('fast');
    });
    

    $('.catalog__item').hover(function() {
        var _this = $(this),
            init = _this.attr('data-init');


        if (!init) {

            var content = _this.html();
            _this.append('<div class="catalog__popup">' + content + '</div>');

        }

        _this.find('.catalog__popup').fadeIn(
            'fast',
            function() {
                if (!init) {
                    $('select:visible', _this).selectbox();
                    _this.attr('data-init', 'true');
                }
            });

    }, function() {
        var _this = $(this),
            init = _this.attr('data-init');
            
        if (init) {
            $(".js_shop_form", _this).each(function() {
                $(this).replaceWith($(".catalog__popup .js_shop_form", _this).clone());
                return false;
            });

            _this.find('.catalog__popup').hide();
        }
    });
    
    $('.pics__mini').click(function(e) {
        e.preventDefault();
        $('.pics__mini').removeClass('pics__mini_active');
        $(this).addClass('pics__mini_active');
        
        $('.pics__big').hide();
        $('.pics__big[data-id="'+$(this).attr('data-id')+'"]').show();
    });
    
    $('.js-map').click(function (e) {
       var map = $("div.map");
       if(!map || map.length == 0) return true;
       
       e.preventDefault();
        
        $('body, html').animate({
            scrollTop: (map.offset().top),
        }, 700, function() {
            var map_hidden = $("div.map__hidden");
            if(map_hidden && map_hidden.length > 0) {
                map_hidden.show();
                if(!map_hidden.hasClass("active")) { map_hidden.addClass("active"); }            
                $('body, html').animate({ 
                    scrollTop: (map.offset().top) 
                    }, {
                    duration: 1000,
                    step: function() {  
                        
                        $('#wrapper').css({
                            'padding-bottom': ($('.footer').outerHeight()) + 'px'
                        }); 
                    }
                });
            }
        });
        
    });
    
  
    
    
    
    $("#sort__select").change(function() {
       var href = $(":selected",this).attr("data-href");
       if(href) self.location.href = href;
        
    })
    
    toggleTabs($('.tabs__item'))
});

$(window).load(function() { 
    
    if(!$(".col-left > *").length) {
        $(".col-left").next(".col-right").removeClass("col-right");
        $(".col-left").remove();
        
    }
    
   
    
    $("#wrapper").append($(".popup"));
    
       $('#wrapper').css({
        'padding-bottom': ($('.footer').outerHeight()) + 'px'
    });

});


// функция центрирует по высоте передоваемый ей элемент и показывает его
function centralize(elem) {
    elem.fadeIn('fast');
    var diff = ($(window).height() - elem.outerHeight());
    
    if(diff < 0 ) diff = 20;
    
    var elem_top = $(document).scrollTop() + ( diff /2);
    elem.css('top', elem_top);
};

// перемещение по табам
function toggleTabs(elem) {
	$(elem).click(function(e) {
        e.preventDefault()
		$(elem).removeClass('active')
		
		$('[class*=tab-]').hide();
		$($(this).addClass('active').attr('href')).show();
	});
};