

casper.test.begin('Test de Quality',1, function suite(test) {
	casper.echo("Cargando pagina");

 			casper.then(function(step1){
  				var i = 1;
  				 this.repeat(1, function() {
    				this.click('#bs-example-navbar-collapse-1 > ul:nth-child(' + i + ') a');
    				i++;
    				  test.comment("ingresando al Menu");
    				    this.wait(10000);
  					});
  				});        
          //casper.start('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li:nth-child(3) > a');
    			casper.then(function(step2) {
           			casper.click('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li:nth-child(3) > a');
           			       test.comment(" Buscando Quality");
           			        this.wait(10000);
    					});
    	           casper.waitUntilVisible('#bs-example-navbar-collapse-1 > ul:nth-child(1) > li:nth-child(3) > a', function(){
      			   		casper.test.pass('Estado de busqueda = ok ');
      			       		test.comment('ingreso a Quality');
      			        		casper.viewport(1200,720);      			          			   				        
    				         			test.comment('tomando captura')
                             				casper.capture('Quality1');
                              					 ScreenShot(this, '1');
                                					this.wait(10000);
                                  						test.comment(" estas en Quality");

    			},function(){
        			casper.test.fail('Estado de busqueda = NO ok  ');
        		}, 30000);
    				 

                
                   
        casper.run(function() {
        test.done();
    });
  });
function ScreenShot(casperObject, step, delay)
{
	casperObject.capture('Quality'+step+'.png', {

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