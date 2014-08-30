$(function() {
			    //obtenemos el contexto
    var elCanvas = $("canvas")[0];
    var contexto = elCanvas.getContext("2d");
			    
    
    //Escucho el evento keyup en las cajas mensajes
	$("#nombre").keyup(function() {
		var i = $("#himg").val();
	  	var elCanvas = $("canvas")[0];
    	var contexto = elCanvas.getContext("2d");
		var imagen = new Image();
		//modificar su atributo src
		imagen.src="images/"+i;
		//cargar la imagen en el canvas
		imagen.onload = function (){    
			contexto.drawImage(imagen, 0, 0, 400, 500);
		};
        //pinto de nuevo la imagen del gatito
        contexto.drawImage(imagen, 0, 0, 400, 500);
        //Defino los estilos de texto
        contexto.font = "60px Arial";
        contexto.strokeStyle = "black";
        contexto.fillStyle = "white";
        contexto.textAlign = "center";
        //obtengo el valor de los cuadros de texto
        //var textoArriba = $("#mensaje-arriba").val();
        //var textoAbajo = $("#mensaje-abajo").val();
		//alert($("#nombre").val())
		var nombre = $("#nombre").val();
        //pintamos los textos arriba y abajo, con relleno y con borde
        contexto.fillText(nombre, 200, 75);
        contexto.strokeText(nombre, 200, 75);
        
    });
    
    
    $("#link-guardar").click(function(evento) {
        //obtengo la imagen del canvas
        var meme = elCanvas.toDataURL();
        //obtengo el anchor
        var enlace = evento.target;
        enlace.href = meme;
        enlace.download = "mi_meme.jpg";
    });

			});
function imagen(i){
	$("#himg").val(i);
	//obtenemos el contexto
    var elCanvas = $("canvas")[0];
    var contexto = elCanvas.getContext("2d");
	//crear un objeto imagen
	var imagen = new Image();
    //modificar su atributo src
    imagen.src="images/"+i;
	
    //cargar la imagen en el canvas
    imagen.onload = function (){    
        contexto.drawImage(imagen, 0, 0, 400, 500);
    };
	}
	