//-------El tamaño del canvas es de 500----------//
$(document).ready(function(){
    let cont=0;
    let canvas=document.getElementById("generador");
    let ctx= canvas.getContext("2d");

    $("#tipocolor").on("change",function()
    {
        let tipocolor= $("#tipocolor").val();
        

        if(tipocolor != "0" && cont==0)
        {
            $("#colores").after(
                "<input type='color' name='color' id='selectcolor2'></input>");

            $("#colores").after(
                "<h2 id='tit'>Color de Fondo</h2>");
            
            cont ++;
        }
        if(tipocolor == "0")
        {
            console.log("pablina");

            $("#tit").addClass("ocultar");
            
            $("#selectcolor2").addClass("ocultar");
            
            cont=0;
        }

    });

    $("#enviar").on("click",function()
    {
        let figura= $("#tipofigura").val();
        let tipocolor= $("#tipocolor").val();
        let color1;
        let color2;
        
        if(tipocolor == "0")
        {
            console.log(tipocolor,typeof(tipocolor));
            color1= $("#selectcolor1").val();
            console.log (color1);
        }
        else if (tipocolor == "1")
        {
            // console.log(tipocolor,typeof(tipocolor));
            color2= $("#selectcolor2").val();
            color1= $("#selectcolor1").val();
        }
        else if (tipocolor == "2")
        {
            // console.log(tipocolor,typeof(tipocolor));
            color2= $("#selectcolor2").val();
            color1= $("#selectcolor1").val();
        }

        if(figura == "0")
        {
            ctx.clearRect(0,0,500,500);
            console.log (color1);
            ctx.beginPath();
            ctx.moveTo(250,240);
                ctx.lineTo(273,170);
                ctx.lineTo(353,170);
                ctx.lineTo(287,130);
                ctx.lineTo(310,56);
                ctx.lineTo(250,100);
                ctx.lineTo(180,56);
                ctx.lineTo(209,130);
                ctx.lineTo(154,170)
                ctx.lineTo(223,170);
            ctx.lineTo(250,240);
            if(tipocolor=="0"){
                ctx.fillStyle=color1;
            }
            else if(tipocolor == "1"){
                let degradadolin = ctx.createLinearGradient(100,50,300,300);
                degradadolin.addColorStop(0,color1);
                degradadolin.addColorStop(1,color2);
                ctx.fillStyle=degradadolin;
            }
            else if(tipocolor == "2"){
                let degradadorad = ctx.createRadialGradient(250,150,10,250,100,100);
                degradadorad.addColorStop(0,color1);
                degradadorad.addColorStop(1,color2);
                ctx.fillStyle=degradadorad;
            }
            ctx.fill();
            ctx.closePath();

        }
        else if(figura == "1")
        {
            ctx.clearRect(0,0,500,500);
            ctx.beginPath();

            ctx.arc(133,157,112,0,Math.PI*2);
            ctx.arc(374,157,112,0,Math.PI*2);
        
            ctx.arc(250,267,164,0,Math.PI*2);
            
            if(tipocolor=="0"){
                ctx.fillStyle=color1;
            }
            else if(tipocolor == "1"){
                let degradadolin = ctx.createLinearGradient(100,100,400,400);
                degradadolin.addColorStop(0,color1);
                degradadolin.addColorStop(1,color2);
                ctx.fillStyle=degradadolin;
            }
            else if(tipocolor == "2"){
                let degradadorad = ctx.createRadialGradient(250,100,50,250,100,500);
                degradadorad.addColorStop(0,color1);
                degradadorad.addColorStop(1,color2);
                ctx.fillStyle=degradadorad;
            }
            ctx.fill();
        
            ctx.closePath();
        }
        else if(figura == "2")
        {
            ctx.clearRect(0,0,500,500);
            ctx.beginPath();
            ctx.moveTo(272,77);
            ctx.bezierCurveTo(393, 147, 243, 244, 341, 296);
        
            ctx.moveTo(272,77);
            ctx.lineTo(270,90);
        
            ctx.bezierCurveTo(195, 25, 274, 84, 232, 105);
        
            ctx.bezierCurveTo(210, 135, 181, 127, 180, 154);
        
            ctx.bezierCurveTo(202, 170, 207, 158, 224, 148);
        
            ctx.bezierCurveTo(233, 166, 267, 157, 261, 128);
        
            ctx.bezierCurveTo(290, 179, 186, 190, 212, 296);
        
            ctx.lineTo(341,296);
        
            ctx.rect(205,296, 145, 15);
            ctx.rect(190,311, 175, 25);
        
            ctx.moveTo(365,336);
            ctx.lineTo(341,296);
        
            if(tipocolor=="0"){
                ctx.fillStyle=color1;
            }
            else if(tipocolor == "1"){
                let degradadolin = ctx.createLinearGradient(100,100,400,400);
                degradadolin.addColorStop(0,color1);
                degradadolin.addColorStop(1,color2);
                ctx.fillStyle=degradadolin;
            }
            else if(tipocolor == "2"){
                let degradadorad = ctx.createRadialGradient(250,150,200,250,100,100);
                degradadorad.addColorStop(0,color1);
                degradadorad.addColorStop(1,color2);
                ctx.fillStyle=degradadorad;
            }
            ctx.fill();
            ctx.closePath();
        }

    });
});