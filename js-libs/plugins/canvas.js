/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:26
 * To change this template use File | Settings | File Templates.
 */
function canvasManagerJSDraw (options) {


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
     * Canvas HTML Object
     *
     * @type {HTMLElement}
     */
    this.canvasWorkspaceMain = document.createElement('canvas');


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
        _debug('constructor of canvas.js component');

        if (options !== undefined) {
            if (options.workspace_id !== undefined) {
                this.workspace_id = options.workspace_id;
            }

            if (options.workspace_size !== undefined && options.workspace_size.width !== undefined && options.workspace_size.height !== undefined) {
                this.workspace_size = options.workspace_size;
            }
        }

        return this;
    }

    this.create = function () {
        var canvasWorkspaceMain = document.createElement('canvas');
        canvasWorkspaceMain.id = 'canvas_' + this.workspace_id;
        canvasWorkspaceMain.width = this.workspace_size.width;
        canvasWorkspaceMain.height = this.workspace_size.height;

        this.canvasWorkspaceMain = canvasWorkspaceMain;

        return canvasWorkspaceMain;
    }

    this.createLine = function (x, y, width, height) {
        var ctx = this.canvasWorkspaceMain.getContext('2d');

        ctx.fillStyle = '#000000';
        ctx.fillRect(x, y, width, height);
    }

    this.__construct(options);
}