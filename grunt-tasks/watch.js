/**
 * @author Bilal Cinarli
 */

module.exports = {
    css: {
        files: "**/*.scss",
        tasks: ["sass"]
    },
    js : {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'uglify']
    }
};