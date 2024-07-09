const { options } = require("less");

module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files: {
                    './dev/styles/main.css': './src/styles/main.less'
                }
            },
            production:{
                options:{
                    compress: true
                },
                files:{
                    './dist/styles/main.min.css': './src/styles/main.less'
                }
            }
        },
        watch:{
            less:{
                files: ['./src/styles/main.less'],
                tasks: ['less:development']
            },
            html:{
                files: ['./src/index.html'],
                tasks: ['replace:dev']
            }
        },
        uglify:{
            target:{
                files:{
                    './dist/scripts/main.min.js': './src/scripts/main.js'
                }
            }
        },
        htmlmin:{
            dist:{
                options:{
                    removeComments: true,
                    collapseWhitespace: true
                },
                files:{
                    './dist/index.html': './src/index.html'
                }
            }
        },
        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match:'ENDERECO_DO_CSS',
                            replace:'./styles/main.css'
                        },
                        {
                            match:'ENDERECO_DO_JS',
                            replace:'../src/scripts/main.js'
                        }
                    ]
                },
                files:[{
                    expand:true,
                    flatten:true,
                    src: ['./src/index.html'],
                    dest: './dev/'
                }]
            },
            dist:{
                options:{
                    patterns:[
                        {
                            match: 'ENDERECO_DO_CSS',
                            replace: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replace: './scripts/main.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten:true,
                        src: ['./src/index.html'],
                        dest: './dist/'
                    }
                ]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');

    grunt.registerTask('default', ['less:development', 'replace:dev', 'watch']);
    grunt.registerTask('build', ['htmlmin:dist' ,'less:production', 'uglify', 'replace:dist']);
}

