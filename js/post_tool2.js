$(document).ready(function() {

    $("#post_btn").click(function() {
	localStorage["set_alert"] = "true";  
	window.location.replace("./index.html");
    })

})
