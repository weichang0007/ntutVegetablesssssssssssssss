$(document).ready(function(){
    if(localStorage.getItem('set_alert') == "true")
    {
        alert("已收到您的回覆!");
        localStorage["set_alert"] = "false";
    }
});