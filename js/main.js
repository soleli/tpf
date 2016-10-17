function redsocial(expr,id){ 
    switch (expr) {
      case 3:
        window.plugins.socialsharing.shareViaTwitter('Mira esta noticia de Tiempo Popular', null /* img */, 'http://www.tiempopopular.com.ar/2014/ver_noticia_4S5As4ar2A.php?id_BWw1oeuRYF='+id);
            
        break;
      case 2:
        window.plugins.socialsharing.shareViaFacebook('Mira esta noticia de Tiempo Popular', null /* img */, 'http://www.tiempopopular.com.ar/2014/ver_noticia_4S5As4ar2A.php?id_BWw1oeuRYF='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      case 1:
            window.plugins.socialsharing.shareViaWhatsApp('Mira esta noticia de Tiempo Popular', null /* img */, 'http://www.tiempopopular.com.ar/2014/ver_noticia_4S5As4ar2A.php?id_BWw1oeuRYF='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      default:
        console.log(id);
    }
} 		
function init() 
{
	i=0;
	archivoValidacion = "http://www.tiempopopular.com.ar/json/carusel.php?jsoncallback=?"


	$.getJSON( archivoValidacion, {id:1})

	.done(function(data2) {
	
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
	
			if(i==0)
				{
					$(".carousel-inner").append(
					
						"<div class='item active'>"+
						"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
							"<img  src='http://tiempopopular.com.ar/2014/imagenes/"+data2.url+"_s.jpg'>"+
							"<div class='carousel-caption'>"+
									"<h1>"+data2.titulo+"</h1>"+
							"</div> </a></div>"
					);
				}
			else{
					$(".carousel-inner").append(
				
						"<div class='item'>"+
							"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
						"<img  class='img-responsive' src='http://tiempopopular.com.ar/2014/imagenes/"+data2.url+"_s.jpg'>"+
						"<div class='carousel-caption'>"+
								"<h1>"+data2.titulo+"</h1>"+
								
						"</div></a></div>"
					);
				}
			
			i++;
		});
		$("#cargando").css("display","none");
		
	})
	
	.error( function(data2) { 
	$("#cargando").html("");
	$("#cargando").append("<p>Error al cargar. </p>"); 
	$("#cargando").append("<p>Compruebe su conexion a internet.</p>"); 
	$("#cargando").append("<button type='button' class='btn btn-success' onclick='init()'>Intertar de Nuevo</button>"); 
	} )


	
	}
function tiempopopular() 
{
$("#primera").html("");
$("#secundarias").html("");
	archivoValidacion = "http://www.tiempopopular.com.ar/json/principal.php?jsoncallback=?"


	$.getJSON( archivoValidacion, {id:1})

	.done(function(data2) {
	
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
			$("#primera").append(
		
			"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
			"<H1 class='titulo_primera'>"+data2.titulo+"</h1>"+
			"<div style='float: right;   position: absolute;'>"+
				"<a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
				"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
				"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
			"<img class='img-responsive' src='http://tiempopopular.com.ar/2014/imagenes/"+data2.url+"_s.jpg'>"+
			" </a> <hr>"
			);
		});
		$("#cargando2").css("display","none");
		
	})
	
	.error( function(data2) { 
	$("#cargando2").css("display","block");
	$("#cargando2").append("<p>Compruebe su conexion a internet</p>"); } )

	$.getJSON( archivoValidacion, {id:2})

		.done(function(data2) {
		
		/*$("#cargando").css("display","none");*/
			$(data2).each(function (index, data2) {
				$("#secundarias").append(
			
				"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
			"<H1 class='titulo_primera'>"+data2.titulo+"</h1>"+
			"<div style='float: right;   position: absolute;'>"+
				"<a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
				"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
				"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
			"<img class='img-responsive' src='http://tiempopopular.com.ar/2014/imagenes/"+data2.url+"_s.jpg'>"+
			" </a> <hr>"
				);
			});
			$("#cargando").css("display","none");
			
		})
			$.getJSON( archivoValidacion, {id:3})

		.done(function(data2) {
	
		/*$("#cargando").css("display","none");*/
			$(data2).each(function (index, data2) {
		
				$("#infogral").append(
							
							"<div class='row'><a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>"+
						
				"<div class='col-xs-12 col-sm-12'><div class='box-img-secundarias'><img  class='img-responsive' src='http://tiempopopular.com.ar/2014/imagenes/"+data2.url+"_s.jpg'></div>"+
				"<div class='box-titulo-secundarias'><H1 class='titulo_segundas'>"+data2.titulo+"</h1></div></div>"+
				"<div class='redes'>"+
					"<a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
					"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
					"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
				"</a></div> <hr>"
									
									);
			
			
			});
			$("#cargando").css("display","none");
		
		})
		
	}	
	
function cargar(id) {
	$("#noticia").html (" "); 
	$("#iconos").html (" "); 
	archivoValidacion = "http://tiempopopular.com.ar/json/noticia.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {id:id})
	.done(function(data) 
	{
		$("#noticia").append(
								
								"<p class='titulo_primera'>"+data.titulo+"</p> "+
								"<p class='copete_individual'>"+data.copete+"</p> "
								
							);
	
		if(data.video!=null){
			$("#noticia").append(
								"<div class='embed-responsive embed-responsive-16by9'>"+
									"<iframe src='https://www.youtube.com/embed/"+data.video+"' width='100%' height='350' frameborder='0' allowfullscreen></iframe>"+
								"</div>"
							);
		}
		else {	$("#noticia").append( "<img  src='http://tiempopopular.com.ar/2014/imagenes/"+data.url+"_s.jpg'>"); }
		if(data.audio!=null){
			$("#noticia").append(
				"<audio controls>"+
					"<source src='http://tiempopopular.com.ar/2014/audios/"+data.audio+"' type='audio/mpeg'>"+
				"</audio>"
			);
		}
		$("#noticia").append("<div class='copete'>"+data.cuerpo+"</div>");
				
		$("#iconos").append(
		"<div class='imgred col-xs-4'> <a  onclick='redsocial("+1+","+id+")'><span class='icon-whatsapp'></span></a></div>"+
		"<div class='imgred  col-xs-4'><a onclick='redsocial("+2+","+id+")'><span class='icon-facebook'></span></a></div>"+
		"<div class='imgred col-xs-4'><a onclick='redsocial("+3+","+id+")'><span class='icon-twitter'></span></a></div>"
		);
		
	});

	
 }

 function noticias(id) {

 $("#noticias").html (" "); 
	archivoValidacion = "http://tiempopopular.com.ar/json/todas.php?jsoncallback=?"
		$.getJSON( archivoValidacion, {id:id})
	.done(function(data) {
	if(id==1){ var seccion="Informaci&oacuten General"; }
	if(id==3){ var seccion="Interior"; }
	if(id==6){ var seccion="Deportes"; }
	if(id==2){ var seccion="Policiales"; }
	if(id==4){ var seccion="Nacionales"; }
	if(id==7){ var seccion="Espect&aacuteculo"; }
	if(id==5){ var seccion="Internacionales"; }
	$("#noticias").append("<p class='tituseccion'>"+seccion+"</p>");
		$(data).each(function (index, data) {   
							$("#noticias").append(
							
							"<div class='row'><a href='#noticia1' data-transition='flip'  onclick='cargar("+data.id_Noticia+");'>"+
						
				"<div class='col-xs-12 col-sm-12'><div class='box-img-secundarias'><img  class='img-responsive' src='http://tiempopopular.com.ar/2014/imagenes/"+data.url+"_s.jpg'></div>"+
				"<div class='box-titulo-secundarias'><H1 class='titulo_segundas'>"+data.titulo+"</h1></div></div>"+
				"<div class='redes'>"+
					"<a  onclick='redsocial("+1+","+data.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
					"<a onclick='redsocial("+2+","+data.id_Noticia+")'><span class='icon-facebook'></span></a>"+
					"<a onclick='redsocial("+3+","+data.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
				"</a></div> <hr>"
									
									);
							});	

	})
	$("#cargando1").css("display","none");
 }
 function enviarcorreo(){
             
             	var number = $("#nombre").val();
             	var message = $("#mensaje").val();
				archivoValidacion = "http://tiempopopular.com.ar/json/formulario.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {nombre:number, mensaje:message})
	            .done(function(data) 
	{
	$("#alertaco").css("display","block");
		$("#alertaco").append(
								
								data.ex
								);              
             }); 
      } 
	

                 
		
		
  
		 
		
		
	
			
		
	