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
        }
    },
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/lodash',
        'backbone': 'lib/backbone',
        'sigma': 'lib/sigma.min',
        'walrus': 'lib/walrus'
    }
});

require(['app'], function(app) {
    app.init();
});
