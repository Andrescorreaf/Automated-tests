casper = require ("casper").create();

casper.start("http://www.google.com");

casper.then(function(){
	casper.echo("pagina cargada con exito");
});



casper.run();