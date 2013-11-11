define(["classroom", "student", "leader_finder", "util"], function (Classroom, Student, LeaderFinder, Util) {
    function Director () {
        this.initialize.apply(this, arguments);
    }

    (function (proto) {
        proto.initialize = function (graph) {
            this.graph = graph;

            this.classroom = buildBackboneCollection(this.graph);

            Util.applyMethodToGraphAndClassroom(this.graph, this.classroom, LeaderFinder.apply);
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
