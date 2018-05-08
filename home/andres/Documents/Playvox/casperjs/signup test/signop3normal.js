/*==============================================================================*/
/* Casper generated Thu Nov 09 2017 17:10:12 GMT-0500 (COT) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1366, height: 624};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://my.plvx.co/sign-up?b=dsb?b=dsb');
   casper.waitForSelector("form#signup-company input[name='company_name']",
       function success() {
           test.assertExists("form#signup-company input[name='company_name']");
           this.click("form#signup-company input[name='company_name']");
       },
       function fail() {
           test.assertExists("form#signup-company input[name='company_name']");
   });
    casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
   });
   casper.waitForSelector("input[name='company_name']",
       function success() {
           this.sendKeys("input[name='company_name']", "Signup1");
       },
       function fail() {
           test.assertExists("input[name='company_name']");
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
  casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot3.png", "html");
   });
   /* submit form */
   casper.waitForSelector("form#signup-subdomain input#subdomain",
       function success() {
           test.assertExists("form#signup-subdomain input#subdomain");
           this.click("form#signup-subdomain input#subdomain");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input#subdomain");
   });
   casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot4.png", "html");
   });
   casper.waitForSelector("input#subdomain",
       function success() {
           this.sendKeys("input#subdomain", "sig");
       },
       function fail() {
           test.assertExists("input#subdomain");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot5.png", "html");
   });
   casper.waitForSelector("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']",
       function success() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
           this.click("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
   });
    casper.wait(1000);
      casper.then(function() {
       this.captureSelector("screenshot6.png", "html");
   });
   /* submit form */
   casper.waitForSelector("input[name='name']",
       function success() {
           this.sendKeys("input[name='name']", "Andres");
       },
       function fail() {
           test.assertExists("input[name='name']");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot7.png", "html");
   });
   casper.waitForSelector("form[name=[object Object]] input[name='last_name']",
       function success() {
           test.assertExists("form[name=[object Object]] input[name='last_name']");
           this.click("form[name=[object Object]] input[name='last_name']");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] input[name='last_name']");
   });
   casper.waitForSelector("input[name='last_name']",
       function success() {
           this.sendKeys("input[name='last_name']", "Correa");
       },
       function fail() {
           test.assertExists("input[name='last_name']");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot8.png", "html");
   });
   casper.waitForSelector("form[name=[object Object]] input[name='email']",
       function success() {
           test.assertExists("form[name=[object Object]] input[name='email']");
           this.click("form[name=[object Object]] input[name='email']");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] input[name='email']");
   });
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "A");
       },
       function fail() {
           test.assertExists("input[name='email']");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot9.png", "html");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", "AndresyOcampo12");
       },
       function fail() {
           test.assertExists("input[name='password']");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot10.png", "html");
   });
   casper.waitForSelector("form[name=[object Object]] input[name='phone']",
       function success() {
           test.assertExists("form[name=[object Object]] input[name='phone']");
           this.click("form[name=[object Object]] input[name='phone']");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] input[name='phone']");
   });
   casper.waitForSelector("input[name='phone']",
       function success() {
           this.sendKeys("input[name='phone']", "3148507671");
       },
       function fail() {
           test.assertExists("input[name='phone']");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot11.png", "html");
   });
   casper.waitForSelector("#fullBg",
       function success() {
           test.assertExists("#fullBg");
           this.click("#fullBg");
       },
       function fail() {
           test.assertExists("#fullBg");
   });
   casper.waitForSelector("form[name=[object Object]] button",
       function success() {
           test.assertExists("form[name=[object Object]] button");
           this.click("form[name=[object Object]] button");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] button");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot12.png", "html");
   });
   casper.waitForSelector("form#signup-billing input[name='auto_collection']",
       function success() {
           test.assertExists("form#signup-billing input[name='auto_collection']");
           this.click("form#signup-billing input[name='auto_collection']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='auto_collection']");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot13.png", "html");
   });
   casper.waitForSelector("input[name='address-line-1']",
       function success() {
           this.sendKeys("input[name='address-line-1']", "cll 32 # 25-10");
       },
       function fail() {
           test.assertExists("input[name='address-line-1']");
   });
    casper.wait(1000);
    casper.then(function() {
       this.captureSelector("screenshot14.png", "html");
   });
   casper.waitForSelector("form#signup-billing input[name='address-line-2']",
       function success() {
           test.assertExists("form#signup-billing input[name='address-line-2']");
           this.click("form#signup-billing input[name='address-line-2']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='address-line-2']");
   });
   casper.waitForSelector("input[name='address-line-2']",
       function success() {
           this.sendKeys("input[name='address-line-2']", "cll39 # 32a-11");
       },
       function fail() {
           test.assertExists("input[name='address-line-2']");
   });
   casper.waitForSelector("#country",
       function success() {
           test.assertExists("#country");
           this.click("#country");
       },
       function fail() {
           test.assertExists("#country");
   });
   casper.waitForSelector("form#signup-billing input[name='state']",
       function success() {
           test.assertExists("form#signup-billing input[name='state']");
           this.click("form#signup-billing input[name='state']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='state']");
   });
   casper.waitForSelector("input[name='state']",
       function success() {
           this.sendKeys("input[name='state']", "Caldas");
       },
       function fail() {
           test.assertExists("input[name='state']");
   });
   casper.waitForSelector("input[name='city']",
       function success() {
           this.sendKeys("input[name='city']", "CManizales");
       },
       function fail() {
           test.assertExists("input[name='city']");
   });
   casper.waitForSelector("form#signup-billing input[name='zip']",
       function success() {
           test.assertExists("form#signup-billing input[name='zip']");
           this.click("form#signup-billing input[name='zip']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='zip']");
   });
   casper.waitForSelector("input[name='zip']",
       function success() {
           this.sendKeys("input[name='zip']", "1470004");
       },
       function fail() {
           test.assertExists("input[name='zip']");
   });
   casper.waitForSelector("form#signup-billing button",
       function success() {
           test.assertExists("form#signup-billing button");
           this.click("form#signup-billing button");
       },
       function fail() {
           test.assertExists("form#signup-billing button");
   });

   casper.run(function() {test.done();});
});