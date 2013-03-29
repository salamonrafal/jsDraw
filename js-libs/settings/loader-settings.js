/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 28.01.13
 * Time: 08:54
 * To change this template use File | Settings | File Templates.
 */
var $jsLibLoader = new loader();
var $l = function(callback) {
    $jsLibLoader.showSplashScreen();
    $jsLibLoader.runScripts(callback);
};


_debug = function (variable) {
    if (console !== undefined && console.log !== undefined) {
        console.log(variable);
    }
};

/* Set Path */
$jsLibLoader.setJsPath('js-libs/');
$jsLibLoader.setCssPath('css-libs/');

/**
 * Add CSS styles
 */

/* Add grids draw modules */
$jsLibLoader.addStyle('base.css', function (name, index) {
    _debug('CSS lib loaded: ' + name);
});

$jsLibLoader.addStyle('button.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});


$jsLibLoader.addStyle('buttonset.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});

$jsLibLoader.addStyle('form.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});

$jsLibLoader.addStyle('menu.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});

$jsLibLoader.addStyle('overlayer.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});

$jsLibLoader.addStyle('toolbar.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});



/**
 * Add JS scripts
 */

/* Add jsDraw modules */
$jsLibLoader.addScripts('core.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add button module  */
$jsLibLoader.addScripts('tools/button.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
    buttonJSDraw.prototype = new baseJSDraw();
});

/* Add menu module  */
$jsLibLoader.addScripts('tools/menu.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
    menuJSDraw.prototype = new baseJSDraw();
});

/* Add buttonset module  */
$jsLibLoader.addScripts('tools/buttonset.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
    buttonsetJSDraw.prototype = new baseJSDraw();
});

/* Add overlayer module  */
$jsLibLoader.addScripts('tools/overlayer.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
    overlayerJSDraw.prototype = new baseJSDraw();
});

/* Add form module  */
$jsLibLoader.addScripts('tools/form.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
    formJSDraw.prototype = new baseJSDraw();
});


/* Load styles */
$jsLibLoader.loadStyles();

/* Load script */
$jsLibLoader.loadScripts();


