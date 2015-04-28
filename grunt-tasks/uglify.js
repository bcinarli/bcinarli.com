/**
 * @author Bilal Cinarli
 */

module.exports = {
    dist: {
        options: {
            sourceMap: true,
            sourceMapName: "app/assets/scripts/app.min.map"
        },
        files: {
            "app/assets/scripts/app.min.js": ["app/assets/scripts/app.js"]
        }
    }
};
