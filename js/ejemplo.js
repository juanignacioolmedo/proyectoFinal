var saludameEsta = function(someText){
	
	/*
	Dado un id , obtengo la info y de esa info
	
	html: unHtml
	*/

	var unHtml = obtenerInfo(someText);
	var unaImagen = obtenerImagen(someText);
	
	swal({
	  title: "Sweet!",
	  imageUrl: unaImagen,
	  type: 'info',
	  html: unHtml,
	  showCloseButton: true,
	  showCancelButton: false,
	  confirmButtonText:
	    '<i class="fa fa-thumbs-up"></i> Cerrar',
	  cancelButtonText:
	    '<i class="fa fa-thumbs-down"></i>'
	});
};

var imagenEncordados = {
	'luxilon': 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg', 
    'zons': 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg'

};

var datosDeEncordados = { 
		/*
		Falta armar los datos de cada uno de los encordados, seria 
		proba un html con el formato tipo 
		*/

			'luxilon': 'You can use <b>bold text</b>, ' +
	    '<a href="//github.com">links</a> ' +
	    'and other HTML tags' + ' luxilon ', 


	    	'zons': 'You can use <b>bold text</b>, ' +
	    '<a href="//github.com">links</a> ' +
	    'and other HTML tags' + ' zons ' 
};


var obtenerInfo = function(someText){	
	return datosDeEncordados[someText];
};

var obtenerImagen = function(someText){	
	return imagenEncordados[someText];
};
