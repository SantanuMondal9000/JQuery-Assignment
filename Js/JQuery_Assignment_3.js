$(document).ready(function(){
    
    $("#submit_btn").click(function(){
        if($("#first_name").val() == "" || $("#last_name").val() == ""){
            alert("Please fill in all fields.");
        }
    });
});