/*==============================================================================*/
/* Casper generated Fri Nov 17 2017 09:39:59 GMT-0500 (-05) */
/*==============================================================================*/
var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1366, height: 675};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
/*---------------INGRESANDOA UR Y TOMANDO UNA CAPTURA-------------------------*/ 
casper.test.begin('Signup standalone', function(test) {
   casper.start('https://my.plvx.co/sign-up?b=dsb?b=dsb');
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block","URL");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");

   });


/*---------------INGRESANDO NOMBRE DA LA COMPANIA--------------------------------*/
   casper.waitForSelector("input[name='company_name']",
       function success() {
           this.sendKeys("input[name='company_name']", "TaxistasCol60");
       },
       function fail() {
           test.assertExists("input[name='company_name']");
   });


/*---------------------CAPTURA DEL FORMULARIO DE DOMINIO------------------------*/
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block","Company name");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block","cambiar el nombre de la compañia");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
        //casper.echo("----Company name OK");
   });


/*--------------------DANDO CLICK AL BOTON SIGUIENTE---------------------------*/
   casper.waitForSelector("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']",
       function success() {
           test.assertExists("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']","Nombre del Dominio");
           this.click("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']");
       },
       function fail() {
           test.assertExists("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']");
   });


/*-------SELECCIONANDO EL INPUT EN EL FORMULARIO PARA INGRESAR EL DOMINIO-----------*/
   casper.waitForSelector("form#signup-subdomain input#subdomain",
       function success() {
           test.assertExists("form#signup-subdomain input#subdomain","subdomain");
           this.click("form#signup-subdomain input#subdomain");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input#subdomain");
   });


/*--------------------INGRESANDO EL NOMBRE DEL DOMINIO--------------------------*/
   casper.waitForSelector("input#subdomain",
       function success() {
           this.sendKeys("input#subdomain", "TaxistasCol60");
       },
       function fail() {
           test.assertExists("input#subdomain");
   });


/*--------------------TOMANDO PANTALLAZO DE FORMULARIO---------------------------*/
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block","Nombre de subdomain");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot3.png", "html");
        //casper.echo("----Dominio PlayVox OK");
   });


/*----I-----NGRESANDO AL FORMULARIO PARA CREAR CUENTA Y TOMANDO UNA CAPTURA------------*/
   casper.thenOpen('https://TaxistasCol60.plvx.co/sign-up/account?company_name=TaxistasCol60');
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block","crear cuenta");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");           
   });
 casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot4.png", "html");
        //casper.echo("----Cuenta PlayVox");
   });


/*----------INGRESANDO EL NOMBRE EN EL INPUT Y TOMANDO EL PANTALLAZO---------------------*/
   casper.waitForSelector("input[name='name']",
       function success() {
           this.sendKeys("input[name='name']", "Andres Felipe");
       },
       function fail() {
           test.assertExists("input[name='name']", "Error-- Subdominio no disponible--"); // error de url, debes cambiar el dominio y el subdominio
            
   });
   casper.wait(1000);
    casper.then(function() {
       //this.captureSelector("screenshot6.png", "html");
       casper.echo("----Primer nombre OK");
     });


/*--------------INGRESANDO EL APELLIDO EN EL INPUT Y TOMANDO UN PANTALLAZO-----------*/
   casper.waitForSelector("input[name='last_name']",
       function success() {
           this.sendKeys("input[name='last_name']", "Correa ");
       },
       function fail() {
           test.assertExists("input[name='last_name']");
   });
   casper.wait(1000);
    casper.then(function() {
       //this.captureSelector("screenshot6.png", "html");
       casper.echo("----Apellido OK");
     });


/*-----------INGRESANDO EL CORREO EN EL INPUT Y TOMANDO EL PANTALLAZO-----------------*/
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "acorrea@playvox.com");
       },
       function fail() {
           test.assertExists("input[name='email']");       
   });
   casper.wait(1000);
    casper.then(function() {
       //this.captureSelector("screenshot6.png", "html");
       casper.echo("----Email OK");
     });


/*---------INGRESANDO LA CONTRASEÑA EN EL INPUT Y TOMANDO EL PANTALLAZO----------------*/
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", "AndresyOcampo12");
       },
       function fail() {
           test.assertExists("input[name='password']","----Error Email ");
   });
   casper.wait(1000);
    casper.then(function() {
       //this.captureSelector("screenshot6.png", "html");
       casper.echo("----Password OK");
     });


/*-------------INGRESANDO EL TELEFONO EN EL INPUT Y TOMANDO EL PANTALLAZO--------------*/
   casper.waitForSelector("input[name='phone']",
       function success() {
           this.sendKeys("input[name='phone']", "3148507671");
       },
       function fail() {
           test.assertExists("input[name='phone']","----Error en Password ");
   });
    casper.wait(1000);
    casper.then(function() {
       //this.captureSelector("screenshot6.png", "html");
       casper.echo("----Telefono OK");
     });


/*-----------TOMANDO UN PANTALLAZO DEL FORMULARIO COMPLETO-------------------------*/
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block","Cuenta");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
   casper.wait(2000);
   casper.then(function() {
       this.captureSelector("screenshot5.png", "html");
   });


/*--------------DANDO UN CLICK EN EL BOTON SIGUIENTE-------------------------*/
   casper.waitForSelector("#signup-account > button", 
       function success() {
           test.assertExists("#signup-account > button","Siguiente");
           this.click("#signup-account > button");
       },
       function fail() {
           test.assertExists("#signup-account > button");
   });


/*--------------TOMANDO UNA CAPTURA DEL FORMULARIO DE FATURACION-------------------*/
   casper.waitForSelector(".col-md-offset-1.col-md-10",
       function success() {
           test.assertExists(".col-md-offset-1.col-md-10","Agrega tu método de pago");
           this.click(".col-md-offset-1.col-md-10");
       },
       function fail() {
           test.assertExists(".col-md-offset-1.col-md-10");
   });
   casper.waitForSelector(".col-md-offset-1.col-md-10",
       function success() {
           test.assertExists(".col-md-offset-1.col-md-10","Tipo de pago");
           this.click(".col-md-offset-1.col-md-10");
       },
       function fail() {
           test.assertExists(".col-md-offset-1.col-md-10");
   });   
   casper.wait(7000);
   casper.then(function() {
       this.captureSelector("screenshot7.png", "html");
        //casper.echo("----Metodo de Pago");
   });

/*------------------SELECCIONANDO EL TIPO DE PAGO----------------------------------*/
    casper.waitForSelector("input[name='auto_collection'][value='false']",
       function success() {
           test.assertExists("input[name='auto_collection'][value='false']","Seleccionando tipo de pago");
           this.click("input[name='auto_collection'][value='false']");
       },
       function fail() {
           test.assertExists("input[name='auto_collection'][value='false']", "Error en selector de INPUT");
   });
     casper.wait(1000);
     casper.then(function() {
       this.captureSelector("screenshot8.png", "html");
       casper.echo("----Tipo Factura seleccionado");
   });


/*------------------INGRESANDO LA DIRECCION 1 Y TOAMDO CAPTURA----------------------------------*/
      casper.waitForSelector("input[name='address-line-1']",
       function success() {
           this.sendKeys("input[name='address-line-1']", "cll 32 # 25-10");
       },
       function fail() {
           test.assertExists("input[name='address-line-1']");
   });
    casper.wait(1000);
     casper.then(function() {
       //this.captureSelector("screenshot8.png", "html");
       casper.echo("----Address Line 1 OK");
   });


/*------------------INGREASANDO LA DIRECCION 2---------------------------------*/
      casper.waitForSelector("input[name='address-line-2']",
       function success() {
           this.sendKeys("input[name='address-line-2']", "cll 39 # 32a-11");
       },
       function fail() {
           test.assertExists("input[name='address-line-2']");
   });
   casper.wait(1000);
     casper.then(function() {
       //this.captureSelector("screenshot8.png", "html");
       casper.echo("----Address Line 2 OK");
   });   

/*------------------SELECCIONANDO EL PAIS----------------------------------*/
   casper.then(function(){
    this.evaluate(function() {
        document.querySelector('select#country').selectedIndex = 49; 
    });
    casper.wait(2000);
     casper.then(function() {
       this.captureSelector("screenshot9.png", "html");
        casper.echo("----Pais seleccionado OK");   
  });
});


/*------------------INGRESANDO EL ESTADO Y TOMANDO CAPTURA-------------------------------*/   
  casper.waitForSelector("input[name='state']",
       function success() {
           this.sendKeys("input[name='state']", "Caldas");
       },
       function fail() {
           test.assertExists("input[name='state']");
   });
   casper.wait(1000);
     casper.then(function() {
       this.captureSelector("screenshot10.png", "html");
       casper.echo("----Estado OK");
   });
   /*
   casper.waitForSelector("form#signup-billing input[name='city']",
       function success() {
           test.assertExists("form#signup-billing input[name='city']");
           this.click("form#signup-billing input[name='city']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='city']");
   });*/


/*------------------INGRESANDO LA CIUDAD Y TOMANDO CAPTURA-------------------------------*/      
   casper.waitForSelector("input[name='city']",
       function success() {
           this.sendKeys("input[name='city']", "Manizales");
       },
       function fail() {
           test.assertExists("input[name='city']");
   });
    casper.wait(1000);
     casper.then(function() {
       //this.captureSelector("screenshot11.png", "html");
       casper.echo("----Ciudad OK");
   });
     /*
   casper.waitForSelector("form#signup-billing input[name='zip']",
       function success() {
           test.assertExists("form#signup-billing input[name='zip']");
           this.click("form#signup-billing input[name='zip']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='zip']");
   });*/


/*------------------INGRESANDO EL CODIGO POSTAL Y TOMANDO CAPTURA-------------------------------*/   
   casper.waitForSelector("input[name='zip']",
       function success() {
           this.sendKeys("input[name='zip']", "170004");
       },
       function fail() {
           test.assertExists("input[name='zip']");
   });
     casper.wait(1000);
     casper.then(function() {
       //this.captureSelector("screenshot12.png", "html");
       casper.echo("----Codigo postal OK");
   });


/*------------TOMANDO UNA CAPTURA DEL FORMULARIO DE FACTURACION COMPLETO-------------------------*/ 
  casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block","Factura");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block","Error en codigo postal");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot13.png", "html");
        //casper.echo("----Captura de factura OK");
   });


/*------------DANDO CLICK EN EL BOTON TERMINAR-------------------------*/ 
      casper.waitForSelector("form#signup-billing button",
       function success() {
           test.assertExists("form#signup-billing button","Terminar"); 
           this.click("form#signup-billing button");
       },
       function fail() {
           test.assertExists("form#signup-billing button");
   });
      casper.wait(1000);
       casper.then(function() {
       //this.captureSelector("screenshot14.png", "html");
        //casper.echo("----Terminar OK");
   });
    
/*------------TOMANDO CAPTURA DEL INGRESO A PLAYVOX.------------------------*/   
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block","PlayVox");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
   casper.wait(2000);
   casper.then(function() {       
       //this.captureSelector("screenshot15.png", "html");
        this.echo(this.getCurrentUrl());
       //casper.echo("----Captura de ingreso a Playvox. OK");
   });

/*------------DESCARGANDO EJEMPLO CSV------------------------*/

 casper.waitForSelector("p:nth-child(4) a:nth-child(1) strong",
       function success() {
           test.assertExists("p:nth-child(4) a:nth-child(1) strong","descarga de archivo CSV seleccionado");
           this.click("p:nth-child(4) a:nth-child(1) strong");
       },
       function fail() {
           test.assertExists("p:nth-child(4) a:nth-child(1) strong");
   });
    casper.wait(20000);
   casper.then(function() {
       casper.capture("screenshot16.png");
       //casper.echo("----Captura de ingreso a Playvox. OK");
   });
   casper.waitForSelector("#_file",
       function success() {
           test.assertExists("#_file","Importando archivo");
           this.click("#_file");        
       },
       function fail() {
           test.assertExists("#_file", "no fue pocible la importacion");
   });

   casper.then(function() {
    casper.page.uploadFile("#_file input[type='file']", "/home/andrescorrea/Downloads/import.csv");
       casper.wait(5000);
        casper.capture("screenshot17.png");
         //casper.echo("----Archivo cargado");
   });

/*------------IMPORTANDO CSV DESCARGADO------------------------*/
/*casper.page.uploadFile("#_file input[type='file']", "'/path/to/some/import.csv'");
   casper.wait(2000);
   casper.then(function() {
       this.captureSelector("screenshot17.png", "html");
       //casper.echo("----Captura de ingreso a Playvox. OK");
   });


   casper.waitForSelector("form#form_467 input[name='file_1']",
       function success() {
           test.assertExists("form#form_467 input[name='file_1']");
           this.click("form#form_467 input[name='file_1']");
             casper.page.uploadFile("form#form_467 input[name='file_1']","/home/andrescorrea/Downloads/import.csv");
       },
       function fail() {
           test.assertExists("form#form_467 input[name='file_1']", "no fue pocible la importacion");
   });
    casper.wait(1000);
      casper.then(function() {
       casper.capture("screenshot18.png");
       //casper.echo("----Captura de ingreso a Playvox. OK");
   });
 */
   casper.waitForSelector("button#btn-next",
       function success() {
           test.assertExists("button#btn-next","Archivo cargado");
           this.click("button#btn-next");
       },
       function fail() {
           test.assertExists("button#btn-next","archivo no cargado");
   });
     casper.wait(10000);
       casper.then(function() {
       casper.capture("screenshot18.png");
       //casper.echo("----Captura de ingreso a Playvox. OK");
   });  

   casper.waitForSelector("#main-content",
       function success() {
           test.assertExists("#main-content","Crear Scorecard");
           this.click("#main-content");
       },
       function fail() {
           test.assertExists("#main-content");
   });
   casper.wait(10000);
   casper.then(function() {
       casper.capture("screenshot20.png");
   });/*
   casper.waitForSelector("#scorecard-name",
       function success() {
           test.assertExists("#scorecard-name");
           this.click("#scorecard-name");
       },
       function fail() {
           test.assertExists("#scorecard-name");
   });
   casper.waitForSelector(".form-control.input-sm.GINGER_SOFTWARE_control",
       function success() {
           this.sendKeys(".form-control.input-sm.GINGER_SOFTWARE_control", "prueba1");
       },
       function fail() {
           test.assertExists(".form-control.input-sm.GINGER_SOFTWARE_control");
   });
   casper.waitForSelector("#form-scorecard-general .row",
       function success() {
           test.assertExists("#form-scorecard-general .row");
           this.click("#form-scorecard-general .row");
       },
       function fail() {
           test.assertExists("#form-scorecard-general .row");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot13.png", "html");
   });
   casper.waitForSelector("button#btn-finish-onboarding",
       function success() {
           test.assertExists("button#btn-finish-onboarding");
           this.click("button#btn-finish-onboarding");
       },
       function fail() {
           test.assertExists("button#btn-finish-onboarding");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot14.png", "html");
   });
*/
   casper.run(function() {test.done();});
});