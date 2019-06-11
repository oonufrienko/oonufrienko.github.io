module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
        }
      },
    concat_css: {
      options: {},
      all: {
        src: ['css/src/*.css'],
        dest: 'css/dist/styles.min.css'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
        }
      },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/dist/styles.min.css': ['css/dist/styles.min.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

//   grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};