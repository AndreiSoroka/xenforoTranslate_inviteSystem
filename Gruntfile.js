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
          archive: 'build/invite_system_RU.tar.gz'
        },
        files: [{
          expand: true,
          cwd: 'build/',
          src: ['*.xml'],
          dest: '/',
          filter: 'isFile'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['src/*.xml'],
        tasks: ['build']
      }
    }
  });

  grunt.registerTask('build', ['xmlmin', 'compress']);
  grunt.registerTask('default', ['build', 'watch']);
};
