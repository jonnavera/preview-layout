$(document).ready(function(){

    $(function() {
        $("#map").googleMap();
        $("#map").addMarker({
            address: "101 Montgomery Ave. San Francisco, CA USA", // Postale Address
            icon: './images/map_dot.png'
        });
    })

});
