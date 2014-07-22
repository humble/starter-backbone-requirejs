module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch'); // load always to allow renaming later

  var taskConfig = {
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {}
    },

    sass: {
      options: {
        style: 'expanded',
        compass: true
      },
      build: {
        files: [
          {
            expand: true,
            cwd: 'scss',
            src: ['*.scss'],
            dest: 'css',
            ext: '.css'
          }
        ]
      }
    },

    eslint: {
      app: [
        'app/**/*.js',
        '!**/*.spec.js'
      ]
    },

    karma: {
      options: {
        configFile: './karma.conf.js',
        files: [
          { pattern: 'node_modules/chai/chai.js', included: false },
          { pattern: 'vendor/**/*.js', included: false },
          { pattern: 'app/**/*.js', included: false },
          { pattern: 'app/**/*.spec.js', included: false },

          'main-test.js'
        ]
      },

      unit: {
        background: true
      },

      continuous: {
        singleRun: true,
        browsers: [ 'Chrome' ]
      }
    },

    delta: {
      options: {
        livereload: true
      },

      gruntfile: {
        files: [ './Gruntfile.js' ]
      },

      html: {
        files: [ '**/*.html' ]
      },

      scss: {
        files: [ 'scss/*.scss' ],
        tasks: [ 'sass:build' ]
      },

      js: {
        files: [ 'app/**/*.js' ],
        tasks: [ 'eslint', 'karma:unit:run' ]
      }
    }
  };

  grunt.initConfig( taskConfig );

  grunt.registerTask( 'build', [ 'build:scss' ]);
  grunt.registerTask( 'build:scss', [ 'sass:build' ] );

  grunt.renameTask( 'watch', 'delta' );
  grunt.registerTask( 'watch', [ 'build', 'karma:unit:start', 'connect:server', 'delta' ] );

  grunt.registerTask( 'test', [ 'karma:continuous' ] );

}
