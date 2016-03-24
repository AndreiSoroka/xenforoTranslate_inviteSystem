module.exports = function (grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    xmlmin: {
      dist: {
        options: {
          preserveComments: true
        },
        files: {
          'build/invite_system_RU.xml': 'src/invite_system_RU.xml'
        }
      }
    },
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        cwd: 'build/',
        src: ['**/*'],
        dest: 'public/'
      }
    }
  });

  //grunt.registerTask('build', ['copy', 'webpack:production']);
  //grunt.registerTask('default', ['copy', 'webpack:developer']);

};
