/**
 * @author Bilal Cinarli
 */

module.exports = {
    css: {
        files: "**/*.scss",
        tasks: ["sass"]
    },
    js : {
        files: "app/assets/scripts/app.js",
        tasks: ["uglify"]
    }
};