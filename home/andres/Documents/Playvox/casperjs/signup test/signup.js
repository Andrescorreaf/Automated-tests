/*==============================================================================*/
/* Casper generated Thu Oct 26 2017 08:46:07 GMT-0500 (COT) */
/*==============================================================================*/

var x = require('casper').selectXPath;
ERROR: the recorded sequence does not start with a url openning.
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
           this.sendKeys("input[name='company_name']", "PLili");
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
           this.sendKeys("input#subdomain", "Llilipizz");
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
           this.sendKeys("input[name='name']", "AndresLiliana");
       },
       function fail() {
           test.assertExists("input[name='name']");
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
           this.sendKeys("input[name='email']", "li.li");
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
           this.sendKeys("input[name='password']", "AndresyOcampo20");
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
           this.sendKeys("input[name='email']", "fe");
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
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "f");
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
   casper.waitForSelector("input[name='email']",
       function success() {
           this.sendKeys("input[name='email']", "fea");
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
   casper.waitForSelector("input[name='pw']",
       function success() {
           this.sendKeys("input[name='pw']", "Andresyblank06");
       },
       function fail() {
           test.assertExists("input[name='pw']");
   });
   casper.waitForSelector("form[name=login] input[type=submit][value='Log In']",
       function success() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
           this.click("form[name=login] input[type=submit][value='Log In']");
       },
       function fail() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
   });
   /* submit form */
   casper.waitForSelector("form[name=login] input[type=submit][value='Log In']",
       function success() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
           this.click("form[name=login] input[type=submit][value='Log In']");
       },
       function fail() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
   });
   /* submit form */
   casper.waitForSelector("form[name=login] input[name='pw']",
       function success() {
           test.assertExists("form[name=login] input[name='pw']");
           this.click("form[name=login] input[name='pw']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='pw']");
   });
   casper.waitForSelector("input[name='pw']",
       function success() {
           this.sendKeys("input[name='pw']", "andresyblank\r");
       },
       function fail() {
           test.assertExists("input[name='pw']");
   });
   casper.waitForSelector("form[name=login] input[type=submit][value='Log In']",
       function success() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
           this.click("form[name=login] input[type=submit][value='Log In']");
       },
       function fail() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
   });
   /* submit form */
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("input[name='username']",
       function success() {
           this.sendKeys("input[name='username']", "felipe_cf2009@hotmail.com");
       },
       function fail() {
           test.assertExists("input[name='username']");
   });
   casper.waitForSelector("input[name='pw']",
       function success() {
           this.sendKeys("input[name='pw']", "Andresyblank06\r");
       },
       function fail() {
           test.assertExists("input[name='pw']");
   });
   casper.waitForSelector("form[name=login] input[type=submit][value='Log In']",
       function success() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
           this.click("form[name=login] input[type=submit][value='Log In']");
       },
       function fail() {
           test.assertExists("form[name=login] input[type=submit][value='Log In']");
   });
   /* submit form */
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("input[name='username']",
       function success() {
           this.sendKeys("input[name='username']", "f");
       },
       function fail() {
           test.assertExists("input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector("form[name=login] input[name='username']",
       function success() {
           test.assertExists("form[name=login] input[name='username']");
           this.click("form[name=login] input[name='username']");
       },
       function fail() {
           test.assertExists("form[name=login] input[name='username']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='CRM Colombia - Conoce Nuestras Soluciones - softland.com.co‎']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='CRM Colombia - Conoce Nuestras Soluciones - softland.com.co‎']"));
           this.click(x("//a[normalize-space(text())='CRM Colombia - Conoce Nuestras Soluciones - softland.com.co‎']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='CRM Colombia - Conoce Nuestras Soluciones - softland.com.co‎']"));
   });
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
           this.sendKeys("input[name='q']", " ");
       },
       function fail() {
           test.assertExists("input[name='q']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Salesforce: Iniciar sesión']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Salesforce: Iniciar sesión']"));
           this.click(x("//a[normalize-space(text())='Salesforce: Iniciar sesión']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Salesforce: Iniciar sesión']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='¿Olvidó la contraseña?']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='¿Olvidó la contraseña?']"));
           this.click(x("//a[normalize-space(text())='¿Olvidó la contraseña?']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='¿Olvidó la contraseña?']"));
   });
   casper.waitForSelector("form[name=forgotPassword] input[type=submit][value='Continuar']",
       function success() {
           test.assertExists("form[name=forgotPassword] input[type=submit][value='Continuar']");
           this.click("form[name=forgotPassword] input[type=submit][value='Continuar']");
       },
       function fail() {
           test.assertExists("form[name=forgotPassword] input[type=submit][value='Continuar']");
   });
   /* submit form */
   casper.waitForSelector("form[name=forgotPassword] input[type=submit][value='Continuar']",
       function success() {
           test.assertExists("form[name=forgotPassword] input[type=submit][value='Continuar']");
           this.click("form[name=forgotPassword] input[type=submit][value='Continuar']");
       },
       function fail() {
           test.assertExists("form[name=forgotPassword] input[type=submit][value='Continuar']");
   });
   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='volvamos a enviar el mensaje de correo electrónico']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='volvamos a enviar el mensaje de correo electrónico']"));
           this.click(x("//a[normalize-space(text())='volvamos a enviar el mensaje de correo electrónico']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='volvamos a enviar el mensaje de correo electrónico']"));
   });
   casper.waitForSelector("form[name=forgotPassword] input[type=submit][value='Continue']",
       function success() {
           test.assertExists("form[name=forgotPassword] input[type=submit][value='Continue']");
           this.click("form[name=forgotPassword] input[type=submit][value='Continue']");
       },
       function fail() {
           test.assertExists("form[name=forgotPassword] input[type=submit][value='Continue']");
   });
   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='Probar de forma gratuita']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Probar de forma gratuita']"));
           this.click(x("//a[normalize-space(text())='Probar de forma gratuita']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Probar de forma gratuita']"));
   });
   casper.waitForSelector(".selectBox.selectBox-dropdown.selectBox-menuShowing.selectBox-active .selectBox-arrow",
       function success() {
           test.assertExists(".selectBox.selectBox-dropdown.selectBox-menuShowing.selectBox-active .selectBox-arrow");
           this.click(".selectBox.selectBox-dropdown.selectBox-menuShowing.selectBox-active .selectBox-arrow");
       },
       function fail() {
           test.assertExists(".selectBox.selectBox-dropdown.selectBox-menuShowing.selectBox-active .selectBox-arrow");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='1 - 5 empleados']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='1 - 5 empleados']"));
           this.click(x("//a[normalize-space(text())='1 - 5 empleados']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='1 - 5 empleados']"));
   });
   casper.waitForSelector("#pagewrap",
       function success() {
           test.assertExists("#pagewrap");
           this.click("#pagewrap");
       },
       function fail() {
           test.assertExists("#pagewrap");
   });
   casper.waitForSelector("form[name=signup_form] input[name='SubscriptionAgreement']",
       function success() {
           test.assertExists("form[name=signup_form] input[name='SubscriptionAgreement']");
           this.click("form[name=signup_form] input[name='SubscriptionAgreement']");
       },
       function fail() {
           test.assertExists("form[name=signup_form] input[name='SubscriptionAgreement']");
   });
   casper.waitForSelector("form[name=signup_form] input[name='_Lead.InfoEmail__c']",
       function success() {
           test.assertExists("form[name=signup_form] input[name='_Lead.InfoEmail__c']");
           this.click("form[name=signup_form] input[name='_Lead.InfoEmail__c']");
       },
       function fail() {
           test.assertExists("form[name=signup_form] input[name='_Lead.InfoEmail__c']");
   });
   casper.waitForSelector(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span",
       function success() {
           test.assertExists(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span");
           this.click(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span");
       },
       function fail() {
           test.assertExists(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span");
   });
   casper.waitForSelector(".selectBox.selectBox-dropdown.selectBox-active.selectBox-menuShowing .selectBox-arrow",
       function success() {
           test.assertExists(".selectBox.selectBox-dropdown.selectBox-active.selectBox-menuShowing .selectBox-arrow");
           this.click(".selectBox.selectBox-dropdown.selectBox-active.selectBox-menuShowing .selectBox-arrow");
       },
       function fail() {
           test.assertExists(".selectBox.selectBox-dropdown.selectBox-active.selectBox-menuShowing .selectBox-arrow");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Dr']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Dr']"));
           this.click(x("//a[normalize-space(text())='Dr']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Dr']"));
   });
   casper.waitForSelector("#pagewrap",
       function success() {
           test.assertExists("#pagewrap");
           this.click("#pagewrap");
       },
       function fail() {
           test.assertExists("#pagewrap");
   });
   casper.waitForSelector(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span",
       function success() {
           test.assertExists(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span");
           this.click(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span");
       },
       function fail() {
           test.assertExists(".submit.aloha-submit-mid-blue.radius-flat-all.btn.bg-gradient-darkblue.placeholder-style span");
   });
   casper.waitForSelector(".metricRow",
       function success() {
           test.assertExists(".metricRow");
           this.click(".metricRow");
       },
       function fail() {
           test.assertExists(".metricRow");
   });
   casper.waitForSelector(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate",
       function success() {
           test.assertExists(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate");
           this.click(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate");
       },
       function fail() {
           test.assertExists(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate");
   });
   casper.waitForSelector("form[name=editPage] input[type=submit][value='Permitir']",
       function success() {
           test.assertExists("form[name=editPage] input[type=submit][value='Permitir']");
           this.click("form[name=editPage] input[type=submit][value='Permitir']");
       },
       function fail() {
           test.assertExists("form[name=editPage] input[type=submit][value='Permitir']");
   });
   /* submit form */
   casper.waitForSelector("form[name=[object Object]] button#btn-confirm-connector",
       function success() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
           this.click("form[name=[object Object]] button#btn-confirm-connector");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
   });
   casper.waitForSelector("form[name=[object Object]] button#btn-confirm-connector",
       function success() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
           this.click("form[name=[object Object]] button#btn-confirm-connector");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
   });
   casper.waitForSelector(".icon-settings-component.icon-settings-bolt",
       function success() {
           test.assertExists(".icon-settings-component.icon-settings-bolt");
           this.click(".icon-settings-component.icon-settings-bolt");
       },
       function fail() {
           test.assertExists(".icon-settings-component.icon-settings-bolt");
   });
   casper.waitForSelector("#all_setup_home .slds-align-middle",
       function success() {
           test.assertExists("#all_setup_home .slds-align-middle");
           this.click("#all_setup_home .slds-align-middle");
       },
       function fail() {
           test.assertExists("#all_setup_home .slds-align-middle");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Lightning Experience']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Lightning Experience']"));
           this.click(x("//a[normalize-space(text())='Lightning Experience']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Lightning Experience']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Código personalizado']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Código personalizado']"));
           this.click(x("//a[normalize-space(text())='Código personalizado']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Código personalizado']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='API']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='API']"));
           this.click(x("//a[normalize-space(text())='API']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='API']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Acceso remoto']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Acceso remoto']"));
           this.click(x("//a[normalize-space(text())='Acceso remoto']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Acceso remoto']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Componentes Lightning']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Componentes Lightning']"));
           this.click(x("//a[normalize-space(text())='Componentes Lightning']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Componentes Lightning']"));
   });
   casper.waitForSelector(".label.bBody.truncate",
       function success() {
           test.assertExists(".label.bBody.truncate");
           this.click(".label.bBody.truncate");
       },
       function fail() {
           test.assertExists(".label.bBody.truncate");
   });
   casper.waitForSelector(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse .lightningPrimitiveIcon",
       function success() {
           test.assertExists(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse .lightningPrimitiveIcon");
           this.click(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse .lightningPrimitiveIcon");
       },
       function fail() {
           test.assertExists(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse .lightningPrimitiveIcon");
   });
   casper.waitForSelector(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate",
       function success() {
           test.assertExists(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate");
           this.click(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate");
       },
       function fail() {
           test.assertExists(".slds-context-bar__item.slds-shrink-none.slds-is-active .slds-truncate");
   });
   casper.waitForSelector(".slds-r4",
       function success() {
           test.assertExists(".slds-r4");
           this.click(".slds-r4");
       },
       function fail() {
           test.assertExists(".slds-r4");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Aplicaciones']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Aplicaciones']"));
           this.click(x("//a[normalize-space(text())='Aplicaciones']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Aplicaciones']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Aplicaciones conectadas']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Aplicaciones conectadas']"));
           this.click(x("//a[normalize-space(text())='Aplicaciones conectadas']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Aplicaciones conectadas']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Gestionar aplicaciones conectadas']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Gestionar aplicaciones conectadas']"));
           this.click(x("//a[normalize-space(text())='Gestionar aplicaciones conectadas']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Gestionar aplicaciones conectadas']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Uso de OAuth de aplicaciones conectadas']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Uso de OAuth de aplicaciones conectadas']"));
           this.click(x("//a[normalize-space(text())='Uso de OAuth de aplicaciones conectadas']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Uso de OAuth de aplicaciones conectadas']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Abrir']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Abrir']"));
           this.click(x("//a[normalize-space(text())='Abrir']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Abrir']"));
   });
   casper.waitForSelector(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse",
       function success() {
           test.assertExists(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse");
           this.click(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse");
       },
       function fail() {
           test.assertExists(".slds-button.slds-modal__close.closeIcon.slds-button--icon-bare.slds-button--icon-inverse");
   });
   casper.waitForSelector("form[name=[object Object]] button#btn-confirm-connector",
       function success() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
           this.click("form[name=[object Object]] button#btn-confirm-connector");
       },
       function fail() {
           test.assertExists("form[name=[object Object]] button#btn-confirm-connector");
   });
   casper.waitForSelector("#fullBg",
       function success() {
           test.assertExists("#fullBg");
           this.click("#fullBg");
       },
       function fail() {
           test.assertExists("#fullBg");
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