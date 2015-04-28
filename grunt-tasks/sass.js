/**
 * @author Bilal Cinarli
 */

module.exports = {
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
};