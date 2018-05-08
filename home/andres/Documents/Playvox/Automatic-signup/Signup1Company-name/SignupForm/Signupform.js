/*==============================================================================*/
/* Casper generated Wed Nov 15 2017 16:03:44 GMT-0500 (-05) */
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
   casper.start('https://acme5.plvx.co/sign-up/account?company_name=Acme4');
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
   casper.waitForSelector("input[name='last_name']",
       function success() {
           this.sendKeys("input[name='last_name']", "Correa");
       },
       function fail() {
           test.assertExists("input[name='last_name']");
   });
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "acorrea@playvox.com");
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
           this.sendKeys("input[name='password']", "AndresyOcampo12");
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
       this.captureSelector("screenshot1.png", "html");
   });

   casper.run(function() {test.done();});
});