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

    delta: {
      options: {
        livereload: true
      },

      gruntfile: {
        files: ['./Gruntfile.js']
      },

      html: {
        files: ['**/*.html']
      },

      scss: {
        files: [ 'scss/*.scss' ],
        tasks: [ 'sass:build' ]
      }
    }
  };

  grunt.initConfig( taskConfig );

  grunt.registerTask( 'build', [ 'build:scss' ]);
  grunt.registerTask( 'build:scss', [ 'sass:build' ] );

  grunt.renameTask( 'watch', 'delta' );
  grunt.registerTask( 'watch', [ 'build', 'connect:server', 'delta' ] );

}
