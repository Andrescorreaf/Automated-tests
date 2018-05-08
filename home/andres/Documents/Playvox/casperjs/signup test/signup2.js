/*==============================================================================*/
/* Casper generated Thu Oct 26 2017 15:38:00 GMT-0500 (COT) */
/*==============================================================================*/

var sign-up = require('casper').selectXPath;
casper.options.viewportSize = {width: 1366, height: 675};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://my.plvx.co/sign-up/salesforce?b=dsb');
   casper.waitForSelector("form#signup-company input[name='company_name']",
       function success() {
           test.assertExists("form#signup-company input[name='company_name']");
           this.click("form#signup-company input[name='company_name']");
       },
       function fail() {
           test.assertExists("form#signup-company input[name='company_name']");
   });
   casper.waitForSelector("input[name='company_name']",
       function success() {
           this.sendKeys("input[name='company_name']", "Pizzazlili");
       },
       function fail() {
           test.assertExists("input[name='company_name']");
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
   casper.waitForSelector("",
       function success() {
           test.assertExists("");
           this.click("");
       },
       function fail() {
           test.assertExists("");
   });
   casper.waitForSelector("form#signup-subdomain input#subdomain",
       function success() {
           test.assertExists("form#signup-subdomain input#subdomain");
           this.click("form#signup-subdomain input#subdomain");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input#subdomain");
   });
   casper.waitForSelector("form#signup-subdomain input#subdomain",
       function success() {
           test.assertExists("form#signup-subdomain input#subdomain");
           this.click("form#signup-subdomain input#subdomain");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input#subdomain");
   });
   casper.waitForSelector("form#signup-subdomain input#subdomain",
       function success() {
           test.assertExists("form#signup-subdomain input#subdomain");
           this.click("form#signup-subdomain input#subdomain");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input#subdomain");
   });
   casper.waitForSelector("input#subdomain",
       function success() {
           this.sendKeys("input#subdomain", "Pizzaslili");
       },
       function fail() {
           test.assertExists("input#subdomain");
   });
   casper.waitForSelector("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']",
       function success() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
           this.click("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
       },
       function fail() {
           test.assertExists("form#signup-subdomain input[type=submit][value='Siguiente: Cuenta PlayVox']");
   });
   casper.waitForSelector("form[name=[object Object]] input[name='name']",
       function success() {
           test.assertExists("form[name=[object Object]] input[name='name']");
           this.click("form[name=[object Object]] input[name='name']");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] input[name='name']");
   });
   casper.waitForSelector("input[name='name']",
       function success() {
           this.sendKeys("input[name='name']", "Liliana");
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
   casper.waitForSelector("input[name='last_name']",
       function success() {
           this.sendKeys("input[name='last_name']", "Ocampo");
       },
       function fail() {
           test.assertExists("input[name='last_name']");
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
           this.sendKeys("input[name='email']", "fe");
       },
       function fail() {
           test.assertExists("input[name='email']");
   });
   casper.waitForSelector("form[name=[object Object]] input[name='password']",
       function success() {
           test.assertExists("form[name=[object Object]] input[name='password']");
           this.click("form[name=[object Object]] input[name='password']");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] input[name='password']");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", "AndresyOcampo123456789");
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
           this.sendKeys("input[name='phone']", "3144422728");
       },
       function fail() {
           test.assertExists("input[name='phone']");
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
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "a");
       },
       function fail() {
           test.assertExists("input[name='email']");
   });
   casper.waitForSelector("form[name=[object Object]] button",
       function success() {
           test.assertExists("form[name=[object Object]] button");
           this.click("form[name=[object Object]] button");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] button");
   });
   casper.waitForSelector("form#additional-oauth button#btn-connect",
       function success() {
           test.assertExists("form#additional-oauth button#btn-connect");
           this.click("form#additional-oauth button#btn-connect");
       },
       function fail() {
           test.assertExists("form#additional-oauth button#btn-connect");
   });
   casper.waitForSelector("form[name=[object Object]] button#btn-confirm-connector",
       function success() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
           this.click("form[name=[object Object]] button#btn-confirm-connector");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
   });

   casper.run(function() {test.done();});
});