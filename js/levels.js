
define(["underscore", "graph", "director"], function (_, Graph, Director) {
    var levels = {
        buildLevelDirector: function (definition) {
            var graph, director;

            graph = this.buildGraph(definition);
            director = new Director(graph);

            return director;
        },

        buildGraph: function (definition) {
            var graph;

            graph = new Graph();
            graph.setBlankEdge({ affinity: 0 });

            _.each(definition.students, function (studentDef) {
                var student;
                student = graph.getOrCreateNode(studentDef.name);
                student.extroversion = studentDef.extroversion;
            });

            _.each(_.keys(definition.affinities), function (comboKey) {
                var fragments;
                var fromName, toName;

                fragments = comboKey.split("__");
                fromName = fragments[0];
                toName = fragments[1];

                graph.setEdgeValue(fromName, toName, "affinity", definition.affinities[comboKey]);
            });

            return graph;
        }
    };

    return levels;
});
