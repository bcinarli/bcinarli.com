/**
 * @author Bilal Cinarli
 */

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg  : grunt.file.readJSON('package.json'),
        sass : {
            dev : {
                options: {
                    style: 'nested'
                },
                files  : {
                    'app/assets/styles/styles.css': 'app/assets/styles-sass/styles.scss'
                }
            },
            dist: {
                options: {
                    style    : 'compressed',
                    sourcemap: 'none'
                },
                files  : {
                    'app/assets/styles/styles.min.css': 'app/assets/styles-sass/styles.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'assets/styles/*.css',
                        './*.php'
                    ]
                },
                options: {
                    proxy: 'http://os/bcinarli.com/',
                    watchTask: true
                }
            }
        }
    });


    // Load the plugin that provides the "sass" task.
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Load the plugin that provides the "sync" task.
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('dist', ['browserSync', 'watch', 'sass:dist']);
    grunt.registerTask('dev', ['browserSync', 'watch', 'sass:dev']);
};