"use strict";
$(document).ready(function(){

    $('.more').hover(function(){
        $(this).toggleClass('animated slideInRight');
        $(this).children('.h4').toggle();
    })

    $('.product').hover(function(){
        $('h3').toggleClass('animated rotateInDownLeft');
        $('.product .btn').toggleClass('animated fadeInRight')
    });

    $('.nurse').hover(function(){
        $('.nurse-content').toggleClass('animated fadeIn');
        $('.nurse-content').toggle();
    });

    $('.man-suits').hover(function(){
        $('.man-suits-content').toggleClass('animated fadeIn');
        $('.man-suits-content').toggle();
    });
    
    $('.man-woman').hover(function(){
        $('.man-woman-content').toggleClass('animated fadeIn');
        $('.man-woman-content').toggle();
    });

    // $('.step-box').hover(function(){
    //     $(this).toggleClass('animated pulse');
    // })



    $('.step-box').hover(function(){
        $(this).children('.fa-cloud-upload').toggleClass('blue-color');
        $(this).children('.fa-paint-brush').toggleClass('paint-color');
        $(this).children('.fa-file-text-o').toggleClass('file-color');
        $(this).children('.fa-credit-card').toggleClass('card-color');
        $(this).children('.fa-check-circle').toggleClass('text-success');
    });

    $(window).scroll(function () {
        let scrollTop=$(document).scrollTop();
        let ant=$(".fadeButtom");
        if(scrollTop>=400){
            ant.css("display","block");
        }
    });
    $('body').animatescroll({easing:'easeInQuad',animatescroll:8000,padding:20});

    $('#btn-index-test').click(function(){
        $('#body-header').scrollTop(100);
        console.log("有了");
        $('#body-header').animatescroll({easing:'easeInQuad',animatescroll:8000,padding:20})
    });

    $(window).scroll(function(){
        var nowPos = $(document).scrollTop();
   
        if(nowPos > 400){
           $('.product').css('display','block').addClass('animated fadeIn');
        }

        if(nowPos > 1000){
           $('.brand-story').css('display','block').addClass('animated fadeIn');
        }

        if(nowPos > 1400){
           $('.step').css('display','block').addClass('animated fadeInLeft');
        }
        
        if(nowPos > 2000){
           $('.DIY-now').css('display','block').addClass('animated fadeInUp');
        }

    })

   

});