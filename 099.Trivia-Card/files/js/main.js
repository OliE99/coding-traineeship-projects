$(function(){
    $("#hint").on("click",function(){
      $(this).next("#data").slideToggle(500);
    });
    $("#one").on("click",function(){
      $(this).fadeTo(500,0.2);
      $("#icon-1").show();
      $("#icon-2").hide();
    });
    $("#two").on("click",function(){
      $(this).fadeTo(500,0.2);
       $("#icon-1").show();
       $("#icon-2").hide();
    });
    $("#three").on("click",function(){
      $(this).fadeTo(500,0.2);
      $("#icon-1").show();
      $("#icon-2").hide();
  });
    $("#four").on("click",function(){
      $("#three").fadeTo(0,0.2);
      $("#two").fadeTo(0,0.2);
      $("#one").fadeTo(0,0.2);
      $("#icon-1").hide();
      $("#icon-2").show();
  });
    
    $("#submit").on("click",function(){
      $("#icon-1").hide();
      $("#icon-2").hide();
      $("#answers").children().fadeTo(100,1);  
    });
    
  });