/**
 * Created with JetBrains PhpStorm.
 * User: salamr01
 * Date: 25.01.13
 * Time: 13:34
 * To change this template use File | Settings | File Templates.
 */
function loader () {
    /**
     * Path to script folder
     *
     * @type {String}
     */
    this.jsPath = '';

    /**
     * Path to CSS styles folder
     *
     * @type {String}
     */
    this.cssPath = '';

    /**
     * Array of JS scripts to load
     *
     * @type {Array}
     */
    this.scripts = [];

    /**
     * Array of CSS styles to load
     *
     * @type {Array}
     */
    this.styles = [];

    /**
     * Detect browser & os
     *
     * @type {browserDetectJSDraw}
     */
    this.detectBrowser = new browserDetectJSDraw();

    /**
     * [ Private Methods ]
     **/

    /**
     * Append to HEAD tag JS script tag
     *
     * @param path
     * @param index
     * @param name
     * @param callback
     * @param $this Reference to object
     * @private
     */
    function _html_append_script (path, index, name, callback, $this) {
        var head = document.getElementsByTagName('head').item(0);
        var script = document.createElement('script');
        var splitName = name.split('.');

        script.src = path;
        script.type = 'text/javascript';
        script.language = 'JavaScript';
        script.id = splitName[0].replace('/', '-');

        script.onload = function () {
            var msgLoading = document.getElementById('splashscreen-message-script-value');

            try {
                msgLoading.innerHTML = name;
            } catch(e) {
                _debug(e);
            }

            $this.changeLoadScriptStatus(index, true);
            callback.call(this, name, index);
        };

        head.appendChild(script);
    }

    /**
     * Append to HEAD tag link tag included CSS style
     *
     * @param path
     * @param index
     * @param name
     * @param callback
     * @param $this  Reference to object
     * @private
     */
    function _html_append_styles (path, index, name, callback, $this) {
        var head = document.getElementsByTagName('head').item(0);
        var styles = document.createElement('link');
        var splitName = name.split('.');

        styles.rel = 'stylesheet';
        styles.media = 'screen';
        styles.href = path;
        styles.id = splitName[0].replace('/', '-');

        styles.onload = function () {
            var msgLoading = document.getElementById('splashscreen-message-style-value');

            try {
                var msgLoading = document.getElementById('splashscreen-message-style-value');
                msgLoading.innerHTML = name;
            } catch(e) {
                _debug(e);
            }

            $this.changeLoadStylesStatus(index, true);
            callback.call(this, name, index);
        };

        head.appendChild(styles);
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
     * Set path to JS scripts folder
     *
     * @param jsPath
     */
    this.setJsPath = function (jsPath) {
        this.jsPath = jsPath;
    };

    /**
     * Set path to css styles folder
     *
     * @param cssPath
     */
    this.setCssPath = function (cssPath) {
        this.cssPath = cssPath;
    };

    /**
     * Add JS script to array
     *
     * @param name
     * @param callback
     * @param priority
     */
    this.addScripts = function (name, callback, priority) {
        var isAdded = this.checkIsScriptAdded(name);

        if (priority === undefined) {
            priority = false;
        }

        if (!isAdded) {
            var randNumber = Math.floor((Math.random()*100000000)+1);
            this.scripts.push({ 'name': name, 'path': this.jsPath + name + '?v=' + randNumber, 'callback' : callback, 'loaded': false, 'priority':  priority});
            return this.scripts.length - 1;
        } else {
            return false;
        }
    };

    /**
     * Add CSS styles to array
     *
     * @param name
     * @param callback
     */
    this.addStyle = function (name, callback) {
        var isAdded = this.checkIsStyleAdded(name);

        if (!isAdded) {
            var randNumber = Math.floor((Math.random()*100000000)+1);
            this.styles.push({ 'name': name, 'path': this.cssPath + name + '?v=' + randNumber, 'callback' : callback, 'loaded': false });
            return this.styles.length - 1;
        } else {
            return false;
        }
    };

    /**
     * Change status 'loaded' to defined value
     *
     * @param index
     * @param value
     */
    this.changeLoadScriptStatus = function (index, value) {
        this.scripts[index]['loaded'] = value;
    };

    /**
     * Change status 'loaded' to defined value
     *
     * @param index
     * @param value
     */
    this.changeLoadStylesStatus = function (index, value) {
        this.styles[index]['loaded'] = value;
    };

    /**
     * Load JS scripts
     */
    this.loadScripts = function () {
        for (var i = 0; i < this.scripts.length; i++) {
            _html_append_script(this.scripts[i]['path'], i, this.scripts[i]['name'], this.scripts[i]['callback'], this);
        }
    };

    /**
     * Load CSS styles
     */
    this.loadStyles = function () {
        for (var i = 0; i < this.styles.length; i++) {
            _html_append_styles(this.styles[i]['path'], i, this.styles[i]['name'], this.styles[i]['callback'], this);
        }
    };


    /**
     * Append scripts to load
     *
     * @param name
     * @param callback
     */
    this.appendScripts = function (name, callback) {
        var index = this.addScripts(name, callback);

        if (index) {
            _html_append_script(this.scripts[index]['path'], index, this.scripts[index]['name'], this.scripts[index]['callback'], this);
        }

    };

    /**
     * Append scripts to load
     *
     * @param name
     * @param callback
     */
    this.appendStyles = function (name, callback) {
        var index = this.addStyle(name, callback);

        if (index) {
            _html_append_styles(this.styles[index]['path'], index, this.styles[index]['name'], this.styles[index]['callback'], this);
        }
    };

    /**
     * Function wait when every scripts are loaded
     *
     * @param callback
     */
    this.runScripts = function (callback) {
        var thisCom = this;
        timer = window.setInterval(function(){
            if (thisCom.checkAllScriptsLoaded()) {
                try {
                    window.clearInterval(timer);

                    var splashScreen = document.getElementById('splashscreen');
                    splashScreen.style.display = 'none';

                    callback.call(this);
                } catch (e) {

                }
            }
        }, 25);
    };

    /**
     * Return true if all scripts are loaded
     *
     * @return {Boolean}
     */
    this.checkAllScriptsLoaded = function () {
        for (var i = 0; i < this.scripts.length; i++) {
            if (!this.scripts[i]['loaded']) {
                return false;
            }
        }

        return true;
    };

    /**
     *
     * Return true if JS Script added
     *
     * @param name
     * @return {Boolean|Integer}
     */
    this.checkIsScriptAdded = function (name) {
        for (var i = 0; i < this.scripts.length; i++) {
            if (this.scripts[i]['name'] == name) {
                return i;
            }
        }

        return false
    };

    /**
     *
     * Return true if CSS styles added
     *
     * @param name
     * @return {Boolean|Integer}
     */
    this.checkIsStyleAdded = function (name) {
        for (var i = 0; i < this.styles.length; i++) {
            if (this.styles[i]['name'] == name) {
                return i;
            }
        }

        return false;
    }

    /**
     * Return path to JS scripts folder
     *
     * @return {String}
     */
    this.getPath = function () {
        return this.path;
    };

    /**
     * Detect browser & os
     *
     * @return browserDetectJSDraw
     */
    this.detectBrowser = function () {
        return this.detectBrowser;
    };

    /**
     * Show splash screen before loading all styles & JS scripts
     *
     * @return void
     */
    this.showSplashScreen = function () {
        var splashScreenContainer = document.createElement('div');
        var splashScreenBox = document.createElement('div');
        var splashScreenTop = document.createElement('div');
        var splashScreenBottom = document.createElement('div');
        var bodyElement = document.getElementsByTagName('body');
        var copyrightBox = document.createElement('div');
        var messageBox = document.createElement('div');
        var messageBoxP = document.createElement('div');
        var messageBoxLS = document.createElement('span');
        var messageBoxVS = document.createElement('span');
        var messageBoxLC = document.createElement('span');
        var messageBoxVC = document.createElement('span');
        var messageSeparator = document.createElement('span');

        splashScreenContainer.className = 'splashscreen-container';
        splashScreenContainer.setAttribute('id', 'splashscreen');

        splashScreenBox.className = 'splashscreen-box';
        splashScreenBox.setAttribute('id', 'splashscreen-box');

        splashScreenTop.className = 'splashscreen-box-top';
        splashScreenTop.setAttribute('id', 'splashscreen-box-top');

        splashScreenBottom.className = 'splashscreen-box-bottom';
        splashScreenBottom.setAttribute('id', 'splashscreen-box-bottom');

        splashScreenTop.innerHTML = '<div><p>Loading application ...</p></div>';

        messageBox.className = 'splashscreen-box-bottom-message';
        messageBox.setAttribute('id', 'splashscreen-box-bottom-message');

        copyrightBox.className = 'splashscreen-box-bottom-footer';
        copyrightBox.setAttribute('id', 'splashscreen-box-bottom-footer');


        messageBoxLS.className = 'splashscreen-message-script-label';
        messageBoxLS.setAttribute('id', 'splashscreen-message-script-label');
        messageBoxLS.innerHTML = 'Loading Script: ';

        messageBoxVS.className = 'splashscreen-message-script-value';
        messageBoxVS.setAttribute('id', 'splashscreen-message-script-value');
        messageBoxVS.innerHTML = 'none';

        messageBoxLC.className = 'splashscreen-message-style-label';
        messageBoxLC.setAttribute('id', 'splashscreen-message-style-label');
        messageBoxLC.innerHTML = 'CSS style: ';

        messageBoxVC.className = 'splashscreen-message-style-value';
        messageBoxVC.setAttribute('id', 'splashscreen-message-style-value');
        messageBoxVC.innerHTML = 'none';

        messageBoxP.className = 'splashscreen-message-padding';
        messageSeparator.className = 'splashscreen-message-separator';
        messageSeparator.innerHTML = ' ';

        messageBoxP.appendChild(messageBoxLS);
        messageBoxP.appendChild(messageBoxVS);
        messageBoxP.appendChild(messageSeparator);
        messageBoxP.appendChild(messageBoxLC);
        messageBoxP.appendChild(messageBoxVC);
        messageBox.appendChild(messageBoxP);

        splashScreenBottom.appendChild(messageBox);
        splashScreenBottom.appendChild(copyrightBox);

        splashScreenBox.appendChild(splashScreenTop);
        splashScreenBox.appendChild(splashScreenBottom);
        splashScreenContainer.appendChild(splashScreenBox);
        bodyElement[0].appendChild(splashScreenContainer);
    };
}