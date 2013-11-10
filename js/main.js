requirejs.config({
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'walrus': {
            exports: 'Walrus'
        },
        'walrus.collections': ['walrus'],
        'walrus.inflections': ['walrus'],
        'walrus.strings': ['walrus'],
        'sigma': {
            exports: 'sigma'
        },
        'sigma.parseJson': {
            deps: ['jquery', 'sigma']
        }
    },
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/lodash',
        'backbone': 'lib/backbone',
        'sigma': 'lib/sigma.min',
        'sigma.parseJson': 'lib/sigma.parseJson',
        'facade': 'lib/facade',
        'walrus': 'lib/walrus',
        'walrus.collections': 'lib/walrus.collections',
        'walrus.inflections': 'lib/walrus.inflections',
        'walrus.strings': 'lib/walrus.strings',

    }
});

require(['app'], function(app) {
    app.init();
});
