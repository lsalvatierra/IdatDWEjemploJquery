

$(document).on("click", "#btnjquery", function(){
    alert("Hola JQuery");
});

$(document).on('input', "#txtnumero", function () { 
    this.value = this.value.replace(/[^0-9]/g,'');
});


$(document).on("click", "#btnvalidar", function(){
/* seleccionar las etiquetas "p" 
$("p")
/* seleccionar los elementos con id="inicio" 
$("#inicio")
/* seleccionar los elementos con clase="principal" 
$(".principal")
/* seleccionar los elementos con id="inicio" con clase="principal" y que son etiqueta "p" 
$("p#inicio.principal")
/* seleccionar las etiquetas "a" con clase="principal" dentro de una etiqueta "p" 
$("p a.principal")
/* seleccionar los elementos con id="inicio" o clase ="principal" 
$("#inicio,.principal")
/* seleccionar todos los elementos 
$("*")
/* seleccionar todas las etiquetas "p", "a" y "div" 
$("p,a,div")*/
/* seleccionar el primer enlace en la web, elemento 'a' 
$("a:first")
/* seleccionar el último enlace en la web, elemento 'a' 
$("a:last")*/
/* seleccionar todos los inputs 
$(":input") 
/* seleccionar todos los input de tipo text 
$(":text") 
/* seleccionar todos los input de tipo password 
$(":password")*/
    if($("#txtnumero").val() === ""){
        $("#errornumero").text("Ingrese un número");
        return;
    }else{
        $("#errornumero").text("");
    }
    if($("#txtnombre").val() === ""){
        $("#errornombre").text("Ingrese su nombre");
        return;
    }else{
        $("#errornombre").text("");
    }
    alert("Formulario Validado");
});

$(document).on("click", "#btncambiarclass", function(){
    $("#alertmensaje").removeClass("alert-primary");
    $("#alertmensaje").addClass("alert-danger");
    
});

$(document).on("click", "#bntanimacion", function(){
    //$("#divanimation").animate({left: '250px'});
    // $("#divanimation").animate({
    //     left: '250px', opacity: '0.5', height: '150px', width: '150px'
    // });
    // $("#divanimation").animate({
    //     left: '250px', opacity: '0.5', height: '150px', width: '150px'
    // });
    var div = $("#divanimation");  
    // div.animate({left: '100px'}, "slow");
    // div.animate({fontSize: '3em'}, "slow");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '200px', opacity: '0.8'}, "slow");
});
