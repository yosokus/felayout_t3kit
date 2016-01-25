module.exports = {

    // copy tasks for Main development process
    fonts: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'fonts/{,*/}*.*'
        ]
    },
    images: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'images/{,*/}*.*'
        ]
    },
    flags: {
        expand: true,
        dot: true,
        cwd: '<%= bc %>/flag-icon-css/flags/4x3/',
        dest: '<%= temp %>/flags/4x3/',
        src: [
            'be.svg',
            'dk.svg',
            'ee.svg',
            'fl.svg',
            'fr.svg',
            'fi.svg',
            'de.svg',
            'it.svg',
            'nl.svg',
            'nz.svg',
            'no.svg',
            'pl.svg',
            'pt.svg',
            'es.svg',
            'se.svg',
            'ch.svg',
            'gb.svg',
            'ua.svg',
            'ro.svg',
            'us.svg'
        ]
    },
    toRoot: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/copyToRoot',
        dest: '<%= temp %>',
        src: [
            '{,*/}*.*'
        ]
    },

    // copy tasks for static site
    siteFiles: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= site %>',
        src: [
            '*.js',
            '*.css',
            '*.html',
            '*.{ico,png,txt,xml,svg}',
            'flags/{,*/}*.*',
            'fonts/{,*/}*.*'
        ]
    },

    // copy tasks for small project
    smallFiles: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= small %>',
        src: [
            'copyToRoot/{,*/}*.*',
            '!copyToRoot/robots.txt',
            'fonts/{,*/}*.*'
        ]
    },
    smallJs: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= small %>',
        src: [
            '*.js',
            'flags/{,*/}*.*',
            '!local.js'
        ]
    },
    smallCss: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= small %>',
        src: [
            'components.css',
        ]
    },

    // copy tasks for BIG project
    bigFiles: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= big %>',
        src: [
            'copyToRoot/{,*/}*.*',
            '!copyToRoot/robots.txt',
            'fonts/{,*/}*.*'
        ]
    },
    bigCssJs: {
        expand: true,
        dot: true,
        cwd: '<%= temp %>',
        dest: '<%= big %>',
        src: [
            '*.js',
            '!local.js',
            '*.css',
            'flags/{,*/}*.*',
            '!local.css'
        ]
    },
    gitIgnoreBig: {
        expand: true,
        dot: true,
        cwd: '.',
        dest: '<%= big %>',
        src: [
            '.gitignore'
        ]
    },
    gitIgnoreSmall: {
        expand: true,
        dot: true,
        cwd: '.',
        dest: '<%= small %>',
        src: [
            '.gitignore'
        ]
    }
};
