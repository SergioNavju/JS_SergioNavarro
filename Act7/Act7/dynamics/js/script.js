$(document).ready(function() {

    $(".results").load("./dynamics/php/Consultas.php");
         
    //BUSQUEDA
    $(".submitcarr").on("click",function(){
        
        let carrera= $(".carrera").val();
        console.log(carrera);
        let peticion=$.ajax({
            url:"./dynamics/php/Consultas.php", 
            data:{busq:carrera},
            method:"POST"
        });

        peticion.done(function(resp){
            $(".results").html(resp);
        })

        peticion.fail(function(resp){
            alert("falle");
        })
    });

    //FILTRO
    $(".filtmod").on("change",function(){
            
        let moda= $(".filtmod").val();

        let peticion=$.ajax({
            url:"./dynamics/php/Consultas.php", 
            data:{dato:moda},
            method:"POST"
        });

        peticion.done(function(resp){
            $(".results").html(resp);
        })

        peticion.fail(function(resp){
            alert("falle");
        })
    });


});
