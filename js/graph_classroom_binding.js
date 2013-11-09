define([], function () {
    function GraphClassroomBinding () {
        this.initialize.apply(this, arguments);
    }

    (function (proto) {
        proto.initialize = function () {};

        proto.calculateCliquesAndUpdate = function (graph, classroom) {
            var self = this;
            classroom.each(function (student) {
                var name, node, leaderName;

                name = student.get('name');
                node = graph.getOrCreateNode(name);
                leaderName = getCliqueLeaderName(graph, node, cliqueRank);

                student.set({
                    "extroversion": node.extroversion,
                    "leaderName": leaderName
                });
            });
        };

        function getCliqueLeaderName (graph, node, cliqueRankFunction) {
            var maxRank, leaderName;

            leaderName = node.name;
            maxRank = cliqueRankFunction({ affinity: 1 }, node);

            graph.eachEdgeFrom(node.name, function (edge, toName) {
                var toNode, rank

                toNode = graph.getOrCreateNode(toName);
                rank = cliqueRankFunction(edge, toNode);

                if (rank > maxRank) {
                    leaderName = toName;
                    maxRank = rank;
                }
            });
            return leaderName;
        };

        function cliqueRank (edge, toNode) {
            var rank = 0;

            if (edge.affinity > 0) {
                rank = toNode.extroversion;
            }

            return rank;
        };
    }(GraphClassroomBinding.prototype));

    return GraphClassroomBinding;
});

