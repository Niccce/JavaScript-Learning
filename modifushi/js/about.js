"use strict";
$(document).ready(function(){
    $('.col-md-3').hover(function(){
        $(this).children('img').toggleClass('animated pulse');
    });
});