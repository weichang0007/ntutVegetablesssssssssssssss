$(document).ready(function(){
 
    $("#btn1").click(function(){
      $("button").before("<div>"+$("#ss").html()+"</div>");
    });
  });