$(document).ready(function(){
    $(".popupbox ").hide();
    $("footer").click(function(){
        $(".popupbox ").show();
    });
    $(".cross-btn").click(function(){
        $(".popupbox ").hide();
    });
});