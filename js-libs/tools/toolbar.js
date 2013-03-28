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
     * [ Private Methods ]
     **/

    var _create_buttons_list = function ($this) {
        var el_ul_list_btn = document.createElement('ul');
        var el_li_menu_item = document.createElement('li');

        el_ul_list_btn.className = 'toolbar-list';

        for (var i = 0; i < $this.buttons.length; i++) {
            el_li_menu_item = document.createElement('li');
            el_li_menu_item.className= 'toolbar-list-item';
            el_li_menu_item.appendChild($this.buttons[i].object.getHtmlObject());
            el_ul_list_btn.appendChild(el_li_menu_item);
        }

        el_li_menu_item = document.createElement('li');
        el_li_menu_item.className= 'clear';
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
     * Create Button object
     *
     * @param button_id
     * @param button_name
     * @param button_style
     * @param button_active
     * @param button_events
     * @param button_menu_items
     * @returns {buttonJSDraw}
     * @private
     */
    var _create_button_item = function (button_id, button_name, button_style, button_active, button_events, button_menu_items, isMenuItem) {
        if(button_style ===  undefined) {
            button_style = {
                icon: 'none',
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

        if (button_menu_items === undefined) {
            button_menu_items = [];
        }

        if (isMenuItem === undefined) {
            isMenuItem = false;
        }

        return new buttonJSDraw ({
            workspace_id: this.workspace_id,
            name: button_name,
            id: button_id,
            style: button_style,
            active: button_active,
            events: button_events,
            menu_items: button_menu_items,
            menu_item: isMenuItem
        });
    };


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

        // Button 01 - Zarządzaj miejscami
            this.addButton(
                'menu-01-manage-rooms',
                'Zarządzaj',
                {
                    icon: 'none',
                    icon_position: 'left',
                    text: true
                },
                true,
                {
                    click: function ($this, e) {
                        _debug('click button menu - Zarządzaj');
                        _debug(e);

                        e.preventDefault();
                    }
                },
                [
                    // Button 01/01 - Dodaj pomieszczenie
                        _create_button_item(
                            'menu-01-01-add-place',
                            'Dodaj miejsce',
                            {
                                icon: 'none',
                                icon_position: 'left',
                                text: true
                            },
                            true,
                            {
                                click: function ($this, e) {
                                    _debug('click button menu - Dodaj miejsce');
                                    _debug(e);

                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            },
                            [
                                // Button 01/01/01 - Dodaj łazienkę
                                    _create_button_item(
                                        'menu-01-01-01-add-place-bathroom',
                                        'Dodaj łazienke',
                                        {
                                            icon: 'none',
                                            icon_position: 'left',
                                            text: true
                                        },
                                        true,
                                        {
                                            click: function ($this, e) {
                                                _debug('click button menu - Dodaj łazienke');
                                                _debug(e);

                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }
                                    ),
                                // END. Button 01/01/01 - Dodaj łazienke

                                // Button 01/01/02 - Dodaj kuchnie
                                    _create_button_item(
                                        'menu-01-01-02-add-place-kitchen',
                                        'Dodaj kuchnie',
                                        {
                                            icon: 'none',
                                            icon_position: 'left',
                                            text: true
                                        },
                                        true,
                                        {
                                            click: function ($this, e) {
                                                _debug('click button menu - Dodaj kuchnie');
                                                _debug(e);

                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }
                                    ),
                                // END. Button 01/01/02 - Dodaj kuchnie

                                // Button 01/01/03 - Dodaj pokój dzienny
                                    _create_button_item(
                                        'menu-01-01-03-add-place-living-room',
                                        'Dodaj pokój dzienny',
                                        {
                                            icon: 'none',
                                            icon_position: 'left',
                                            text: true
                                        },
                                        true,
                                        {
                                            click: function ($this, e) {
                                                _debug('click button menu - Dodaj pokój dzienny');
                                                _debug(e);

                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }
                                    ),
                                // END. Button 01/01/03 - Dodaj pokój dzienny

                                // Button 01/01/04 - Dodaj korytarz
                                    _create_button_item(
                                        'menu-01-01-04-add-place-lobby',
                                        'Dodaj korytarz',
                                        {
                                            icon: 'none',
                                            icon_position: 'left',
                                            text: true
                                        },
                                        true,
                                        {
                                            click: function ($this, e) {
                                                _debug('click button menu - Dodaj korytarz');
                                                _debug(e);

                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }
                                    )
                                // END. Button 01/01/04 - Dodaj korytarz
                            ],
                            true
                        ),
                    // END. Button 01/01 - Dodaj pomieszczenie

                    // Button 01/02 - Dodaj ścianę
                        _create_button_item(
                            'menu-01-02-add-wall',
                            'Dodaj ścianę',
                            {
                                icon: 'none',
                                icon_position: 'left',
                                text: true
                            },
                            true,
                            {
                                click: function ($this, e) {
                                    _debug('click button menu - Dodaj ścianę');
                                    _debug(e);

                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                            },
                            [
                                // Button 01/02/01 - Dodaj lewą ściane
                                    _create_button_item(
                                        'menu-01-02-01-add-wall-left',
                                        'Dodaj lewą ściane',
                                        {
                                            icon: 'none',
                                            icon_position: 'left',
                                            text: true
                                        },
                                        true,
                                        {
                                            click: function ($this, e) {
                                                _debug('click button menu - Dodaj lewą ściane');
                                                _debug(e);

                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }
                                    ),
                                // END. Button 01/02/01 - Dodaj lewą ściane

                                // Button 01/02/02 - Dodaj prawą ściane
                                    _create_button_item(
                                        'menu-01-02-02-add-wall-right',
                                        'Dodaj prawą ściane',
                                        {
                                            icon: 'none',
                                            icon_position: 'left',
                                            text: true
                                        },
                                        true,
                                        {
                                            click: function ($this, e) {
                                                _debug('click button menu - Dodaj prawą ściane');
                                                _debug(e);

                                                e.preventDefault();
                                                e.stopPropagation();
                                            }
                                        }
                                    ),
                                // END. Button 01/02/02 - Dodaj prawą ściane

                                // Button 01/02/03 - Dodaj poziomą ściane
                                _create_button_item(
                                    'menu-01-02-03-add-wall-front',
                                    'Dodaj poziomą ściane',
                                    {
                                        icon: 'none',
                                        icon_position: 'left',
                                        text: true
                                    },
                                    true,
                                    {
                                        click: function ($this, e) {
                                            _debug('click button menu - Dodaj poziomą ściane');
                                            _debug(e);

                                            e.preventDefault();
                                            e.stopPropagation();
                                        }
                                    }
                                )
                                // END. Button 01/02/03 - Dodaj poziomą ściane
                            ],
                            true
                        )
                    // END. Button 01/02 - Dodaj ścianę
                ]
            );
        // END. Button 01 - Zarządzaj miejscami

        // Button 02 - Oblicz
        this.addButton(
            'menu-count',
            'Oblicz',
            {
                icon: 'none',
                icon_position: 'right',
                text: true
            },
            true,
            {
                click: function ($this, e) {
                    _debug('click button menu - Oblicz');
                    _debug(e);

                    e.preventDefault();
                }
            }
        );
        // END. Button 02 - Oblicz


        return this;
    }

    /**
     * Create toolbar
     */
    this.create = function () {
        var toolBarMainBox = document.createElement('div');
        var listItems = _create_buttons_list(this);
        var buttonset = new buttonsetJSDraw(listItems).getElement();
        toolBarMainBox.id = 'toolbar_' + this.workspace_id;
        toolBarMainBox.className = 'workspace-toolbar-main';
        toolBarMainBox.appendChild(buttonset);
        return toolBarMainBox;
    }

    /**
     * Add button to toolbar
     *
     * @param button_id
     * @param button_name
     * @param button_style
     * @param button_active
     * @param button_events
     */
    this.addButton = function(button_id, button_name, button_style, button_active, button_events, button_menu_items, isMenuItem) {
        if(button_style ===  undefined) {
            button_style = {
                icon: 'none',
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

        if (button_menu_items === undefined) {
            button_menu_items = [];
        }

        if (isMenuItem === undefined) {
            isMenuItem = false;
        }

        this.buttons.push({
            id: button_id,
            object: _create_button_item(
                button_id,
                button_name,
                button_style,
                button_active,
                button_events,
                button_menu_items,
                isMenuItem
            )
        });
    }

    this.__construct(options);
}

toolbarJSDraw.prototype = new baseJSDraw();