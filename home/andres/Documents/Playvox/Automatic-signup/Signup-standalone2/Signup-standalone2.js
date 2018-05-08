/*==============================================================================*/
/* Casper generated Tue Nov 14 2017 11:14:55 GMT-0500 (-05) */
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
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://my.plvx.co/sign-up?b=dsb?b=dsb%27');
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
           this.sendKeys("input[name='company_name']", "Acme3");
       },
       function fail() {
           test.assertExists("input[name='company_name']");
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
           this.sendKeys("input#subdomain", "Acme3");
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
   casper.waitForSelector("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']",
       function success() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
           this.click("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
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
       this.captureSelector("screenshot5.png", "html");
   });
   casper.waitForSelector("input[name='name']",
       function success() {
           this.sendKeys("input[name='name']", "Andres");
       },
       function fail() {
           test.assertExists("input[name='name']");
   });
   casper.waitForSelector("form[name=[object Object]] input[name='last_name']",
       function success() {
           test.assertExists("form[name=[object Object]] input[name='last_name']");
           this.click("form[name=[object Object]] input[name='last_name']");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] input[name='last_name']");
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
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
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
           this.sendKeys("input[name='email']", "feacorrea@playvox.com");
       },
       function fail() {
           test.assertExists("input[name='email']");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", "AnAndresyOcqmpo12");
       },
       function fail() {
           test.assertExists("input[name='password']");
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
   casper.waitForSelector(".general-block",
       function success() {
           test.assertExists(".general-block");
           this.click(".general-block");
       },
       function fail() {
           test.assertExists(".general-block");
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
       this.captureSelector("screenshot6.png", "html");
   });
   casper.waitForSelector("form[name=[object Object]] button",
       function success() {
           test.assertExists("form[name=[object Object]] button");
           this.click("form[name=[object Object]] button");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] button");
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
       this.captureSelector("screenshot7.png", "html");
   });
   casper.waitForSelector("form#signup-billing input[name='address-line-1']",
       function success() {
           test.assertExists("form#signup-billing input[name='address-line-1']");
           this.click("form#signup-billing input[name='address-line-1']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='address-line-1']");
   });
   casper.waitForSelector("input[name='address-line-1']",
       function success() {
           this.sendKeys("input[name='address-line-1']", "cll 32#25-10");
       },
       function fail() {
           test.assertExists("input[name='address-line-1']");
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
           this.sendKeys("input[name='address-line-2']", "cll 39#32a-11");
       },
       function fail() {
           test.assertExists("input[name='address-line-2']");
   });
   casper.waitForSelector("#signup-billing .general-block",
       function success() {
           test.assertExists("#signup-billing .general-block");
           this.click("#signup-billing .general-block");
       },
       function fail() {
           test.assertExists("#signup-billing .general-block");
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
           this.sendKeys("input[name='state']", "Caldaqs");
       },
       function fail() {
           test.assertExists("input[name='state']");
   });
   casper.waitForSelector("form#signup-billing input[name='city']",
       function success() {
           test.assertExists("form#signup-billing input[name='city']");
           this.click("form#signup-billing input[name='city']");
       },
       function fail() {
           test.assertExists("form#signup-billing input[name='city']");
   });
   casper.waitForSelector("input[name='city']",
       function success() {
           this.sendKeys("input[name='city']", "Manizales");
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
           this.sendKeys("input[name='zip']", "17004004");
       },
       function fail() {
           test.assertExists("input[name='zip']");
   });
   casper.waitForSelector("#signup-billing .general-block",
       function success() {
           test.assertExists("#signup-billing .general-block");
           this.click("#signup-billing .general-block");
       },
       function fail() {
           test.assertExists("#signup-billing .general-block");
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
       this.captureSelector("screenshot8.png", "html");
   });
   casper.waitForSelector("form#signup-billing button",
       function success() {
           test.assertExists("form#signup-billing button");
           this.click("form#signup-billing button");
       },
       function fail() {
           test.assertExists("form#signup-billing button");
   });
   casper.waitForSelector(".general-block .row",
       function success() {
           test.assertExists(".general-block .row");
           this.click(".general-block .row");
       },
       function fail() {
           test.assertExists(".general-block .row");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot9.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot10.png", "html");
   });
   casper.waitForSelector("button#btn-next",
       function success() {
           test.assertExists("button#btn-next");
           this.click("button#btn-next");
       },
       function fail() {
           test.assertExists("button#btn-next");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot11.png", "html");
   });
   casper.waitForSelector("#clone-template strong",
       function success() {
           test.assertExists("#clone-template strong");
           this.click("#clone-template strong");
       },
       function fail() {
           test.assertExists("#clone-template strong");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot12.png", "html");
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
       this.captureSelector("screenshot13.png", "html");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Salir']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Salir']"));
           this.click(x("//a[normalize-space(text())='Salir']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Salir']"));
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot14.png", "html");
   });

   casper.run(function() {test.done();});
});