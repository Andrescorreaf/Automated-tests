/*==============================================================================*/
/* Casper generated Mon Nov 20 2017 11:17:27 GMT-0500 (-05) */
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
casper.test.begin('Signup ', function(test) {
   casper.start('https://team.playvox.com/login');
   casper.waitForSelector("form#login input[name='email']",
       function success() {
           test.assertExists("form#login input[name='email']");
           this.click("form#login input[name='email']");
       },
       function fail() {
           test.assertExists("form#login input[name='email']");
   });
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "acorrea@playvox.com");
       },
       function fail() {
           test.assertExists("input[name='email']");
   });
     casper.wait(3000);
     casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
       casper.echo("----Correo Ingresado");
   });

   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", "AndresyOcampo15");
       },
       function fail() {
           test.assertExists("input[name='password']");
   });
     casper.wait(3000);
     casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
       casper.echo("----Password OK");
   });

   casper.waitForSelector("#login > div.col-md-offset-1.col-md-10 > input",
       function success() {
           this.sendKeys("#login > div.col-md-offset-1.col-md-10 > input");
       },
       function fail() {
           test.assertExists("#login > div.col-md-offset-1.col-md-10 > input");
   });
     casper.wait(3000);
     casper.then(function() {
       this.captureSelector("screenshot3.png", "html");
       casper.echo("----Ingreso OK");
   });

   /* submit form */
   /*
   casper.waitForSelector(x("//a[normalize-space(text())='Log out']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Log out']"));
           this.click(x("//a[normalize-space(text())='Log out']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Log out']"));
   });
   */

   casper.run(function() {test.done();});
});