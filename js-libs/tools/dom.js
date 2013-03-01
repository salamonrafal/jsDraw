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
     * HTML Object
     *
     * @type HTMLElement
     */
    this.elements = null;

    /**
     * Type of method access
     * @type string
     * @private
     */
    this.methodAccess = 'static';

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

        if (options !== undefined) {
            if (typeof options === 'object' &&
                options.nodeType !== undefined &&
                options.nodeType === 1) {
                this.elements = options;
                this.methodAccess = 'HTMLElement';
            }
        }

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
    };


    /**
     * Append class name to element
     * @param className
     */
    this.appendClass = function (className) {
        var classes = this.elements.className;

        if (!this.hasClass(className)) {
            if (classes != '') {
                classes += ' ' + className;
            } else {
                classes = className;
            }
        }

        this.elements.className = classes;
    };

    /**
     * Remove class name from element
     * @param className
     */
    this.removeClass = function (className) {
        var classes = this.elements.className;
        var classTest = new RegExp(' ?'+ className);
        classes = classes.replace(classTest, '');
        this.elements.className = classes;
    };

    /**
     * Check is element has class name
     * @param className
     *
     * @return boolean
     */
    this.hasClass = function (className) {
        var classes = this.elements.className;
        var classTest = new RegExp(' ?'+ className);

        if (classTest.test(classes)) {
            return true;
        } else {
            return false;
        }
    };

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
    };

    this.__construct(options);
}

