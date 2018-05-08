var config = {   
  url : 'https://testing.plvx.co/login?next=%2F' ,


  //url2 : 'https://testing.plvx.co/quality/search',
};
config.form = {
    "email": "acorrea@playvox.com",
    "password": "asdasd", 
  
  };  
casper.test.begin('Test de login',0, function suite(test) {
  casper.echo('Cargando login');
   

        casper.start(config.url,function(test1){ //casper.stara() siempre envuleve su primera accion. El primer argumento debe ser la url de la pagina que desea probar   
                this.fill('form#login',config.form, true);
                   test.comment('cargando login y validando datos');
                   casper.viewport(1200,720);
                        casper.capture("login1");
                            ScreenShot(this, '1' );
                              this.wait(5000);

        });
          
           casper.then(function(test2){
                   this.evaluate(function() {
                     $('input[type="submit"]:first').click()});                     
                       test.comment("ingresando a playvox");                         
                              this.wait(10000);
                                test.comment("capturando ingreso");
                                 this.wait(5000);                                 
                                 casper.capture("login2");                                 
                                  ScreenShot(this, '2' );
                });
            


            /*


            casper.waitForResource(function checkAuth(login) {
                    return login;
                     }, function onReceived() {
                    if (password!== this.getpassword()) {
                        this.log('Se a autenticado corretamente...');
                    } else { 
                        // this.capture('pic3.png');
                        this.log('Usuario ou senha invalidos!', 'ERROR');
                        this.die('User or password invalids!', 1); }
                });                
                                            
                        
    
            /*
             casper.then(function(step){
                  this.evaluate(function(){
                    $('#login input[type="submit"]:first').click();
                     casper.comment("datos validado")
                      casper.capture("login2");
                       screenshot(this,'2',2)

                });


             });
                                  
            /*                
	      casper.then(function(step){
                click('form[name="login"]').submit();
                  test.comment('ingresando a playvox y capturando');
                    casper.capture('login2')
                    this.wait(10000);
                      ScreenShot(this, '2', 1);
                },'CasperJS');
          casper.then(function(){

          })
      
            /*

      casper.waitFor(function check() {
              return this.evaluate(function() {
                   return document.querySelectorAll('#login > div.col-md-offset-1.col-md-10 > input').length > 2;
            });
                }, function then() {    // paso para ejecutar cuando el registro () está bien 
                    this.captureSelector('login.png', '##login > div.col-md-offset-1.col-md-10 > input');
            }, function timeout() { // paso que se ejecuta si de control ha fallado 
                        this.echo("usuario o contraseña incorrecta").exit();
                          this.wait(5000);
                            ScreenShot(this, '2', 1);
                });

    /*
        test.comment("ingresando a la plataforma playvox");
          casper.viewport(1200,720);
                casper.capture("imagen playvox");               	       
                         test.comment("capturando");                          
                             casper.echo("cargando caso Quality");
                              ScreenShot(this, '1', 1);//Tomamos el screenshot del paso 1
                          

                
    /*
    
             
                                })
                            })
            });           
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
                                })
                            })           
        
      casper.then(function(){
         this.evaluate(function() {
                $('.touser-input').select2('open');
                $('#s2id_autogen2_search input.select2-input').value("General");
            });
                }).waitForSelector('.select2-drop li', function() {
                this.evaluate(function() {
                // ** bit importante ** select2 ignora los eventos de clic en el menú desplegable, por lo que necesita usar mouseup
                $('.select2-drop ul').mouseup();
                })
                }).waitWhileSelector('.select2-drop li', function() {
                this.evaluate(function() {
                    $('.scorecard_id.select2-result-label').click();
    })
})
       // document.querySelector('label.select2-offscreen input.select2-focusser.select2-offscreen').setAttribute('value',scorecard_id+'General');
    //},true)
        //casper.waitUntilVisible('#s2id_autogen29_search', function(){
            //this.echo(this.getHTML('#scorecard_id > option:nth-child(2)'));
            //this.captureSelector('General.png','html');
                   casper.echo("sleccionando Scorecard");
                        this.wait(10000, function(){
                            this.echo("Scorecard seleccionada");
                                casper.echo("tomando imagen");
                                    casper.capture("imagen4");
                                        this.wait(9000, function(){
                                            this.echo("fin de proceso");
                                                ScreenShot(this, '4', 1);
                            }) 
                         })
                    //})

       
    })

})
    
           


         */           

	
		casper.run(function() {
        test.done();
    });

});


function ScreenShot(casperObject, step, delay)
{
	casperObject.capture('login'+step+'.png', {

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