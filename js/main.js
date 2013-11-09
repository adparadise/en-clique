requirejs.config({
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        }
    },
    paths: {
        'jquery': 'jquery',
        'underscore': 'lodash',
        'backbone': 'backbone',
        'sigma': 'sigma.min',
        'graph': 'graph',
        'clique': 'clique',
        'util': 'util',
        'app': 'app'

    }
});

require(["app"], function(app) {
    app.init();
});
