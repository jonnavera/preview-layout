$(document).ready(function(){

    //'Down arrow' button: toggles story opened and closed, hide 'open' and 'dismiss', append truncated card to timeline, hide 'stack image'
    $("#web-news-button").click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".status-bar").hide();
        $(".new-stack").hide();
        $(".web-container").appendTo( $( ".timeline" ) ).fadeIn('slow');
        $(".stack-image").fadeOut(50);
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
    });

    //Swaps 'down arrow' icon and 'close icon'
        $('#web-news-button').click(function() {
        $('#web-news-button').toggleClass('web-news-close-button web-news-open-button');
    });



    //'Close' button: hide 'open' and 'dismiss', append truncated card to timeline, fade from stack, hide 'stack image'
    $("button.dismiss-button").click(function(){
        $(".status-bar").hide();
        $(".web-container").fadeOut(500);
        $(".stack-image").fadeOut(500);
        $(".new-stack").fadeOut(500);
        $(".web-container").appendTo( $( ".timeline" ) );
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".web-container").effect( "slide", "fast" );
    });

    //'Open' button: Opens truncated card in stack, hide 'open' and 'dismiss', swaps 'down arrow' button to close button
    $("button.open-button").click(function(){
        $(".web-container").appendTo( $( ".timeline" ) );
        $(".web-content-box").slideToggle('fast');
        $(".status-bar").hide();
        $('#web-news-button').toggleClass('web-news-close-button web-news-open-button');
        $(".web-title-container").css( "border-radius", "4px" );
        $(".web-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
    });


console.log("It WORKS!!!")

});
