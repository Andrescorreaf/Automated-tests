// Esto mantendrá la totalidad de los contenidos que Casper tiene que suministrar.
var config = {
  url :  ' https://testing.plvx.co ' ,
};
// Estamos llenando un formulario que más tarde utilizaremos.
// Vamos a almacenar el contenido del formulario en `config` también.
config.form = {
  "email": "acorrea@playvox.com",
  "password": "asdasd",
  "project-title": "CasperJS Test Project playvox",
  "project-desc": "Prubas en platafornma de playvox"

 // Definir el conjunto de pruebas y darle las propiedades siguientes:
// - Título, que se muestra antes de que cualquiera de los de aprobación / falla.
// - Número de pruebas, se debe cambiar a medida que agrega pruebas.
// - suite (), que contiene todas las pruebas.
};
casper.test.begin('Test de playvox', 4, function suite(test) {
  test.comment('Cargando ' + config.url + '...');

  // casper.start () siempre envuelve su primera acción. El primer argumento debe
  // ser la URL de la página que desea probar. En lugar de ser no modificable, la nuestra
  // proviene del objeto de configuración que se ha definido anteriormente.
  casper.start(config.url, function() {

   // casper.click () dispara un evento click en un elemento particular. En este caso
    // que estamos haciendo clic en el logotipo principal del sitio.
    // El único argumento que se necesita es un selector. Tenga cuidado para ser específico cuando
    // iniciar una acción como esta. Por ejemplo, un selector tal como liso
    // "a" no sería lo suficientemente específica.

    //this.click('#login > div.col-md-offset-1.col-md-10 > input');

    // Registrar el clic a la consola, por lo que sabemos por qué está haciendo una pausa momentánea.
       //test.comment('haciendo click en el boton de login...');
  });

  // casper.then () nos permite esperar hasta que las pruebas y las acciones anteriores son
  // completado antes de pasar a las etapas siguientes. Esto es útil para muchas
  // situaciones y las sesiones autenticadas son un candidato ideal, ya que
  // No se puede realizar ninguna otra acción si no hemos podido autenticar.
  casper.then(function () {

  // test.assertUrlMatch () nos permite ejecutar una expresión regular en contra de la
   // URL actual que Casper se ha cargado. Dado que se ha pasado de un subdominio
   // a nuestro dominio principal, que es una expresión regular simple.
//test.assertUrlMatch(/\/\/playvox\.co/, 'la nueva locacion es ' + this.getCurrentUrl());

// Informe que estamos tratando de usar de navegación del teclado.
test.comment('Utilizando el teclado de navegación para visitar el formulario de login,');

  // casper.sendKeys () nos permite simular pulsando una o más teclas del
    // teclado. Usted puede usar esto para desencadenar un detector de eventos JS, 
    // introducir texto en un <input> o elemento con atributo `contenteditable`, o utilizarlo
    // para probar la navegación por teclado.
    //
    // Nuestro caso de uso que está activando el `submit` propiedad en una del login
    // en un formulario, la selección de las etiquetas <body> funciona bien. Si desea probar una
    // específico <input> o elemento editable, la función puede aceptar una más
    // selector específico.
    //
    // En este caso estamos presionando una combinación: Ctrl + Alt + C, que es la manera de utilizar
    // navegación mediante el teclado en PhantomJS. Hacemos esto pasa objeto las opciones
    // a Sendkeys () y especificando un `valor modifiers`. Puede encontrar toda la
    // posibles teclas de modificación en el segundo enlace docs.

    // @see http://casperjs.readthedocs.org/en/latest/modules/casper.html#sendkeys
    // @see http://casperjs.readthedocs.org/en/latest/modules/casper.html#options

    this.sendKeys('body', 'c', {modifiers: 'ctrl+alt'});
  });

    casper.then(function () {
    // Compruebe la dirección URL de nuevo para confirmar la navegación. Mira anteriormente en este archivo para
    // explicación y documentación de enlace para test.assertUrlMatch ().
test.assertUrlMatch(/login/, 'Nueva locacion ' + this.getCurrentUrl());


    // casper.fill () nos permite llenar rápidamente un formulario con una cantidad mínima
    // de código. Si usted puede escribir un objeto JSON, que ya sabe cómo llenar
    // formas en Casper.

       casper.fill('#login', config.form, false);
  });

    casper.then(function () {
    // Busca la información que acaba de llenar dentro del formulario.
    //
    // assertEvalEquals proporciona una manera fácil para poner a prueba dentro de JavaScript
    // el entorno de prueba. Cualquier código dentro de los assertEvalEquals (bloque de código)
    // es considerado como parte de la página web, como si está escribiendo en el
    // consola JS del navegador de la página totalmente cargado.
    
     test.assertEvalEquals(function () {
      return $('#login input[Email="email"]').val();
    }, config.form.email, 'el usuario fue llenado correctamente.');

     // verifique el mensaje usando test.assertEvalEquals () también.

       test.assertEvalEquals(function () {
      return $('#login input[password="password"]').val();
    }, config.form.password, 'la contraseña fue llenada correctamente');
  });

     // Este código ejecuta todas las pruebas que hemos definido anteriormente.

       casper.run(function () {
    test.done();
  });
});





