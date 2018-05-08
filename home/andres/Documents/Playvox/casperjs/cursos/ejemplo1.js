var config = {
	url: 'http://www.gmail.com',
	//url2: 'http://www.gmail.com',
};



/*=============================================
=            Iniciando curso en Casperjs          =
=============================================*/

var casper = require('casper').create(); // hemos creado un nuevo Casper instancia

casper.start(config.url, function(){ // empezamos y abrimos http://casperjs.org/
    this.echo(this.getTitle()); // una vez que la página se ha cargado, nos preguntamos para imprimir el título de esa página web (el contenido de su <title>etiqueta)
        
    casper.echo("se imprime el titulo de de la primer pagina encontrada");
    this.wait(5000);
    casper.capture("imagen1.png");
});
/*
casper.thenOpen(config.url2, function(){ // a continuación, abrimos otra url,http://phantomjs.org/
    this.echo(this.getTitle()); // Una vez que se ha cargado la nueva página, le pedimos que imprima su título también
    this.fill('form#login',config.form, true);
    casper.echo("se imprime el titulo del la segunda paguina");
    casper.capture("imagen2.png");
});
*/
casper.run();  // ejecutamos todo el proceso
 
/*=====  Fin de la  primer prueba ======*/



