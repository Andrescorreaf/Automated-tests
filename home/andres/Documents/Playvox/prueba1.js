/*==============================================================================*/
/* prueba buscando a gmail
/*==============================================================================*/


var casper = require('casper').selectXPath;
casper.options.viewportSize = {width: 1366, height: 649};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://www.google.es/');
   casper.waitForSelector("form[name=f] input[name='q']",
       function success() {
           test.assertExists("form[name=f] input[name='q']");
           this.click("form[name=f] input[name='q']");
       },
       function fail() {
           test.assertExists("form[name=f] input[name='q']");
   });
   casper.waitForSelector("input[name='q']",
       function success() {
           this.sendKeys("input[name='q']", "gmail");
       },
       function fail() {
           test.assertExists("input[name='q']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Gmail - Google']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Gmail - Google']"));
           this.click(x("//a[normalize-space(text())='Gmail - Google']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Gmail - Google']"));
   });

   casper.run(function() {test.done();});
});