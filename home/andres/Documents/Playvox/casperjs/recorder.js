/*==============================================================================*/
/* Casper generated Mon Jul 24 2017 16:56:40 GMT-0500 (COT) */
/*==============================================================================*/

var scenario1 = require('casper').selectXPath;
   casper.waitForSelector("#main-content .col-md-12",
       function success() {
           test.assertExists("#main-content .col-md-12");
           this.click("#main-content .col-md-12");
       },
       function fail() {
           test.assertExists("#main-content .col-md-12");
   });
   casper.waitForSelector(".navbar-fixed-bottom.footer-transparent .pull-right",
       function success() {
           test.assertExists(".navbar-fixed-bottom.footer-transparent .pull-right");
           this.click(".navbar-fixed-bottom.footer-transparent .pull-right");
       },
       function fail() {
           test.assertExists(".navbar-fixed-bottom.footer-transparent .pull-right");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='2']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='2']"));
           this.click(x("//a[normalize-space(text())='2']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='2']"));
   });
   casper.waitForSelector(".general-block.template-name-wrapper.tcenter.block-template.selected-template",
       function success() {
           test.assertExists(".general-block.template-name-wrapper.tcenter.block-template.selected-template");
           this.click(".general-block.template-name-wrapper.tcenter.block-template.selected-template");
       },
       function fail() {
           test.assertExists(".general-block.template-name-wrapper.tcenter.block-template.selected-template");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='reference']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='reference']");
           this.click("form#form-scorecard-answer input[name='reference']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='reference']");
   });
   casper.waitForSelector("input[name='reference']",
       function success() {
           this.sendKeys("input[name='reference']", "01");
       },
       function fail() {
           test.assertExists("input[name='reference']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665c7a1d41c8068a7734e4']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665c7a1d41c8068a7734e4']");
           this.click("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665c7a1d41c8068a7734e4']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665c7a1d41c8068a7734e4']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665e761d41c8068ab2a00f']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665e761d41c8068ab2a00f']");
           this.click("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665e761d41c8068ab2a00f']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665c7a1d41c8068a7734e5-58665e761d41c8068ab2a00f']");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("#comment-question-58665c7a1d41c8068a7734e4",
       function success() {
           test.assertExists("#comment-question-58665c7a1d41c8068a7734e4");
           this.click("#comment-question-58665c7a1d41c8068a7734e4");
       },
       function fail() {
           test.assertExists("#comment-question-58665c7a1d41c8068a7734e4");
   });
   casper.waitForSelector("textarea[name='comment-58665c7a1d41c8068a7734e5-58665c7a1d41c8068a7734e4']",
       function success() {
           this.sendKeys("textarea[name='comment-58665c7a1d41c8068a7734e5-58665c7a1d41c8068a7734e4']", "Pruewbeeba0 1");
       },
       function fail() {
           test.assertExists("textarea[name='comment-58665c7a1d41c8068a7734e5-58665c7a1d41c8068a7734e4']");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("textarea[name='comment-58665c7a1d41c8068a7734e5-58665e761d41c8068ab2a00f']",
       function success() {
           this.sendKeys("textarea[name='comment-58665c7a1d41c8068a7734e5-58665e761d41c8068ab2a00f']", "prueba 2");
       },
       function fail() {
           test.assertExists("textarea[name='comment-58665c7a1d41c8068a7734e5-58665e761d41c8068ab2a00f']");
   });
   casper.waitForSelector("#comment-section-58665c7a1d41c8068a7734e5",
       function success() {
           test.assertExists("#comment-section-58665c7a1d41c8068a7734e5");
           this.click("#comment-section-58665c7a1d41c8068a7734e5");
       },
       function fail() {
           test.assertExists("#comment-section-58665c7a1d41c8068a7734e5");
   });
   casper.waitForSelector("textarea[name='comment-58665c7a1d41c8068a7734e5']",
       function success() {
           this.sendKeys("textarea[name='comment-58665c7a1d41c8068a7734e5']", "validacion ¿es");
       },
       function fail() {
           test.assertExists("textarea[name='comment-58665c7a1d41c8068a7734e5']");
   });
   casper.waitForSelector("textarea[name='comment-58665ebf1d41c8068ab2a014']",
       function success() {
           this.sendKeys("textarea[name='comment-58665ebf1d41c8068ab2a014']", "pruebas ");
       },
       function fail() {
           test.assertExists("textarea[name='comment-58665ebf1d41c8068ab2a014']");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("textarea[name='comment-58665f1e1d41c8068ab2a018-58665f1e1d41c8068ab2a017']",
       function success() {
           this.sendKeys("textarea[name='comment-58665f1e1d41c8068ab2a018-58665f1e1d41c8068ab2a017']", "validaciones");
       },
       function fail() {
           test.assertExists("textarea[name='comment-58665f1e1d41c8068ab2a018-58665f1e1d41c8068ab2a017']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665f8f1d41c8068ab2a01c']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665f8f1d41c8068ab2a01c']");
           this.click("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665f8f1d41c8068ab2a01c']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665f8f1d41c8068ab2a01c']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665fee1d41c8068ab2a020']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665fee1d41c8068ab2a020']");
           this.click("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665fee1d41c8068ab2a020']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-58665f1e1d41c8068ab2a018-58665fee1d41c8068ab2a020']");
   });
   casper.waitForSelector("textarea[name='comment-58665f1e1d41c8068ab2a018']",
       function success() {
           this.sendKeys("textarea[name='comment-58665f1e1d41c8068ab2a018']", "pruebas ");
       },
       function fail() {
           test.assertExists("textarea[name='comment-58665f1e1d41c8068ab2a018']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-5866605a1d41c8068ab2a024']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-5866605a1d41c8068ab2a024']");
           this.click("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-5866605a1d41c8068ab2a024']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-5866605a1d41c8068ab2a024']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-586660c61d41c8068ab2a029']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-586660c61d41c8068ab2a029']");
           this.click("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-586660c61d41c8068ab2a029']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-5866605a1d41c8068ab2a025-586660c61d41c8068ab2a029']");
   });
   casper.waitForSelector("textarea[name='comment-5866605a1d41c8068ab2a025']",
       function success() {
           this.sendKeys("textarea[name='comment-5866605a1d41c8068ab2a025']", "test ");
       },
       function fail() {
           test.assertExists("textarea[name='comment-5866605a1d41c8068ab2a025']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661321d41c8068ab2a02d']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661321d41c8068ab2a02d']");
           this.click("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661321d41c8068ab2a02d']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661321d41c8068ab2a02d']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661a81d41c8068ab2a032']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661a81d41c8068ab2a032']");
           this.click("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661a81d41c8068ab2a032']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586661a81d41c8068ab2a032']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586662291d41c8068ab2a039']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586662291d41c8068ab2a039']");
           this.click("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586662291d41c8068ab2a039']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-586662291d41c8068ab2a039']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-5866625d1d41c8068ab2a03d']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-5866625d1d41c8068ab2a03d']");
           this.click("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-5866625d1d41c8068ab2a03d']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586661321d41c8068ab2a02e-5866625d1d41c8068ab2a03d']");
   });
   casper.waitForSelector("#comment-section-586661321d41c8068ab2a02e",
       function success() {
           test.assertExists("#comment-section-586661321d41c8068ab2a02e");
           this.click("#comment-section-586661321d41c8068ab2a02e");
       },
       function fail() {
           test.assertExists("#comment-section-586661321d41c8068ab2a02e");
   });
   casper.waitForSelector("textarea[name='comment-586661321d41c8068ab2a02e']",
       function success() {
           this.sendKeys("textarea[name='comment-586661321d41c8068ab2a02e']", "validaciones");
       },
       function fail() {
           test.assertExists("textarea[name='comment-586661321d41c8068ab2a02e']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586663011d41c8068ab2a045-586663011d41c8068ab2a044']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663011d41c8068ab2a045-586663011d41c8068ab2a044']");
           this.click("form#form-scorecard-answer input[name='answer-586663011d41c8068ab2a045-586663011d41c8068ab2a044']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663011d41c8068ab2a045-586663011d41c8068ab2a044']");
   });
   casper.waitForSelector("#comment-section-586663011d41c8068ab2a045",
       function success() {
           test.assertExists("#comment-section-586663011d41c8068ab2a045");
           this.click("#comment-section-586663011d41c8068ab2a045");
       },
       function fail() {
           test.assertExists("#comment-section-586663011d41c8068ab2a045");
   });
   casper.waitForSelector("textarea[name='comment-586663011d41c8068ab2a045']",
       function success() {
           this.sendKeys("textarea[name='comment-586663011d41c8068ab2a045']", "tesrt");
       },
       function fail() {
           test.assertExists("textarea[name='comment-586663011d41c8068ab2a045']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663471d41c8068ab2a049']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663471d41c8068ab2a049']");
           this.click("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663471d41c8068ab2a049']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663471d41c8068ab2a049']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663821d41c8068ab2a04d']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663821d41c8068ab2a04d']");
           this.click("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663821d41c8068ab2a04d']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586663821d41c8068ab2a04d']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586664461d41c8068ab2a051']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586664461d41c8068ab2a051']");
           this.click("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586664461d41c8068ab2a051']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586664461d41c8068ab2a051']");
   });
   casper.waitForSelector("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586665011d41c8068ab2a057']",
       function success() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586665011d41c8068ab2a057']");
           this.click("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586665011d41c8068ab2a057']");
       },
       function fail() {
           test.assertExists("form#form-scorecard-answer input[name='answer-586663471d41c8068ab2a04a-586665011d41c8068ab2a057']");
   });
   casper.waitForSelector("#comment-section-586663471d41c8068ab2a04a",
       function success() {
           test.assertExists("#comment-section-586663471d41c8068ab2a04a");
           this.click("#comment-section-586663471d41c8068ab2a04a");
       },
       function fail() {
           test.assertExists("#comment-section-586663471d41c8068ab2a04a");
   });
   casper.waitForSelector("textarea[name='comment-586663471d41c8068ab2a04a']",
       function success() {
           this.sendKeys("textarea[name='comment-586663471d41c8068ab2a04a']", "testing");
       },
       function fail() {
           test.assertExists("textarea[name='comment-586663471d41c8068ab2a04a']");
   });
   casper.waitForSelector("#comment-section-586666661d41c8068ab2a063",
       function success() {
           test.assertExists("#comment-section-586666661d41c8068ab2a063");
           this.click("#comment-section-586666661d41c8068ab2a063");
       },
       function fail() {
           test.assertExists("#comment-section-586666661d41c8068ab2a063");
   });
   casper.waitForSelector("textarea[name='comment-586666661d41c8068ab2a063']",
       function success() {
           this.sendKeys("textarea[name='comment-586666661d41c8068ab2a063']", "test ");
       },
       function fail() {
           test.assertExists("textarea[name='comment-586666661d41c8068ab2a063']");
   });
   casper.waitForSelector("#comment-section-586666af1d41c8068ab2a067",
       function success() {
           test.assertExists("#comment-section-586666af1d41c8068ab2a067");
           this.click("#comment-section-586666af1d41c8068ab2a067");
       },
       function fail() {
           test.assertExists("#comment-section-586666af1d41c8068ab2a067");
   });
   casper.waitForSelector("textarea[name='comment-586666af1d41c8068ab2a067']",
       function success() {
           this.sendKeys("textarea[name='comment-586666af1d41c8068ab2a067']", "pruebas");
       },
       function fail() {
           test.assertExists("textarea[name='comment-586666af1d41c8068ab2a067']");
   });
   casper.waitForSelector(".general-block:nth-child(32) .col-md-6:nth-child(1) h3",
       function success() {
           test.assertExists(".general-block:nth-child(32) .col-md-6:nth-child(1) h3");
           this.click(".general-block:nth-child(32) .col-md-6:nth-child(1) h3");
       },
       function fail() {
           test.assertExists(".general-block:nth-child(32) .col-md-6:nth-child(1) h3");
   });
   casper.waitForSelector("#avg-score",
       function success() {
           test.assertExists("#avg-score");
           this.click("#avg-score");
       },
       function fail() {
           test.assertExists("#avg-score");
   });
   casper.waitForSelector("#comment-section-586666af1d41c8068ab2a067",
       function success() {
           test.assertExists("#comment-section-586666af1d41c8068ab2a067");
           this.click("#comment-section-586666af1d41c8068ab2a067");
       },
       function fail() {
           test.assertExists("#comment-section-586666af1d41c8068ab2a067");
   });
   casper.waitForSelector(".general-block:nth-child(32) .col-md-6:nth-child(1)",
       function success() {
           test.assertExists(".general-block:nth-child(32) .col-md-6:nth-child(1)");
           this.click(".general-block:nth-child(32) .col-md-6:nth-child(1)");
       },
       function fail() {
           test.assertExists(".general-block:nth-child(32) .col-md-6:nth-child(1)");
   });
   casper.waitForSelector("#clone-template strong",
       function success() {
           test.assertExists("#clone-template strong");
           this.click("#clone-template strong");
       },
       function fail() {
           test.assertExists("#clone-template strong");
   });
   casper.waitForSelector("#scorecard-name",
       function success() {
           test.assertExists("#scorecard-name");
           this.click("#scorecard-name");
       },
       function fail() {
           test.assertExists("#scorecard-name");
   });
   casper.waitForSelector(".form-control.input-sm",
       function success() {
           this.sendKeys(".form-control.input-sm", "test 01");
       },
       function fail() {
           test.assertExists(".form-control.input-sm");
   });
   casper.waitForSelector(".section-name.editable-click.editable.editable-open",
       function success() {
           test.assertExists(".section-name.editable-click.editable.editable-open");
           this.click(".section-name.editable-click.editable.editable-open");
       },
       function fail() {
           test.assertExists(".section-name.editable-click.editable.editable-open");
   });
   casper.waitForSelector(".form-control.input-sm",
       function success() {
           this.sendKeys(".form-control.input-sm", "copnsultas");
       },
       function fail() {
           test.assertExists(".form-control.input-sm");
   });
   casper.waitForSelector(".question-description.editable-click.editable.editable-open",
       function success() {
           test.assertExists(".question-description.editable-click.editable.editable-open");
           this.click(".question-description.editable-click.editable.editable-open");
       },
       function fail() {
           test.assertExists(".question-description.editable-click.editable.editable-open");
   });
   casper.waitForSelector(".editable-input .form-control",
       function success() {
           this.sendKeys(".editable-input .form-control", "venbtaast por agente");
       },
       function fail() {
           test.assertExists(".editable-input .form-control");
   });
   casper.waitForSelector("form .editable-input .form-control",
       function success() {
           test.assertExists("form .editable-input .form-control");
           this.click("form .editable-input .form-control");
       },
       function fail() {
           test.assertExists("form .editable-input .form-control");
   });
   casper.waitForSelector(".editable-input .form-control",
       function success() {
           this.sendKeys(".editable-input .form-control", "aVentas");
       },
       function fail() {
           test.assertExists(".editable-input .form-control");
   });
   casper.waitForSelector("form .editable-input .form-control",
       function success() {
           test.assertExists("form .editable-input .form-control");
           this.click("form .editable-input .form-control");
       },
       function fail() {
           test.assertExists("form .editable-input .form-control");
   });
   casper.waitForSelector(".question-tip.editable.editable-click.editable-open",
       function success() {
           test.assertExists(".question-tip.editable.editable-click.editable-open");
           this.click(".question-tip.editable.editable-click.editable-open");
       },
       function fail() {
           test.assertExists(".question-tip.editable.editable-click.editable-open");
   });
   casper.waitForSelector("form .form-control.input-sm",
       function success() {
           test.assertExists("form .form-control.input-sm");
           this.click("form .form-control.input-sm");
       },
       function fail() {
           test.assertExists("form .form-control.input-sm");
   });
   casper.waitForSelector(".form-control.input-sm",
       function success() {
           this.sendKeys(".form-control.input-sm", "T");
       },
       function fail() {
           test.assertExists(".form-control.input-sm");
   });
   casper.waitForSelector(".question-description.editable-click.editable.editable-open",
       function success() {
           test.assertExists(".question-description.editable-click.editable.editable-open");
           this.click(".question-description.editable-click.editable.editable-open");
       },
       function fail() {
           test.assertExists(".question-description.editable-click.editable.editable-open");
   });
   casper.waitForSelector(".editable-input .form-control",
       function success() {
           this.sendKeys(".editable-input .form-control", "lAntcion de clientes");
       },
       function fail() {
           test.assertExists(".editable-input .form-control");
   });
   casper.waitForSelector("#toggle-sections-mode strong",
       function success() {
           test.assertExists("#toggle-sections-mode strong");
           this.click("#toggle-sections-mode strong");
       },
       function fail() {
           test.assertExists("#toggle-sections-mode strong");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("strong",
       function success() {
           test.assertExists("strong");
           this.click("strong");
       },
       function fail() {
           test.assertExists("strong");
   });
   casper.waitForSelector("thead th:nth-child(2)",
       function success() {
           test.assertExists("thead th:nth-child(2)");
           this.click("thead th:nth-child(2)");
       },
       function fail() {
           test.assertExists("thead th:nth-child(2)");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Coaching']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Coaching']"));
           this.click(x("//a[normalize-space(text())='Coaching']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Coaching']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Calidad']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Calidad']"));
           this.click(x("//a[normalize-space(text())='Calidad']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Calidad']"));
   });
   casper.waitForSelector("thead th:nth-child(2)",
       function success() {
           test.assertExists("thead th:nth-child(2)");
           this.click("thead th:nth-child(2)");
       },
       function fail() {
           test.assertExists("thead th:nth-child(2)");
   });

   casper.run(function() {test.done();});
});