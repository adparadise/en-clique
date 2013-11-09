define(['backbone', 'jquery', 'underscore', 'levels', 'level_definitions'], function(Backbone, $, _, levels, definitions) {
    var app = {
        init: function() {
            levels.buildLevel(definitions[0]);
            $("body").append($("<div class='person'><span class='person-name'>Janet</span></div>"));
        }
    };
    return app;
});
