define([], function () {
    var LeaderFinder = {
        apply: function (graph, node) {
            return {
                leaderName: this.getCliqueLeaderName(graph, node, this.cliqueRank),
                extroversion: node.extroversion
            };
        },

        getCliqueLeaderName: function (graph, node, cliqueRankFunction) {
            var maxRank, leaderName;

            leaderName = node.name;
            maxRank = cliqueRankFunction({ affinity: 1 }, node);

            graph.eachEdgeFrom(node.name, function (edge, toName) {
                var toNode, rank

                toNode = graph.getOrCreateNode(toName);
                reverseEdge = graph.getOrCreateEdge(toName, node.name);
                rank = cliqueRankFunction(edge, reverseEdge, toNode);

                if (rank > maxRank) {
                    leaderName = toName;
                    maxRank = rank;
                }
            });

            return leaderName;
        },

        cliqueRank: function (edge, reverseEdge, toNode) {
            var rank = 0;

            if (edge.affinity > 0 && reverseEdge.affinity > 0) {
                rank = toNode.extroversion;
            }

            return rank;
        }
    }

    return LeaderFinder
});

