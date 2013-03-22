
/**
 * Load Libs
 **/

/* Add toolbar modules */
$jsLibLoader.appendScripts('tools/toolbar.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add tools module  */
$jsLibLoader.appendScripts('tools/dom.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add grids module  */
$jsLibLoader.appendScripts('plugins/grids.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add grids module  */
$jsLibLoader.appendScripts('plugins/canvas.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/* Add grids module  */
$jsLibLoader.appendScripts('tools/menu.js', function (name, index) {
    _debug('JS lib loaded: ' + name);
});

/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:20
 * To change this template use File | Settings | File Templates.
 */
function coreJsDraw (options) {

    /**
     * HTML ID of workspace
     *
     * @type {String}
     */
    this.workspace_id = '';

    /**
     * Object of weight and height workspace
     *
     * @type {Object}
     */
    this.workspace_size = { 'width': 0, 'height': 0};

    /**
     * Workspace Elements
     *
     * @type {Array}
     */
    this.workspace_elements = [];

    /**
     * Workspace data info
     *
     * @type {Object}
     */
    this.workspace_info_data = {
        'title': '',
        'description': '',
        'grids': false,
        'rulers': false
    };

    /**
     * Grids draw modules
     *
     * @type {gridsJSDraw}
     */
    this.grids = grids = new gridsJSDraw();

    /**
     * Common methods
     *
     * @type {domJSDraw}
     */
    this.DOMJsDraw = new domJSDraw();

    /**
     * Canvas Manager modules
     *
     * @type {canvasManagerJSDraw}
     */
    this.canvasManager = new canvasManagerJSDraw({});

    /**
     * List of css class names
     *
     * @type {Object}
     */
    this.cssClassNames = {
        workspaceBodyMain: 'workspace-body-main',
        workspaceFooterMain: 'workspace-footer-main'
    };


    /**
     * [ Private Methods ]
     **/

    /**
     * Create Body Box
     *
     * @return {HTMLElement}
     * @private
     */
    function _create_body ($this) {
        var mainBox = document.createElement('div');

        mainBox.id = 'body_' + $this.getWorkspaceID();
        mainBox.className = $this.cssClassNames.workspaceBodyMain;

        mainBox.appendChild($this.canvasManager.create());

        return mainBox;
    }

    /**
     * Create Footer Box
     *
     * @return {HTMLElement}
     * @private
     */
    function _create_footer ($this) {
        var mainBox = document.createElement('div');

        mainBox.id = 'footer_' + $this.getWorkspaceID();
        mainBox.className = $this.cssClassNames.workspaceFooterMain;

        return mainBox;
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
     */
    this.__construct = function (options) {
        _debug('constructor of coreJsDraw component');

        if (options !== undefined) {
            if (options.workspace_id !== undefined) {
                this.workspace_id = options.workspace_id;
            }

            if (options.workspace_size !== undefined && options.workspace_size.width !== undefined && options.workspace_size.height !== undefined) {
                this.workspace_size = options.workspace_size;
            }

            if (options.title !== undefined) {
                this.workspace_info_data.title = options.title;
            }

            if (options.description !== undefined) {
                this.workspace_info_data.description = options.description;
            }

            if (options.grids !== undefined) {
                this.workspace_info_data.grids = options.grids;
            }

            if (options.rulers !== undefined) {
                this.workspace_info_data.rulers = options.rulers;
            }
        }

        this.canvasManager = new canvasManagerJSDraw({
           'workspace_id': this.workspace_id,
           'workspace_size':  this.workspace_size
        });

        return this;
    };

    /**
     * Return HTML ID of workspace
     *
     * @return {String}
     */
    this.getWorkspaceID = function () {
        return this.workspace_id;
    };

    /**
     * Set HTML ID of workspace
     *
     * @param workspace_id
     */
    this.setWorkspaceID = function (workspace_id) {
        this.workspace_id = workspace_id;
    };

    /**
     * Function create workspace
     */
    this.createWorkspace = function () {
        _debug('run createWorkspace function from coreJsDraw component');

        var $this = this;
        var worksapceMainBox = this.DOMJsDraw.getHTMLElement('#'+ this.getWorkspaceID());
        var toolbar = new toolbarJSDraw({
            'workspace_id': this.getWorkspaceID(),
            'canvasManager': this.canvasManager
        });

        worksapceMainBox.setAttribute('style', 'width: ' + this.workspace_size.width + 'px;');

        worksapceMainBox.appendChild(toolbar.create());
        worksapceMainBox.appendChild(_create_body($this));
        worksapceMainBox.appendChild(_create_footer($this));

        this.DOMJsDraw.hideElement('.no-canvas');

        return this;
    };

    this.createTestLine = function (x, y, width, height) {
        this.canvasManager.createLine(x, y, width, height);
    };

    this.__construct(options);
}




