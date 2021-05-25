
$(document).ready(function(){

/* = ANIMACION
------------------------------------------------------------------------------------------------------------------*/
  //restaurar
  $("#restaurar").on("click", ()=>{
    $("#peinado").css("background"," radial-gradient(circle, rgba(108,47,7,1) 0%, rgba(52,24,15,1) 100%, rgba(0,212,255,1) 100%)");
    $("#rostro").css("background","#fad6a5");   
    $("#barbilla").css("background","#fad6a5"); 
    $(".parp").css("background","#fad6a5");
		$(".parpA").css("background","#fad6a5");
		$(".orejas").css("background","#fad6a5");
    $("#cuello").css("background","#fad6a5"); 

  });


  //parpadea
  $("#parpadea").on("click",()=>{	
			
      $(".pup").css("animation","pupila 1s ease infinite alternate-reverse");
      $(".pup").css("animation-play-state","paused");
      
      $(".parpA").css("animation","parpado 1s ease infinite alternate-reverse");
			$(".parpA").css("animation-play-state","paused");

      if($("#parpadea").hasClass("1"))
      {
        $("#parpadea").css("background","rgb(126, 14, 14)");
        
        $(".pup").css("height","70px");
        $(".pup").css("weight","25px");
        $(".pup").css("animation-play-state","paused");
        $(".parpA").css("animation-play-state","paused");
        $(".parpA").css("display","none");
        $("#parpadea").removeClass ("1");
      }
      else
      {
        $("#parpadea").css("background","green");
        $("#parpadea").addClass ("1");
        
        $(".parpA").css("display","block");
        $(".pup").css("animation-play-state","running");
        $(".parpA").css("animation-play-state","running");
      }
      console.log("parpadea");
  });

  //sorprende
  $("#sorprende").on("click",()=>{

  $("#fondodientes").css("animation","gesto 5s ease infinite");
  $("#fondodientes").css("animation-play-state","paused");

  $("#dientes").css("animation","gestodien 5s ease infinite");
  $("#dientes").css("animation-play-state","paused");

    if($("#sorprende").hasClass("1"))
    {
      $("#sorprende").css("background","rgb(126, 14, 14)");
      $("#fondodientes").css("animation-play-state","paused");
      $("#dientes").css("animation-play-state","paused");
      $("#sorprende").removeClass ("1");
    }
    else
    {
      $("#sorprende").css("background","green");
      $("#sorprende").addClass ("1");
      $("#fondodientes").css("animation-play-state","running");
      $("#dientes").css("animation-play-state","running");
    }
    console.log("sorprende");
  });

  $("triste").css("animation-play-state","paused");
  $("mueve").css("animation-play-state","paused");
  $("llo").css("animation-play-state","paused");


  //Llora
  $("#llora").on("click",()=>{

  $("#lluvia").css("animation","mueve 2s ease infinite");
  $("#lluvia").css("animation-play-state","paused");

  $("#gota").css("animation","llo 3s ease-in infinite");
  $("#gota").css("animation-play-state","paused");

  $(".boquita").css("animation","triste 3s ease-out infinite");
  $("#fondodientes").css("animation","triste 3s ease-out infinite");
  
  $(".boquita").css("animation-play-state","paused");
  $("#fondodientes").css("animation-play-state","paused");

    if($("#llora").hasClass("1"))
    {
      $(".parp").css("display","block");
      $("#lluvia").css("display", "none");
      $("#gota").css("display", "none");

      $("#der").css("background"," white");
      $("#izq").css("background"," white");

      
      $("#llora").css("background","rgb(126, 14, 14)");
      $("#dientes").css("animation-play-state","paused");
      $("#fondodientes").css("animation-play-state","paused");
      $(".boquita").css("animation-play-state","paused");
      $("#gota").css("animation-play-state","paused");
      $("#lluvia").css("animation-play-state","paused");
      $("#llora").removeClass("1");
    }
    else{
      $("#llora").addClass("1");
      $("#llora").css("background","green");

      $(".boquita").css("animation-play-state","running");
      $("#gota").css("animation-play-state","running");
      $("#lluvia").css("animation-play-state","running");   

      $("#der").css("background"," linear-gradient(270deg, #001AFF 5.36%, #FDFCF9 66.56%, rgba(255, 255, 255, 0) 70.05%), #E6EEFF");
      $("#izq").css("background"," linear-gradient(270deg, #001AFF 5.36%, #FDFCF9 66.56%, rgba(255, 255, 255, 0) 70.05%), #E6EEFF");

      $(".parp").css("display","none");
      $("#dientes").css("display","none");
      $("#lluvia").css("display","block");
      $("#gota").css("display","block");   
    }
    console.log("llorar");
  });

/* = CUSTOM
------------------------------------------------------------------------------------------------------------------*/

  //cabello
  $("#cabe1").on("click",()=>{
    $("#peinado").css("background", "linear-gradient(90deg, rgba(108,47,7,1) 0%, rgba(50,26,11,1) 65%, rgba(9,8,8,1) 100%)");

      console.log("cabello1");
  });
  $("#cabe2").on("click",()=>{
    $("#peinado").css("background","linear-gradient(224.9deg, #FDFCF9 -4.02%, #E1DAB4 6.38%, rgba(255, 255, 255, 0) 33.69%), #6B3909");
    console.log("cabello2");
  });
  $("#cabe3").on("click",()=>{
    $("#peinado").css("background","linear-gradient(180deg, #E1DAB4 11.36%, #FDFCF9 27.98%, rgba(255, 255, 255, 0) 60.53%), #D9A918");
    console.log("cabello3");
  });
  $("#cabe4").on("click",()=>{
    $("#peinado").css("background","linear-gradient(180deg, #FDFCF9 13.44%, rgba(255, 255, 255, 0) 60.53%), #00FFB3"); 

    console.log("cabello4");
  });

  //tez
  $("#tez1").on("click",()=>{
    $("#rostro").css("background","#fad6a5");   
    $("#barbilla").css("background","#fad6a5"); 
    $(".parp").css("background","#fad6a5");
		 $(".parpA").css("background","#fad6a5");
		$(".orejas").css("background","#fad6a5");
    $("#cuello").css("background","#fad6a5"); 
    console.log("tez1");
  });
  $("#tez2").on("click",()=>{
    $("#rostro").css("background","#A37337");
    $("#barbilla").css("background","#A37337");
    $(".parp").css("background","#A37337");
		$(".parpA").css("background","#A37337");
		$(".orejas").css("background","#A37337");
    $("#cuello").css("background","#A37337");

    console.log("tez2");
  });
  $("#tez3").on("click",()=>{
    $("#rostro").css("background"," #EDBD56");   
    $("#barbilla").css("background","#EDBD56");
    $(".parp").css("background","#EDBD56");
		$(".parpA").css("background","#EDBD56");
		$(".orejas").css("background","#EDBD56");
    $("#cuello").css("background","#EDBD56");

    console.log("tez3");
  });
  $("#tez4").on("click",()=>{
    $("#rostro").css("background","#aab818");   
    $("#barbilla").css("background","#aab818"); 
    $(".parp").css("background","#aab818");
		$(".parpA").css("background","#aab818");
		$(".orejas").css("background","#aab818");
    $("#cuello").css("background","#aab818");
    console.log("tez4");
  });
});