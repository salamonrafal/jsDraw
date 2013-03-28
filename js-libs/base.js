/* Add tools module  */
$jsLibLoader.appendScripts('tools/dom.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:20
 * To change this template use File | Settings | File Templates.
 */

function baseJSDraw (options) {

    /**
     * Object to modify HTMLElements
     *
     * @type {domJSDraw}
     */
    this.DOMJsDraw = new domJSDraw();

    /** [ Private Methods ]**/

    /**
     * Constructor
     *
     * @param options
     * @return {*}
     * @private
     */
    this.__construct = function (options) {
        _debug('constructor of base component');

        if (options !== undefined) {
            // Here options
        }

        return this;
    }

    this.__construct(options);

    this.versionBase = function () {
        return '0.0.1';
    }
}

/** [Public Methods] **/