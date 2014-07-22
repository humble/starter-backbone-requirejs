
/**
 * This is entry-point for testing with karma-runner and requirejs
 * based on sinpped from: http://karma-runner.github.io/0.8/plus/RequireJS.html
 */
(function() {

  var allTestFiles = null;
  var baseUrl = '';
  var requirejsCallback = null;
  var TEST_REGEXP = /\.spec\.js$/;

  var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
  };

  // if invoked in karma-runner environment
  if (typeof window != 'undefined' && window.__karma__ != undefined) {
    // Karma serves files from '/base'
    baseUrl = '/base';
    requirejsCallback = window.__karma__.start;

    // looking for *.spec.js files
    allTestFiles = [];
    Object.keys(window.__karma__.files).forEach(function(file) {
      if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
      }
    });
  }

  requirejs.config({
      baseUrl: baseUrl,

      paths : {
        'text':        'vendor/requirejs-text/text',
        'jquery':      'vendor/jquery/dist/jquery',
        'underscore':  'vendor/underscore/underscore',
        'backbone':    'vendor/backbone/backbone',
        'chai':        'node_modules/chai/chai'
      },

      shim : {
        'jquery' : {
          exports : 'jQuery'
        },
        'underscore' : {
          exports : '_'
        },
        'backbone' : {
          deps : ['jquery', 'underscore'],
          exports : 'Backbone'
        }
      },

      // ask Require.js to load these files (all our tests)
      deps: allTestFiles,

      // start test run, once Require.js is done
      callback: requirejsCallback
  });
})();
