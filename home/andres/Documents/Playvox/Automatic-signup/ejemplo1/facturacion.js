/*==============================================================================*/
/* Casper generated Thu Nov 16 2017 17:36:19 GMT-0500 (-05) */
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
   casper.start('https://caso1.plvx.co/sign-up/billing');
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
       this.captureSelector("screenshot1.png", "html");
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
           this.sendKeys("input[name='address-line-1']", "cll 32 # 25-10");
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
           this.sendKeys("input[name='address-line-2']", "cll3  39 # 321a-11");
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
           this.sendKeys("input[name='zip']", "17");
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
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
   });

   casper.run(function() {test.done();});
});