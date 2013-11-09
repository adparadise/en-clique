
define(["underscore", "classroom", "student", "graph"], function (_, Classroom, Student, Graph) {
    var levels = {
        buildLevel: function (definition) {
            var graph, classroom;

            graph = this.buildGraph(definition);
            classroom = this.buildBackboneCollection(graph);

            return classroom;
        },

        buildBackboneCollection: function (graph) {
            var models, classroom;

            models = [];
            graph.eachNode(function (node) {
                var student;

                student = new Student();
                student.node = node;
                models.push(node);
            });
            classroom = new Classroom(models);

            return classroom;
        },

        buildGraph: function (definition) {
            var graph;

            graph = new Graph();
            graph.setBlankEdge({ affinity: 0 });

            _.each(definition.students, function (studentDef) {
                var student;
                student = graph.getOrCreateNode(studentDef.name);
                student.affinity = studentDef.affinity;
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
