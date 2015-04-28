/**
 * @author Bilal Cinarli
 */

module.exports = {
    dist: {
        options: {
            sourceMap: true,
            sourceMapName: "app/assets/scripts/app.min.map",
            banner: '/*! <%= package.name %> \n' +
                  ' *  <%= package.description %> \n' +
                  ' *  @author <%= package.author %> \n' +
                  '<% package.contributors.forEach(function(contributor) { %>' +
                  ' *          <%= contributor.name %> <<%=contributor.email %>> (<%=contributor.url %>)\n' +
                  '<% }) %>' +
                  ' *  @version <%= package.version %> \n' +
                  ' *  @build <%= grunt.template.today("dd-mm-yyyy") %> \n' +
                  ' */\n'
        },
        files: {
            "app/assets/scripts/app.min.js": ["app/assets/scripts/app.js"]
        }
    }
};
