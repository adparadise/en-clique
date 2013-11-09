define(["classroom", "student", "graph_classroom_binding"], function (Classroom, Student, GraphClassroomBinding) {
    function Director () {
        this.initialize.apply(this, arguments);
    }

    (function (proto) {
        proto.initialize = function (graph) {
            this.graph = graph;

            this.classroom = buildBackboneCollection(this.graph);
            this.binding = new GraphClassroomBinding();

            this.binding.calculateCliquesAndUpdate(this.graph, this.classroom);
        };

        function buildBackboneCollection (graph) {
            var models, classroom;

            models = [];
            graph.eachNode(function (node) {
                var student;

                student = new Student({
                    name: node.name
                });
                student.node = node;
                models.push(node);
            });
            classroom = new Classroom(models);

            return classroom;
        };
    }(Director.prototype));

    return Director;
});
