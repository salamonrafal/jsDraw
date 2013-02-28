/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:20
 * To change this template use File | Settings | File Templates.
 */

function baseJSDraw (options) {

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

    /**
     * Debug function
     *
     * @param variable
     * @private
     */
    function _debug (variable) {
        if (console !== undefined && console.log !== undefined) {
            console.log(variable);
        }
    }

    this.__construct(options);

    this.versionBase = function () {
        return '0.0.1';
    }
}

/** [Public Methods] **/