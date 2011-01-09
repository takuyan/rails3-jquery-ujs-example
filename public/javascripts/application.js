function show_overlay(){
  $("#overlay").show("");
}

function hide_overlay(){
  $("#overlay").hide("blind");
}

$(function(){
  $("#overlay").click(function(){
    hide_overlay();
  });

  $(".move")
    .live("ajax:beforeSend", function(){ show_overlay(); })
    .live("ajax:success", function(){ alert("success"); })
    .live("ajax:error", function(){ alert("error"); })
    .live("ajax:complete", function(){ hide_overlay(); });

  $("#logo").draggable();
});

