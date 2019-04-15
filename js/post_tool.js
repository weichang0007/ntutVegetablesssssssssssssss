$(document).ready(function() {

    $("#submit0").click(function() {
        var selectVal = new Array();
        $('select :selected').each(function(i, item)
        {
            if($(item).text() != "無")
                selectVal.push($(item).text());
            else
                selectVal.push("Nan");
        });

        if( $("#name").val() != "" && $("#phone").val() != "" && $("#email").val() != "" && selectVal.join(',').search("Nan") < 0)
            $.ajax({
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
        else
            alert("不能為空!!!");

        location.reload();
    })

})