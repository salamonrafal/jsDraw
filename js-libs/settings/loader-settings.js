/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 28.01.13
 * Time: 08:54
 * To change this template use File | Settings | File Templates.
 */
var $jsLibLoader = new loader();
var $l = function(callback) { $jsLibLoader.runScripts(callback); };


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


/**
 * Add JS scripts
 */

/* Add grids draw modules */
$jsLibLoader.addScripts('plugins/base.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add jsDraw modules */
$jsLibLoader.addScripts('core.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});


/* Load styles */
$jsLibLoader.loadStyles();

/* Load script */
$jsLibLoader.loadScripts();


