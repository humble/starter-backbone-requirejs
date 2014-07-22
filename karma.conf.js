module.exports = function(config) {

  config.set({
    /**
     * Path that will be used to resolve and exclude files.
     */
    basePath: './',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [],

    /**
     * Frameworks to use.
     */
    frameworks: [ 'mocha', 'sinon', 'requirejs' ],

    /**
     * List of files to exclude.
     */
    exclude: [],

    /**
     * Test results reporter to use.
     * Currently available:
     *   'dots', 'progress', 'junit', 'growl', 'coverage'
     */
    reporters: [ 'dots' ],

    /**
     * Web server port.
     */
    port: 9876,

    /**
     * Enable / disable colors in the output (reporters and logs).
     */
    colors: true,

    /**
     * Level of logging.
     * Possible values:
     *   config.LOG_DISABLE || config.LOG_ERROR ||
     *   config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
     */
    logLevel: config.LOG_INFO,

    /**
     * Enable / disable watching file and executing tests whenever any file changes.
     * Set to false since grunt watch takes care of this.
     */
    autoWatch: false,

    /**
     * Start these browsers.
     * Currently available:
     *   Chrome, ChromeCanary, Firefox, Opera,
     *   Safari (only Mac), PhantomJS, IE (only Windows)
     */
    browsers: [ 'Chrome' ],


    /**
     * If browser does not capture in given timeout [ms], kill it.
     */
    captureTimeout: 60000,

    /**
     * Continuous Integration mode.
     * If true, it capture browsers, run tests and exit
     */
    singleRun: false
  });
};
