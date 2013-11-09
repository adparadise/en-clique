define(['backbone', 'jquery', 'underscore', 'levels', 'level_definitions', 'walrus'], function(Backbone, $, _, levels, definitions, walrus) {
    var app = {
        init: function() {
            levels.buildLevel(definitions[0]);
            console.log(levels);
            var personInfo = Walrus.Parser.parse( $("#personInfo").html() );
            var personResult = personInfo.compile({
                person: {name: "Janet", "id": "1"}
            });
            $("body").append(personResult);
        }
    };
    return app;
});
