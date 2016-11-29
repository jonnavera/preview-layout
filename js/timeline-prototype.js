$(document).ready(function(){

    //Swaps 'down arrow' icon and 'close icon'
    $('.web-news-open-button').click(function() {
        $('.web-news-open-button').toggleClass('web-news-close-button web-news-open-button');
    });

    $('.web-news-open-button').click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".web-container-1").appendTo( $( ".timeline" ) );
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".status-bar").hide();
    });

    $('.web-news-close-button').click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".web-container-1").appendTo( $( ".timeline" ) );
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".web-container-1").effect( "slide" );
        $(".status-bar").hide();
        $(".new-stack").hide();
    });


    //'Close' button: hide 'open' and 'dismiss', append truncated card to timeline, fade from stack, hide 'stack image'
    $("button.dismiss-button").click(function(){
        $(".status-bar-1").hide();
        $(".web-container-1").hide();
        //$(".new-stack").fadeOut(500);
        $(".web-container-1").appendTo( $( ".timeline" ) );
        $(".web-title-container-1").css( "border-radius", "4px" );
        $(".web-title-container-1").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".web-container-1").delay(500);
        $(".web-container-1").effect( "slide" );
        $(".web-container-2").fadeIn();
        $('.stack-image').attr('src','images/stack_artwork_2left.svg')
    });

    $("button.dismiss-button-2").click(function(){
        $(".status-bar-2").hide();
        $(".web-container-2").hide();
        //$(".new-stack").fadeOut(500);
        $(".web-container-2").appendTo( $( ".timeline" ) );
        $(".web-title-container-2").css( "border-radius", "4px" );
        $(".web-title-container-2").css( "margin", "14px" );
        $(".web-title-container-2").css( "margin-top", "0" );
        $("h2").css( "width", "380px" );
        $(".web-container-2").delay(500);
        $(".web-container-2").effect( "slide" );
        $(".web-container-3").fadeIn();
        $('.stack-image').attr('src','images/stack_artwork_1left.svg')
    });

    $("button.dismiss-button-3").click(function(){
        $(".status-bar-3").hide();
        $(".web-container-3").hide();
        //$(".new-stack").fadeOut(500);
        $(".web-container-3").appendTo( $( ".timeline" ) );
        $(".web-title-container-3").css( "border-radius", "4px" );
        $(".web-title-container-3").css( "margin", "14px" );
        $(".web-title-container-3").css( "margin-top", "0" );
        $("h2").css( "width", "380px" );
        $(".web-container-3").delay(500);
        $(".web-container-3").effect( "slide" );
        $('.stack-image').attr('src','images/stack_artwork_0.svg')
    });


    //'Open' button: Opens truncated card in stack, hide 'open' and 'dismiss', swaps 'down arrow' button to close button
    $("button.open-button").click(function(){
        $(".web-container-1").appendTo( $( ".timeline" ) );
        $(".web-content-box").slideToggle('fast');
        $(".status-bar").hide();
        $('.web-news-open-button').toggleClass('web-news-close-button web-news-open-button');
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
    });


console.log("It WORKS!!!")

});
