/**
 * @author Bilal Cinarli
 */

module.exports = {
    dev: {
        options: {
            proxy    : "http://local-os/bcinarli.com/",
            files    : ["app/assets/styles/*.css", "app/assets/scripts/app.min.js", "app/assets/images/*", "app/**/*.php"],
            watchTask: true
        }
    }
};