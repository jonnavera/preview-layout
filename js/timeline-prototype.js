$(document).ready(function(){


    //'Close' button: hide 'open' and 'dismiss', append truncated card to timeline, fade from stack, hide 'stack image'
    $("button.dismiss-button").click(function(){
        $(".web-container-1").hide( "drop", "fast", function() {
            $(".web-container-1").appendTo( $( "#unique-date-dummy-1" ));
            $(".status-bar-1").hide();
            $(".web-title-container-1").css( "border-radius", "4px" );
            $(".web-title-container-1").css( "margin", "14px" );
            $(".web-container-1").css( "top", "-18px" );
            $(".web-container-1").css( "left", "-16px" );
            $("h2").css( "width", "380px" );
            $(".web-container-1").delay(500);
            $(".web-container-1").effect( "slide", "swing" );
            $(".web-container-2").fadeIn();
            $('.stack-image').attr('src','images/stack_artwork_2left.svg')
            $("#unique-date-dummy-1").fadeIn(1000);
        });
    });

    $("button.dismiss-button-2").click(function(){
        $(".web-container-2").hide( "drop", "fast", function() {
            $(".status-bar-2").hide();
            $(".web-container-2").appendTo($("#unique-date-dummy-2"));
            $(".web-title-container-2").css("border-radius", "4px");
            $(".web-title-container-2").css("margin", "14px");
            $(".web-title-container-2").css("margin-top", "0");
            $(".web-container-2").css("left", "-16px");
            $("h2").css("width", "380px");
            $(".web-container-2").delay(500);
            $(".web-container-2").effect("slide");
            $(".web-container-3").fadeIn();
            $('.stack-image').attr('src', 'images/stack_artwork_1left.svg')
            $("#unique-date-dummy-2").fadeIn(1000);
        });
    });

    $("button.dismiss-button-3").click(function(){
        $(".web-container-3").hide( "drop", "fast", function() {
            $(".empty-stack").css("top", "0");
            $(".empty-stack").css("margin-top", "0");
            $(".status-bar-3").hide();
            $(".web-container-3").appendTo($("#unique-date-dummy-2"));
            $(".web-title-container-3").css("border-radius", "4px");
            $(".web-title-container-3").css("margin", "14px");
            $(".web-title-container-3").css("margin-top", "0");
            $(".web-container-3").css("left", "-16px");
            $("h2").css("width", "380px");
            $(".web-container-3").delay(500);
            $(".web-container-3").effect("slide", function() {
                $("#stack-end-message").fadeIn( function () {
                    $(".empty-stack").delay(800);
                    $(".empty-stack").toggle( "blind", "slow" );
                });
            });
            $('.stack-image').attr('src', 'images/stack_artwork_0.svg');
        });
    });

console.log("It WORKS!!!")

});
