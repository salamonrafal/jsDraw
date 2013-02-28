/**
 * Add CSS styles
 */

$jsLibLoader.appendStyles('button.css', function(name, index){
    _debug('CSS lib loaded: ' + name);
});


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
        click: function($this, e){},
        dbclick: function($this, e){},
        disable: function($this, e){},
        enable: function($this, e){},
        hover: function($this, e){}
    };


    /**
     * [ Private Methods ]
     **/


    /**
     * Button callback click
     */
    var _event_click = function ($this, e) {
        $this.events.click.call(this, $this, e);
    };

    /**
     * Button callback double click
     */
    var _event_dbclick = function ($this, e) {

    };

    /**
     * Button callback disable
     */
    var _event_disable = function ($this, e) {

    };

    /**
     * Button callback enable
     */
    var _event_enable = function ($this, e) {

    };

    /**
     * Button callback hover
     */
    var _event_hover = function ($this, e) {

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
        el_div_btn_container.className = 'button-container';
        el_div_icon.className = 'button-icon';
        el_div_label.className = 'button-label';
        el_div_clear.className = 'clear';

        if ($this.style.icon_position == 'left') {
            el_div_btn_container.className += ' button-icon-position-left';
        } else {
            el_div_btn_container.className += ' button-icon-position-right';
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
            _event_click.call(this, $this, e);
        };

        el_div_btn_container.onmouseover = function (e) {
            _event_hover.call(this, $this, 'on');
        };

        el_div_btn_container.onmouseout = function (e) {
            _event_hover.call(this, $this, 'out');
        };

        return el_div_btn_container;
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
        }

        this.htmlObject = _create_html_element(this);

        return this;
    };

    /**
     * Return HTML Object
     *
     * @return {null}
     */
    this.getHtmlObject = function() {
        return this.htmlObject;
    }

    this.__construct(options);
}