define(['backbone', 'jquery', 'underscore'], function(Backbone, $, _) {
    var app = {
        init: function() {
            $("body").append($("<div class='person'><span class='person-name'>Janet</span></div>"));
        }
    };
    return app;
});