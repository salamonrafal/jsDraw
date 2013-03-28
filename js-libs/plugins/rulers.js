/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:28
 * To change this template use File | Settings | File Templates.
 */
function rulersJSDraw (options) {


    /**
     * [ Private Methods ]
     **/


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


    /**
     * [ Public Methods ]
     **/


    /**
     * Constructor
     *
     * @param options
     * @return {*}
     * @private
     */
    this.__construct = function (options) {
        _debug('constructor of rulers component');

        if (options !== undefined) {

        }

        return this;
    }

    this.__construct(options);
}

rulersJSDraw.prototype = new baseJSDraw();