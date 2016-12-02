$(document).ready(function(){

    //Swaps 'down arrow' icon and 'close icon'
    $('.web-news-open-button').click(function() {
        $('.web-news-open-button').toggleClass('web-news-close-button web-news-open-button');
    });

    $('.web-news-open-button').click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".web-events-content-box").slideToggle('fast');
        $(".web-action-content-box").slideToggle('fast');
        $(".web-emergency-content-box").slideToggle('fast');
        $(".web-news-title-container").css( "border-radius", "4px" );
        $(".web-news-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".status-bar").hide();
        $(function() {
            $("#map").googleMap();
            $("#map").addMarker({
                address: "101 Montgomery Ave. San Francisco, CA USA", // Postale Address
                icon: './images/map_dot.png'
            });
        })
    });

    $('.web-news-close-button').click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".web-events-content-box").slideToggle('fast');
        $(".web-action-content-box").slideToggle('fast');
        $(".web-emergency-content-box").slideToggle('fast');
        $(".web-news-title-container").css( "border-radius", "4px" );
        $(".web-news-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(".web-news-container").effect( "slide" );
        $(".status-bar").hide();
        $(".new-stack").hide();
    });

    //'Open' button: Opens truncated card in stack, hide 'open' and 'dismiss', swaps 'down arrow' button to close button
    $("button.open-button").click(function(){
        $(".web-content-box").slideToggle('fast');
        $(".web-events-content-box").slideToggle('fast');
        $(".web-action-content-box").slideToggle('fast');
        $(".web-emergency-content-box").slideToggle('fast');
        $(".status-bar").hide();
        $('.web-news-open-button').toggleClass('web-news-close-button web-news-open-button');
        $(".web-news-title-container").css( "border-radius", "4px" );
        $(".web-news-title-container").css( "margin", "14px" );
        $("h2").css( "width", "380px" );
        $(function() {
            $("#map").googleMap();
            $("#map").addMarker({
                address: "101 Montgomery Ave. San Francisco, CA USA", // Postale Address
                icon: './images/map_dot.png'
            });
        })
    });


console.log("It WORKS!!!")

});
