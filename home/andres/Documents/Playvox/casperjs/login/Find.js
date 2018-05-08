var config = {   
  users1 : 'A' ,
  users2 : 'Se' ,
  //url2 : 'https://testing.plvx.co/quality/search',
};
casper.test.begin('Test de Quality',0, function suite(test) {
  casper.echo('cargando evaluador ');
  
  utils=require("utils");

    
    casper.waitForText("", function() {
    	this.sendKeys('#query-users',config.users1, {keepFocus: true});
    		this.sendKeys('#query-users', casper.page.event.key.Enter , {keepFocus: false});
     			test.comment('Buscadno Usuario');
      				//casper.capture("evaluador");
      					this.wait(10000);
      						 //ScreenShot(this, '2');

});
   var user = [];       
    casper.then(function(){
      var user = this.evaluate(function(){
         var users = [];
         $.each($("#tbody-users-list tr .btn"),function(x,y){
          users.push({
            usuario:$(y).attr("data-user-id"),
            nombre:$(y).text("img.user-pic")
          });
         });
         return users;
      });
      utils.dump(user);
    });

casper.waitForText("", function() {
    casper.capture('Evaluador');
     test.comment('Usuario encontrados con inicial '+config.users1+'');
      ScreenShot(this, '1');
});

/*casper.then(function(step1){
  				var i = 1;
  				 this.repeat(1, function() {
    				this.click('#content-users-list > table:nth-child(' + i + ') a');
    				i++;
    				  test.comment("buscando agente a evaluar");
    				    this.wait(10000);
    				     casper.viewport(1200,720);      			          			   				        
    				         			  test.comment('tomando captura')
                             				casper.capture('Evaluador');
                              					 ScreenShot(this, '1');
                                					this.wait(10000);
  					});
  				});*/

/*
casper.viewport(1200,720).then(function(){
        this.click("#tbody-users-list > tr:nth-child(7) > td:nth-child(3) > a"); // seleccionando el boton de evaluador
            casper.echo("ingresando a el valuador");
                this.wait(10000, function(){
                     this.echo("tomando foto del evaluador");
                        casper.capture("imagen3");
                            ScreenShot(this, '3', 1);
                                this.wait(2000, function(){
                                    this.echo("buscando Scorecard");




*/
    casper.run(function() {      
      test.done();
    });
  });

function ScreenShot(casperObject, step, delay)
{
	casperObject.capture('Evaluador'+step+'.png', {

	        top: 0,
	        left: 0,
	        width: 1200,
	        height: 720
    	});
}

function delay(casperObject, seconds)
{
	casperObject.wait((seconds*1000), function() {});
}