var casper = require('casper').create();

var cookieFileName = 'cookie.txt';
casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');
phantom.cookiesEnabled = true;
casper.echo('Cookies enabled?: ' + phantom.cookiesEnabled);
casper.start('https://testing.plvx.co/login?next=%2F', function() {
 casper.echo("carga");
 });
casper.then(function(){
//Hacemos el login
casper.fill('form[action="/session"]',{
email: 'acorrea@playvox.com',
password: 'asdasd'
}, true);
 this.wait(10000);
 casper.capture("prueba1.png")
});
casper.then(function(){
});
// grab cookies from file
var fs = require('fs');
var utils = require('utils');
var cookies = JSON.stringify(phantom.cookies);
fs.write(cookieFileName, cookies, 644);
casper.page.setCookies(cookies);
casper.then(function readFile() {
stream = fs.open('ang_cor.csv', 'r');
line = stream.readLine();
i = 1;
while(line) {
//casper.echo(line);
casper.thenOpen(line, function()
{ casper.echo(i);
});
casper.wait(10000);
casper.capture("prueba2.png");
casper.then(function(){
IV
var aux= i+".html" ;
fs.write(aux, this.getHTML(), 644);
i++;
});
line = stream.readLine();
}
});
//casper.page.setCookies(cookies); y pondria las cookies
casper.run();