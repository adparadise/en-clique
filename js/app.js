define(['backbone', 'jquery', 'underscore', 'levels', 'level_definitions', 'walrus', 'sigma'], function(Backbone, $, _, levels, definitions, walrus, sigma) {
    var app = {
        init: function() {
            levels.buildLevel(definitions[0]);
            console.log(levels);
            var personInfo = Walrus.Parser.parse( $("#personInfo").html() );
            var personResult = personInfo.compile({
                person: {name: "Janet", "id": "1"}
            });
            $("#gameBoard").append(personResult);
            
             var sigInst = sigma.init($("#gameBoard").get(0)).drawingProperties({
                defaultLabelColor: '#fff',
                defaultLabelSize: 14,
                defaultLabelBGColor: '#fff',
                defaultLabelHoverColor: '#000',
                labelThreshold: 6,
                defaultEdgeType: 'curve'
                }).graphProperties({
                minNodeSize: 0.5,
                maxNodeSize: 5,
                minEdgeSize: 1,
                maxEdgeSize: 1
                }).mouseProperties({
                maxRatio: 4
                });
        }
    };
    return app;
});
