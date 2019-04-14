$(document).ready(function(){
 
    $("#btn1").click(function(){
      $("button").before("<div>"+$("#ss").html()+"</div>");
    });
    $("#btn2").click(function(){
      $("<div>"+$("#ss").html()+"</div>").remove();
    });
  });