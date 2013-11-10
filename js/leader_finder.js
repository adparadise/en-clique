define([], function () {
    var LeaderFinder = {
        apply: function (graph, node) {
            return {
                leaderName: LeaderFinder.getCliqueLeaderName(graph, node),
                extroversion: node.extroversion
            };
        },

        getCliqueLeaderName: function (graph, node) {
            var self = this;
            var maxRank, leaderName;

            // Start with the assumption that this person is their own leader.
            leaderName = node.name;
            maxRank = this.cliqueRank({ affinity: 1 }, node);

            graph.eachEdgeFrom(node.name, function (edge, toName) {
                var toNode, rank

                toNode = graph.getOrCreateNode(toName);
                reverseEdge = graph.getOrCreateEdge(toName, node.name);
                rank = self.cliqueRank(edge, toNode);

                if (rank > maxRank) {
                    leaderName = toName;
                    maxRank = rank;
                }
            });

            return leaderName;
        },

        cliqueRank: function (edge, toNode) {
            var rank = 0;

            if (edge.affinity > 0) {
                rank = toNode.extroversion;
            }

            return rank;
        }
    }

    return LeaderFinder
});

