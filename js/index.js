var app = { 
    // Application Constructor 
    initialize: function() { 
        this.bindEvents(); 
    }, 
    // Bind Event Listeners 
    // 
    // Bind any events that are required on startup. Common events are: 
    // 'load', 'deviceready', 'offline', and 'online'. 
    bindEvents: function() { 
        document.addEventListener('deviceready', this.onDeviceReady, false); 
    }, 
    // deviceready Event Handler 
    // 
    // The scope of 'this' is the event. In order to call the 'receivedEvent' 
    // function, we must explicity call 'app.receivedEvent(...);' 
    onDeviceReady: function() { 
        app.receivedEvent('deviceready'); 
    }, 
    // Update DOM on a Received Event 
    receivedEvent: function(id) { 
      
        var pushNotification = window.plugins.pushNotification; 
      //  if (device.platform == 'android' || device.platform == 'Android') { 
            //alert("Register called"); 
            //tu Project ID aca!! 
            pushNotification.register(this.successHandler, this.errorHandler,{"senderID":"275015233935","ecb":"app.onNotificationGCM"}); 
       /* } 
        else { 
            alert("Register called"); 
            pushNotification.register(this.successHandler,this.errorHandler,{"badge":"true","sound":"true","alert":"true","ecb":"app.onNotificationAPN"}); 
        } */
    }, 
    // result contains any message sent from the plugin call 
    successHandler: function(result) { 
        //alert('Callback Success! Result = '+result) 
    }, 
    errorHandler:function(error) { 
        alert(error); 
    }, 
    onNotificationGCM: function(e) { 
        switch( e.event ) 
        { 
            case 'registered': 
                if ( e.regid.length > 0 ) 
                { 
                   // console.log("Regid " + e.regid); 
                   // alert('registration id = '+e.regid); 
										
                    //Cuando se registre le pasamos el regid al input 
                    localStorage.setItem("clave", e.regid);
					dispo(e.regid);
                } 
            break; 

            case 'message': 
              // NOTIFICACION!!! 
              alert(e.message); 
            break; 

            case 'error': 
              alert('GCM error = '+e.msg); 
            break; 

            default: 
              alert('An unknown GCM event has occurred'); 
              break; 
        } 
    }, 
    onNotificationAPN: function(event) { 
        var pushNotification = window.plugins.pushNotification; 
        alert("Running in JS - onNotificationAPN - Received a notification! " + event.alert); 
         
        if (event.alert) { 
            navigator.notification.alert(event.alert); 
        } 
        if (event.badge) { 
            pushNotification.setApplicationIconBadgeNumber(this.successHandler, this.errorHandler, event.badge); 
        } 
        if (event.sound) { 
            var snd = new Media(event.sound); 
            snd.play(); 
        } 
    } 
};

function dispo(id){
//alert(id);
archivoValidacion = "http://www.tiempopopular.com.ar/json/dispositivos.php?jsoncallback=?"
					$.getJSON( archivoValidacion, {id:id})
					.done(function(data) 
					{ 
						//alert(data);
						if(data>=1){
						//alert("sii");
							init();
							}
						else{
							location.href="formulario.html?id="+id;
							
						}
					
					})
					.error( function(data) { 
						$("#cargando").html("");
						$("#cargando").append("<p>Error al cargar </p>"); 
						$("#cargando").append("<p>Compruebe su conexion a internet</p>"); 
						$("#cargando").append("<button type='button' class='btn btn-success' onclick='app.initialize()'>Intertar de Nuevo</button>"); 
					} )
}