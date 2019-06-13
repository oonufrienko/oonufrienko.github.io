module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'dist/js/script.min.js'
        }
      },
    concat_css: {
      options: {},
      all: {
        src: ['src/css/*.css'],
        dest: 'dist/css/styles.min.css'
      }
    },
    uglify: {
      dist: {
        src: ['dist/js/script.min.js'],
        dest: 'dist/js/script.min.js'
        }
      },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/styles.min.css': ['dist/css/styles.min.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};