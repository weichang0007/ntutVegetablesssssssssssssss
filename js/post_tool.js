$(document).ready(function() {

    $("#post_btn").click(function() {
        var selectVal = new Array();
        $('select :selected').each(function(i, item)
        {
            if($(item).text() != "無" && $(item).text() != "享用菜色" && $(item).text() != "評價")
                selectVal.push($(item).text());
            else
                selectVal.push("Nan");
        });

        var phoneRE = /^-?\d+\.?\d*$/;
        if ($("#phone").val().match(phoneRE)==null && $("#phone").val() != "") {
            alert("不是數值!!!");
            return;
        }

        if( $("#name").val() != "" && $("#phone").val() != "" && $("#email").val() != "" && selectVal.join(',').search("Nan") < 0) {
            $.ajax({ async: false,
		type: "post",
                data: {
                "method": "write",
                "name": $("#name").val(),
                "phone": $("#phone").val(),
                "email": $("#email").val(),
                "dish" : selectVal.join(','),
                "other" : $('#other').val()
                },
                url: "https://script.google.com/macros/s/AKfycbzEp_CO43FOyydUhhyKPugqT7z9SHqu2xyav-5KvYhpN3h5pDyX/exec"
            });
	    localStorage["set_alert"] = "true";  
	    window.location.replace("./index.html");
        } else
            alert("不能為空!!!");
    })

})
