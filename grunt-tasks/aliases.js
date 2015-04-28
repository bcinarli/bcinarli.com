/**
 * @author Bilal Cinarli
 */

module.exports = {
    dist: {
        description: 'Dist tasks',
        tasks      : ['browserSync', 'watch', 'sass:dist', 'uglify']
    },
    dev: {
        description: 'Dev tasks',
        tasks      : ['browserSync', 'watch', 'sass:dev', 'uglify']
    }
};