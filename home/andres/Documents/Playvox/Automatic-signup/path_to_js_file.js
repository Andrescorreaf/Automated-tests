//Create a new casper instance
var x = require('casper').selectXPath; 
var testSuite = {
	//Create a function that opens the SG web page and shows the webpage title
	open_solidgear: function()
	{
		casper.test.begin('OPEN SOLIDGEAR WEB PAGE', function suite(test)
		{
			casper.start('http://www.solidgear.es/', function ()
			{
				//Shows SG web page title
				this.echo(this.getTitle());
			});

			casper.run(function()
			{
				test.done();
			});
		});
	},

	//Function which calls every function previously identified
	init: function()
	{
		testSuite.open_solidgear();
	},
};

testSuite.init();