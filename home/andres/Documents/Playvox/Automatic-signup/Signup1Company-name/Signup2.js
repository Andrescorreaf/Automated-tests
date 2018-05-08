/*==============================================================================*/
/* Casper generated Wed Nov 15 2017 15:58:16 GMT-0500 (-05) */
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
casper.test.begin('Signup standalone', function(test) {
   casper.start('https://my.plvx.co/sign-up?b=dsb?b=dsb');
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
   });
   casper.waitForSelector("input[name='company_name']",
       function success() {
           this.sendKeys("input[name='company_name']", "TaxistasMani");
       },
       function fail() {
           test.assertExists("input[name='company_name']");
   });
   casper.waitForSelector(".col-md-offset-1.col-md-10",
       function success() {
           test.assertExists(".col-md-offset-1.col-md-10");
           this.click(".col-md-offset-1.col-md-10");
       },
       function fail() {
           test.assertExists(".col-md-offset-1.col-md-10");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
   });
   casper.waitForSelector("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']",
       function success() {
           test.assertExists("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']");
           this.click("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']");
       },
       function fail() {
           test.assertExists("form#signup-company input[type=submit][value='Siguiente: Nombre de dominio']");
   });
   /* submit form */
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot3.png", "html");
   });
   casper.waitForSelector("input#subdomain",
       function success() {
           this.sendKeys("input#subdomain", "Taxis2");
       },
       function fail() {
           test.assertExists("input#subdomain");
   });
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot4.png", "html");
   });
   casper.waitForSelector(".col-md-offset-1.col-md-10",
       function success() {
           test.assertExists(".col-md-offset-1.col-md-10");
           this.click(".col-md-offset-1.col-md-10");
       },
       function fail() {
           test.assertExists(".col-md-offset-1.col-md-10");
   });
   casper.waitForSelector("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']",
       function success() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
           this.click("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
   });
   /* submit form */
   casper.thenOpen('https://Taxis2.plvx.co/sign-up/account?company_name=TaxistasMani');
     casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
   });
  casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot5.png", "html"); 
   });
   casper.waitForSelector("input[name='name']",
       function success() {
           this.sendKeys("input[name='name']", "Andres\r");
       },
       function fail() {
           test.assertExists("input[name='name']");
   });
   casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot6.png", "html");
       casper.echo("----Primer nombre ingresado");
     });

   casper.waitForSelector("#last_name",
       function success() {
           this.sendKeys("#last_name", "Correa");

       },
       function fail() {
           test.assertExists("#last_name");
   });

   casper.wait(1000);
     casper.then(function() {
       this.captureSelector("screenshot7.png", "html");
        casper.echo("----Segundo nombre ingresado");
   });

   casper.waitForSelector("#email",
       function success() {
           this.sendKeys("#email", "acorrea@playvox.com");
       },
       function fail() {
           test.assertExists("#email");
   });
   casper.wait(1000);
     casper.then(function() {
       this.captureSelector("screenshot8.png", "html");
        casper.echo("----Correo ingresado");
   });
   
   casper.waitForSelector("#password",
       function success() {
           this.sendKeys("#password", "AndresyOcampo12");
       },
       function fail() {
           test.assertExists("#password");
   });
   casper.wait(1000);
     casper.then(function() {
       this.captureSelector("screenshot9.png", "html");
        casper.echo("----Password ingresado");
   });

   casper.waitForSelector("#phone",
       function success() {
           this.sendKeys("#phone", "3148507671");
       },
       function fail() {
           test.assertExists("#phone");
   });
   casper.wait(1000);
     casper.then(function() {
       this.captureSelector("screenshot10.png", "html");
        casper.echo("----Telefono ingresado");
   });

   casper.waitForSelector(".col-md-offset-1.col-md-10",
       function success() {
           test.assertExists(".col-md-offset-1.col-md-10");
           this.click(".col-md-offset-1.col-md-10");
       },
       function fail() {
           test.assertExists(".col-md-offset-1.col-md-10");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot11.png", "html");
        casper.echo("Time zone selecionada");
   });
   casper.waitForSelector("#signup-account > button", 
       function success() {
           test.assertExists("#signup-account > button");
           this.click("#signup-account > button");
       },
       function fail() {
           test.assertExists("#signup-account > button");
   });
   casper.waitForSelector(".col-md-offset-1.col-md-10",
       function success() {
           test.assertExists(".col-md-offset-1.col-md-10");
           this.click(".col-md-offset-1.col-md-10");
       },
       function fail() {
           test.assertExists(".col-md-offset-1.col-md-10");
   });
   casper.waitForSelector("#signup-billing .general-block",
       function success() {
           test.assertExists("#signup-billing .general-block");
           this.click("#signup-billing .general-block");
       },
       function fail() {
           test.assertExists("#signup-billing .general-block");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot12.png", "html");
   });

   casper.run(function() {test.done();});
});