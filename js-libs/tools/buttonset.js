/**
 * Add CSS styles
 */

$jsLibLoader.appendStyles('buttonset.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});

/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:26
 * To change this template use File | Settings | File Templates.
 */
function buttonsetJSDraw (oHTMLElement) {


    /**
     * ID of HTML element where contain buttons
     *
     * @type {HTMLElement}
     */
    this.oHTMLElement = '';

    /**
     * List of css class names
     *
     * @type {Object}
     */
    this.cssClassNames = {
        buttonContainer: 'button-container',
        buttonsetButtonConatiner: 'buttonset-button-conatiner',
        buttonsetContainer: 'buttonset-container',
        buttonsetItemContainer: 'buttonset-item-container',
        buttonsetItemFirst: 'buttonset-item-first',
        buttonsetItemLast: 'buttonset-item-last'
    };


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
     * Count HTMLElement with specific class name
     *
     * @param $this
     * @param oHTMLElement
     * @param className
     * @return {Number}
     * @private
     */
    _countChildByClass = function ($this, oHTMLElement, className) {
        var childrenL1 = oHTMLElement.children
        var countElements = 0;

        for (var i = 0; i < childrenL1.length; i++) {
            var childrenL2 = childrenL1[i].children;

            if (childrenL2.length > 0) {
                var button_container = childrenL2[0];
                $this.DOMJsDraw.setElement(button_container);
                if ($this.DOMJsDraw.hasClass(className)) {
                    countElements++;
                }
            }
        }

        return countElements;
    };

    /**
     * [ Public Methods ]
     **/


    /**
     * Constructor
     *
     * @param oHTMLElement
     *
     * @return HTMLElement
     */
    this.__construct = function (oHTMLElement) {
        _debug('constructor of buttonset.js component');

        if (typeof oHTMLElement === 'object' &&
            oHTMLElement.nodeType !== undefined &&
            oHTMLElement.nodeType === 1) {

            this.oHTMLElement = oHTMLElement;
            var aChilds = this.oHTMLElement.children;
            var countElement = _countChildByClass(this, this.oHTMLElement, this.cssClassNames.buttonContainer);

            for (var i = 0; i < aChilds.length; i++) {
                var aChildChilds = aChilds[i].children;

                if (aChildChilds.length > 0) {
                    var button_container = aChildChilds[0];
                    this.DOMJsDraw.setElement(button_container);

                    if (this.DOMJsDraw.hasClass(this.cssClassNames.buttonContainer)) {
                        this.DOMJsDraw.appendClass(this.cssClassNames.buttonsetButtonConatiner);

                        this.DOMJsDraw.setElement(oHTMLElement);
                        if (!this.DOMJsDraw.hasClass(this.cssClassNames.buttonsetContainer)) {
                            this.DOMJsDraw.appendClass(this.cssClassNames.buttonsetContainer);
                        }

                        this.DOMJsDraw.setElement(aChilds[i]);
                        if (!this.DOMJsDraw.hasClass(this.cssClassNames.buttonsetItemContainer)) {
                            this.DOMJsDraw.appendClass(this.cssClassNames.buttonsetItemContainer);
                        }

                        if (i == 0) {
                            this.DOMJsDraw.appendClass(this.cssClassNames.buttonsetItemFirst);
                        } else if ((i + 1) == countElement ) {
                            this.DOMJsDraw.appendClass(this.cssClassNames.buttonsetItemLast);
                        }
                    }
                }
            }

        } else {
            // throw error
        }


        return this.oHTMLElement;
    }

    /**
     * Return HTMLElement
     *
     * @return {HTMLElement}
     */
    this.getElement = function() {
        return this.oHTMLElement;
    }

    this.__construct(oHTMLElement);
}

buttonsetJSDraw.prototype = new baseJSDraw();