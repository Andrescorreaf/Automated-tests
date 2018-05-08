/*==============================================================================*/
/* Casper generated Tue Jun 20 2017 11:34:26 GMT-0500 (COT) */
/*==============================================================================*/

var casper = require('casper').selectXPath;


   casper.start('http://www.gmail.com');
   casper.waitForSelector("#identifierLink p",
       function success() {
           test.assertExists("#identifierLink p");
           this.click("#identifierLink p");
       },
       function fail() {
           test.assertExists("#identifierLink p");
   });
   casper.waitForSelector("form input[name='identifier']",
       function success() {
           test.assertExists("form input[name='identifier']");
           this.click("form input[name='identifier']");
       },
       function fail() {
           test.assertExists("form input[name='identifier']");
   });
   casper.waitForSelector("input[name='identifier']",
       function success() {
           this.sendKeys("input[name='identifier']", "afeccorrea7172@misena.edu.co\r");
       },
       function fail() {
           test.assertExists("input[name='identifier']");
   });

   casper.run(function() {test.done();});
});