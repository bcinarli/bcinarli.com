/**
 * @author Bilal Cinarli
 */

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg        : grunt.file.readJSON('package.json'),
        sass       : {
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
        uglify     : {
            dist: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'app/assets/scripts/sourcemap.map'
                },
                files: {
                    'app/assets/scripts/app.min.js': ['app/assets/scripts/app.js']
                }
            }
        },
        watch      : {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            },
            js : {
                files: 'app/assets/scripts/app.js',
                tasks: ['uglify']
            }
        },
        browserSync: {
            dev: {
                options: {
                    proxy    : 'http://local-os/bcinarli.com/',
                    files    : ['app/assets/styles/*.css', 'app/assets/scripts/app.min.js', 'app/assets/images/*', 'app/**/*.php'],
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

    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('dist', ['browserSync', 'watch', 'sass:dist', 'uglify']);
    grunt.registerTask('dev', ['browserSync', 'watch', 'sass:dev', 'uglify']);
};