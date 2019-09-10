$(document).ready(function(){
    
    $('.case_list li').hover(function(){
        $(this).children('.details').toggle();
    });
    $('.case_list li').mouseenter(function(){
        $(this).css('background-size','120%');
    });
    $('.case_list li').mouseleave(function(){
        $(this).css('background-size','100%');
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
        $('#body-header').animatescroll({easing:'easeInQuad',animatescroll:8000,padding:20})
        console.log("有了");
    });


    $(function () {

        var filterList = {

            init: function () {

                // MixItUp plugin
                // http://mixitup.io
                $('#portfoliolist').mixitup({
                    targetSelector: '.portfolio',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap'
                });
            }
        };

        // Run the show!
        filterList.init();

    });

    $('#filters li span').click(function () {
        $('#filters li span').css('color','black');
        $(this).css('color','#3da9ff');
    });

});

