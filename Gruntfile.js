module.exports = function(grunt) {

  grunt.initConfig({
    specs: grunt.file.readJSON('specs.json'),
    clean: ['build'],
    prompt: {
      target: {
        options: {
          questions: [
            {
              config: 'emailid',
              type: 'input',
              message: 'Email folter to process:',
              default: 'welcome'
            },
            {
              config: 'uri',
              type: 'input',
              message: 'URL of the html version:'
            }
          ]
        }
      },
    },
    inlinecss: {
      main: {
        options: {
        },
        files: {
          'build/index.html': 'emails/<%= emailid %>/index.html'
        }
      }
    },
    'string-replace': {
      dist: {
        files: {
          'build/index.html': 'build/index.html'
        },
        options: {
          replacements: [{
            pattern: /%= @print (.*?) %/ig,
            replacement: function (match, p1) {
              var specs = grunt.file.readJSON('specs.json');
              return specs[p1];
            }
          }, {
            pattern: /%= @input (.*?) %/ig,
            replacement: function (match, p1) {
              return grunt.config.get(p1);
            }
          }, {
            pattern: /src=".*?images\/(.*?)\.png"/ig,
            replacement: function (match, p1) {
              var specs = grunt.file.readJSON('specs.json');
              var image = specs.images_wrapper.replace('%image%', p1 + '.png');
              return 'src="' + image + '"';
            }
          }]
        }
      }
    },
    htmlentities: {
      options: {
        allowUnsafeSymbols: true
      },
      files: {
        src: 'build/index.html',
        dest: 'build/'
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['images/*'], dest: 'build/images/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['emails/<%= emailid %>/images/*'], dest: 'build/images/', filter: 'isFile'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-inline-css');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-prompt');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-htmlentities');

  grunt.registerTask('default', ['clean', 'prompt', 'inlinecss', 'string-replace', 'htmlentities', 'copy']);

};