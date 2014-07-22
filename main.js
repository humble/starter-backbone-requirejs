require.config({
  baseUrl: './',
  paths : {
    'text':        'vendor/requirejs-text/text',
    'jquery':      'vendor/jquery/dist/jquery',
    'underscore':  'vendor/underscore/underscore',
    'backbone':    'vendor/backbone/backbone',
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
  }
});

require([
  'jquery',
  'underscore',
  'backbone',
], function ($, _, Backbone) {



});
