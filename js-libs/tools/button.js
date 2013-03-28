/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:26
 * To change this template use File | Settings | File Templates.
 */
function buttonJSDraw (options) {

    /**
     * HTML ID of workspace
     *
     * @type {String}
     */
    this.workspace_id = '';

    /**
     * Buton Label Name
     *
     * @type {String}
     */
    this.name = '';

    /**
     * Buton id
     *
     * @type {String}
     */
    this.id = '';

    /**
     * Button style
     *
     * @type {Object}
     */
    this.style = {
        icon: '',
        icon_position: 'left',
        text: true
    };

    /**
     * Button enable/disable
     *
     * @type {Boolean}
     */
    this.active = true;

    /**
     * Html object button
     *
     * @type {null}
     */
    this.htmlObject  = {};

    /**
     * Button events collection
     *
     * @type {Object}
     */
    this.events = {
        click: function($this, e, $thisButton){},
        dbclick: function($this, e, $thisButton){},
        disable: function($this, e, $thisButton){},
        enable: function($this, e, $thisButton){},
        hover: function($this, e, $thisButton, action){}
    };

    /**
     * Array of sub items for buttons
     *
     * @type {Array}
     */
    this.menu_items = [];

    /**
     * Is button part of menu element
     *
     * @type {boolean}
     */
    this.menu_item = false;

    /**
     * List of css class names
     *
     * @type {Object}
     */
    this.cssClassNames = {
        buttonHoverActive: 'button-hover-active',
        buttonContainer: 'button-container',
        buttonIcon: 'button-icon',
        buttonLabel: 'button-label',
        clear: 'clear',
        buttonIconPositionLeft: 'button-icon-position-left',
        buttonIconPositionRight: 'button-icon-position-right'
    };

    /**
     * [ Private Methods ]
     **/


    /**
     * Button callback click
     */
    var _event_click = function ($this, e, $thisButton) {
        $this.events.click.call(this, $this, e);
    };

    /**
     * Button callback double click
     */
    var _event_dbclick = function ($this, e, $thisButton) {

    };

    /**
     * Button callback disable
     */
    var _event_disable = function ($this, e, $thisButton) {

    };

    /**
     * Button callback enable
     */
    var _event_enable = function ($this, e, $thisButton) {

    };

    /**
     * Button callback hover
     */
    var _event_hover = function ($this, e, $thisButton, action) {
        $this.DOMJsDraw.setElement($thisButton);

        if(action == 'on') {
            $this.DOMJsDraw.appendClass($this.cssClassNames.buttonHoverActive);

            if ($this.menu_items.length > 0)
                $this.DOMJsDraw.showElement('#menu-' + $this.id, true);
        } else {
            $this.DOMJsDraw.removeClass($this.cssClassNames.buttonHoverActive);

            if ($this.menu_items.length > 0)
                $this.DOMJsDraw.hideElement('#menu-' + $this.id, true);
        }

        $this.events.hover.call(this, $this, e, $thisButton, action);

    };

    /**
     * Create Html element
     *
     * @param $this
     * @private
     */
    var _create_html_element = function ($this) {
        var el_div_btn_container = document.createElement('div');
        var el_div_icon = document.createElement('div');
        var el_div_label = document.createElement('div');
        var el_div_clear = document.createElement('div');

        // Set class name
        el_div_btn_container.className = $this.cssClassNames.buttonContainer;
        el_div_icon.className = $this.cssClassNames.buttonIcon;
        el_div_label.className = $this.cssClassNames.buttonLabel;
        el_div_clear.className = $this.cssClassNames.clear;

        if ($this.style.icon_position == 'left') {
            el_div_btn_container.className += ' ' + $this.cssClassNames.buttonIconPositionLeft;
        } else {
            el_div_btn_container.className += ' ' + $this.cssClassNames.buttonIconPositionRight;
        }

        if ($this.style.icon != '') {
            el_div_btn_container.className += ' button-icon-type-' + $this.style.icon;
        }

        el_div_btn_container.setAttribute('id', $this.id);
        el_div_btn_container.setAttribute('active', $this.active);
        el_div_label.textContent = $this.name;

        if ($this.style.icon_position == 'left') {
            el_div_btn_container.appendChild(el_div_icon);
            el_div_btn_container.appendChild(el_div_label);
        } else {
            el_div_btn_container.appendChild(el_div_label);
            el_div_btn_container.appendChild(el_div_icon);
        }

        el_div_btn_container.appendChild(el_div_clear);


        // Events

        el_div_btn_container.onclick = function(e) {
            _event_click.call(this, $this, e, el_div_btn_container);
        };

        el_div_btn_container.onmouseover = function (e) {
            _event_hover.call(this, $this, e, el_div_btn_container, 'on');
        };

        el_div_btn_container.onmouseout = function (e) {
            _event_hover.call(this, $this, e, el_div_btn_container, 'out');
        };

        if ($this.menu_items.length > 0)  {
            var menu = new menuJSDraw({
                workspace_id: $this.workspace_id,
                button_id: $this.id,
                id: 'menu-' + $this.id,
                items: $this.menu_items,
                button_object_element: el_div_btn_container,
                menuPosition: ($this.menu_item ? 'right': 'bottom')
            });

            el_div_btn_container.appendChild(menu.getHtmlObject());
        }

        return el_div_btn_container;
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
     */
    this.__construct = function (options) {
        _debug('constructor of button.js component');

        if (options !== undefined) {
            if (options.workspace_id !== undefined) {
                this.workspace_id = options.workspace_id;
            }

            if (options.name !== undefined) {
                this.name = options.name;
            }

            if (options.id !== undefined) {
                this.id = options.id;
            }


            if (options.style !== undefined) {
                this.style = options.style;
            }

            if (options.active !== undefined) {
                this.active = options.active;
            }

            if (options.events !== undefined) {
                this.events = options.events;
            }

            if (options.menu_items !== undefined) {
                this.menu_items = options.menu_items;
            }

            if (options.menu_item !== undefined) {
                this.menu_item = options.menu_item;

            }
        }
        this.htmlObject = _create_html_element(this);
        this.DOMJsDraw = new domJSDraw();

        return this;
    };

    /**
     * Return HTML Object
     *
     * @return htmlObjectElement
     */
    this.getHtmlObject = function() {
        return this.htmlObject;
    };

    this.__construct(options);
}