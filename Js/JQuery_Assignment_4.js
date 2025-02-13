
$(document).ready(function(){
    // Header Area 
    $("header").click(function(){
        $("header").css("background-color", "yellow");
    });
    //   End Header
    // SideBar
    $(".sidebar").click(function(){
        $(".sidebar_heading").text("LeftBar");
    });
    // End Side bar
    // Extra Content
    $(".extra_content").click(function(){
        $(".main_content").fadeOut("slow");
    });
    // End Extra Content
  });



