/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 29.01.13
 * Time: 08:30
 * To change this template use File | Settings | File Templates.
 */

function domJSDraw (oHTMLElement) {

    /**
     * HTML Object
     *
     * @type HTMLElement
     */
    this.oHTMLElement = null;

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
     * @param oHTMLElement
     * @return {*}
     * @private
     */
    this.__construct = function (oHTMLElement) {

        if (oHTMLElement !== undefined) {
            if (typeof oHTMLElement === 'object' &&
                oHTMLElement.nodeType !== undefined &&
                oHTMLElement.nodeType === 1) {
                this.oHTMLElement = oHTMLElement;
                this.methodAccess = 'HTMLElement';
            }
        }

        _debug('constructor of toolsJSDraw component');
        return this;
    };

    /**
     * Set HTMLElement
     *
     * @param oHTMLElement
     */
    this.setElement = function (oHTMLElement) {
        if (typeof oHTMLElement === 'object' &&
            oHTMLElement.nodeType !== undefined &&
            oHTMLElement.nodeType === 1) {

            this.oHTMLElement = oHTMLElement;
            this.methodAccess = 'HTMLElement';
        }
    };

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
        var classes = this.oHTMLElement.className;

        if (!this.hasClass(className)) {
            if (classes != '') {
                classes += ' ' + className;
            } else {
                classes = className;
            }
        }

        this.oHTMLElement.className = classes;
    };

    /**
     * Remove class name from element
     * @param className
     */
    this.removeClass = function (className) {
        var aClasses = this.oHTMLElement.className.split(' ');
        var newClasses = '';

        for (var i = 0; i < aClasses.length; i++) {
            if (aClasses[i] != className) {
                if (i == 0) {
                    newClasses += aClasses[i];
                } else {
                    newClasses += ' ' + aClasses[i];
                }
            }
        }

        this.oHTMLElement.className = newClasses;
    };

    /**
     * Check is element has class name
     * @param className
     *
     * @return boolean
     */
    this.hasClass = function (className) {
        var aClasses = this.oHTMLElement.className.split(' ');
        var hasClass = false;


        for (var i = 0; i < aClasses.length; i++) {
            if (aClasses[i] == className) {
                hasClass = true;
            }
        }

        return hasClass;
    };

    /**
     * Hide specific element
     *
     * @param elementName
     */
    this.hideElement = function (elementName) {

        if (this.methodAccess == 'static') {
            var elementObject = _get_html_element(elementName);

            if (elementObject.style === undefined) {
                for (var i = 0; i < elementObject.length; i++) {
                    elementObject[i].style.display = 'none';
                }
            } else {
                elementObject.style.display = 'none';
            }
        } else if (this.methodAccess == 'HTMLElement') {
            if (this.oHTMLElement.style === undefined) {
                for (var i = 0; i < this.oHTMLElement.length; i++) {
                    this.oHTMLElement[i].style.display = 'none';
                }
            } else {
                this.oHTMLElement.style.display = 'none';
            }
        } else {
            // throw error;
        }

    };

    this.__construct(oHTMLElement);
}

