/**
 * Add CSS styles
 */

$jsLibLoader.appendStyles('menu.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});

/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:26
 * To change this template use File | Settings | File Templates.
 */
function menuJSDraw (options) {

    /**
     * HTML ID of workspace
     *
     * @type {String}
     */
    this.workspace_id = '';

    /**
     * Position left|bottom|right
     * @type {string}
     */
    this.menuPosition = 'bottom';

    /**
     * Id of menu
     *
     * @type {string}
     */
    this.id = ''

    /**
     * Button ID for which generate menu
     *
     * @type {string}
     */
    this.button_id = '';

    /**
     * HTML Object Element
     *
     * @type htmlObjectElement
     */
    this.button_object_element = {};

    /**
     * Menu items
     *
     * @type {Array}
     */
    this.items = [];

    /**
     * Object to modify HTMLElements
     *
     * @type {domJSDraw}
     */
    this.DOMJsDraw = new domJSDraw();

    /**
     * [ Private Methods ]
     **/

    _create_html_object_menu = function ($this) {
        var el_div_menu_container = document.createElement('div');
        var el_ul_menu_container = document.createElement('ul');
        var el_li_menu_container = document.createElement('li');
        var class_position = 'menu-container-position-' + $this.menuPosition;

        el_div_menu_container.className = 'menu-container ' + class_position;
        el_ul_menu_container.className = 'menu-list-items';

        el_div_menu_container.setAttribute('id', $this.id);
        el_ul_menu_container.setAttribute('id', $this.id + '-items');

        for (var i = 0; i < $this.items.length; i++) {



            el_li_menu_container = document.createElement('li');
            el_li_menu_container.setAttribute('id', $this.id + '-item-' + i);

            if (i == ($this.items.length - 1) ) {
                el_li_menu_container.className = 'menu-item-last';
            } else {
                el_li_menu_container.className = 'menu-item';
            }

            el_li_menu_container.appendChild($this.items[i].getHtmlObject());
            el_ul_menu_container.appendChild(el_li_menu_container);
        }

        el_div_menu_container.appendChild(el_ul_menu_container);
        el_div_menu_container.style.left = '-1px';
        el_div_menu_container.style.marginTop = '3px';
        el_div_menu_container.style.display = 'none';

        return el_div_menu_container;
    };

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
        _debug('constructor of menu.js component');

        if (options !== undefined) {
            if (options.workspace_id !== undefined) {
                this.workspace_id = options.workspace_id;
            }

            if (options.button_id !== undefined) {
                this.button_id = options.button_id;
            }

            if (options.id !== undefined) {
                this.id = options.id;
            }

            if (options.items !== undefined) {
                this.items = options.items;
            }

            if (options.button_object_element !== undefined) {
                this.button_object_element = options.button_object_element;
            }

            if (options.menuPosition !== undefined) {
                this.menuPosition = options.menuPosition;
            }
        }

        this.DOMJsDraw = new domJSDraw();

        return this;
    };


    this.getHtmlObject = function () {
        return _create_html_object_menu (this);
    };

    this.__construct(options);
}