/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 29.01.13
 * Time: 08:30
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:20
 * To change this template use File | Settings | File Templates.
 */

function domJSDraw (options) {


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
     *
     * @param elementName
     * @private
     */
    function _get_html_element  (elementName) {
        var elementObject = '';
        var classPattern = /\.[a-zA-Z0-9\-_]+/;
        var idPattern = /#[a-zA-Z0-9\-_]+/;

        if (classPattern.test(elementName)) {
            elementObject = document.getElementsByClassName(elementName.substr(1, elementName.length));
        } else if (idPattern.test(elementName)) {
            elementObject = document.getElementById(elementName.substr(1, elementName.length));
        }

        return elementObject;
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
        _debug('constructor of toolsJSDraw component');
        return this;
    }

    /**
     * Return html element object
     *
     * @param elementName
     * @return {*}
     */
    this.getHTMLElement = function(elementName) {
        return _get_html_element(elementName);
    }

    /**
     * Hide specific element
     *
     * @param elementName
     */
    this.hideElement = function (elementName) {
        var elementObject = _get_html_element(elementName);

        if (elementObject.style === undefined) {
            for (var i = 0; i < elementObject.length; i++) {
                elementObject[i].style.display = 'none';
            }
        } else {
            elementObject.style.display = 'none';
        }
    }

    this.__construct(options);
}

