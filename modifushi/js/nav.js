$(document).ready(function(){
    window.onscroll = function () {
        let scrollTop=$(document).scrollTop();
        let ant=$(".topHead");
        let logo=$(".logo");
        let nav1=$(".nav1");

        if(scrollTop>=500){
            ant.slideDown();
            ant.addClass("navbar-fixed-top animated  fadeInDown");
          /*  logo.css("padding-top","0.6em");
            ant.css("padding-top","-1em");*/
          nav1.css("margin-top","-0.7em");
            ant.css("background","rgba(0,0,0,0.7)");
            logo.css("margin-top","0.2em");
        }
        else{
            ant.removeClass("navbar-fixed-top  animated fadeInDown");
          /*  ant.css("padding-top","0em");
            logo.css("padiing-top","0em");*/
            ant.css("background","rgba(0,0,0,1)");
            nav1.css("margin-top","0em");
            logo.css("margin-top","0.3em");

        }

    };
    nav1Slider();
});
function nav1Slider() {
    let $nav1 = $('.nav1'),
        $active = $('.nav1 li.active a'),
        $nav1Line = $('.nav1-line'),
        $anchor = $('a', $nav1.children()),//????
        activePosL = $active.position().left,
        activeW = $active.outerWidth(true),//包括margin在内的长
        activeIdx = $('li.active', $nav1).index();
  /*  console.log("$anchor=="+$anchor);
    console.log("activePosL=="+activePosL);
    console.log("activeIdx=="+activeIdx);*/
    $nav1Line.css({'width': activeW, 'left': activePosL});
    $anchor.not('li.last a', $nav1).each(function (index) {
        let posL = $(this).position().left,
            w = $(this).outerWidth(true);
    /*    console.log("posL=="+posL);
        console.log("w=="+w);*/
        $(this).mouseover(function () {
            $(this).parent().addClass("animated pulse");
            $(this).siblings().removeClass("pulse");
        /*    console.log("posL=="+posL);
            console.log("w=="+w);*/
            $nav1Line.animate({'width': w, 'left': posL}, 250);
            $(this).parent().addClass('active').siblings().removeClass('active');
        });
        $(this).mouseout(function () {
            $(this).parent().parent().find("li").removeClass("animated pulse");
        });
    });
    $nav1.mouseleave(function () {
        /*$(this).find("li").removeClass("animated pulse");*/
        $nav1Line.animate({'width': activeW, 'left': activePosL}, 250);
        $anchor.parent(':eq(' + activeIdx + ')').addClass('active').siblings().removeClass('active');
    });
}


