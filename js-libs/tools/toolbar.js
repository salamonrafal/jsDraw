/**
 * Load Libs
 **/

/* Add button module  */
$jsLibLoader.appendScripts('tools/button.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add menu module  */
$jsLibLoader.appendScripts('tools/menu.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add buttonset module  */
$jsLibLoader.appendScripts('tools/buttonset.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add overlayer module  */
$jsLibLoader.appendScripts('tools/overlayer.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add form module  */
$jsLibLoader.appendScripts('tools/form.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/**
 * Add CSS styles
 */
$jsLibLoader.appendStyles('toolbar.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});

/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:26
 * To change this template use File | Settings | File Templates.
 */
function toolbarJSDraw (options) {


    /**
     * HTML ID of workspace
     *
     * @type {String}
     */
    this.workspace_id = '';

    /**
     * Buttons list
     *
     * @type {Array}
     */
    this.buttons = [];

    /**
     * List of css class names
     *
     * @type {Object}
     */
    this.cssClassNames = {
        toolbarList: 'toolbar-list',
        toolbarListItem: 'toolbar-list-item',
        clear: 'clear',
        workspaceToolbarMain: 'workspace-toolbar-main'
    };


    /**
     * [ Private Methods ]
     **/

    var _create_buttons_list = function ($this) {
        var el_ul_list_btn = document.createElement('ul');
        var el_li_menu_item = document.createElement('li');

        el_ul_list_btn.className = $this.cssClassNames.toolbarList;

        for (var i = 0; i < $this.buttons.length; i++) {
            el_li_menu_item = document.createElement('li');
            el_li_menu_item.className = $this.cssClassNames.toolbarListItem;
            el_li_menu_item.appendChild($this.buttons[i].object.getHtmlObject());
            el_ul_list_btn.appendChild(el_li_menu_item);
        }

        el_li_menu_item = document.createElement('li');
        el_li_menu_item.className = $this.cssClassNames.clear;
        el_ul_list_btn.appendChild(el_li_menu_item);

        return el_ul_list_btn;
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
        _debug('constructor of toolbar.js component');

        if (options !== undefined) {
            if (options.workspace_id !== undefined) {
                this.workspace_id = options.workspace_id;
            }
        }

        this.addButton('menu-add', 'Dodaj miejsce', {
            icon: 'plus-green',
            icon_position: 'left',
            text: true
        }, true, {
            click: function ($this, e) {
                _debug('click button menu');
                _debug(e);

                e.preventDefault();
            }
        });

        this.addButton('menu-count', 'Oblicz', {
            icon: 'add',
            icon_position: 'right',
            text: true
        }, true, {
            click: function ($this, e) {
                _debug('click button menu');
                _debug(e);

                e.preventDefault();
            }
        });


        return this;
    };

    /**
     * Create toolbar
     */
    this.create = function () {
        var toolBarMainBox = document.createElement('div');
        var listItems = _create_buttons_list(this);
        var buttonset = new buttonsetJSDraw(listItems).getElement();
        toolBarMainBox.id = 'toolbar_' + this.workspace_id;
        toolBarMainBox.className = this.cssClassNames.workspaceToolbarMain;
        toolBarMainBox.appendChild(buttonset);
        return toolBarMainBox;
    };

    /**
     * Add button to toolbar
     *
     * @param button_id
     * @param button_name
     * @param button_style
     * @param button_active
     * @param button_events
     */
    this.addButton = function(button_id, button_name, button_style, button_active, button_events) {

        if(button_style ===  undefined) {
            button_style = {
                icon: '',
                icon_position: 'left',
                text: true
            };
        } else {
            if (button_style.icon === undefined) {
                button_style.icon = '';
            }

            if (button_style.icon_position === undefined) {
                button_style.icon_position = 'left';
            }

            if (button_style.text === undefined) {
                button_style.text = true;
            }
        }

        if (button_active === undefined) {
            button_active = true;
        }

        if (button_events === undefined) {
            button_events = {
                click: function() {},
                dbclick: function() {},
                disable: function() {},
                enable: function() {},
                hover: function() {}
            };
        } else {
            if(button_events.click === undefined) {
                button_events.click = function() {};
            }

            if(button_events.dbclick === undefined) {
                button_events.dbclick = function() {};
            }

            if(button_events.disable === undefined) {
                button_events.disable = function() {};
            }

            if(button_events.enable === undefined) {
                button_events.enable = function() {};
            }

            if(button_events.hover === undefined) {
                button_events.hover = function() {};
            }
        }

        this.buttons.push({
            id: button_id,
            object: new buttonJSDraw({
                workspace_id: this.workspace_id,
                name: button_name,
                id: button_id,
                style: button_style,
                active: button_active,
                events: button_events
            })
        });
    };

    this.__construct(options);
}