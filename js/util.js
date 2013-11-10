

define([], function () {
    var util = {
        assert: function (truth, message) {
            if (!truth) {
                throw new Error(message);
            }
        },

        applyMethodToGraphAndClassroom: function (graph, classroom, method) {
            var self = this;
            classroom.each(function (student) {
                var name, node, leaderName;

                name = student.get('name');
                node = graph.getOrCreateNode(name);

                options = method(graph, node);

                student.set(options);
            });
        }
    };

    return util;
});
