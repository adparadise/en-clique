

define(['graph', 'leader_finder'], function (Graph, LeaderFinder) {
    describe("LeaderFinder", function () {
        it("should find the most extroverted person in a clique to be the leader", function () {
            var graph;
            var person1, person2;
            var leaderName;

            graph = new Graph();
            person1 = graph.getOrCreateNode("one");
            person2 = graph.getOrCreateNode("two");
            person1.name = "one";
            person2.name = "two";
            person1.extroversion = 1.0;
            person2.extroversion = 0.5;

            graph.setEdgeValue("one", "two", "affinity", 1);
            graph.setEdgeValue("two", "one", "affinity", 1);

            leaderName = LeaderFinder.getCliqueLeaderName(graph, person2);
            expect(leaderName).toEqual("one");
        });

        it("should find oneself to be the leader if she is the most extroverted person in a clique", function () {
            var graph;
            var person1, person2;
            var leaderName;

            graph = new Graph();
            person1 = graph.getOrCreateNode("one");
            person2 = graph.getOrCreateNode("two");
            person1.name = "one";
            person2.name = "two";
            person1.extroversion = 1.0;
            person2.extroversion = 0.5;

            graph.setEdgeValue("one", "two", "affinity", 1);
            graph.setEdgeValue("two", "one", "affinity", 1);

            leaderName = LeaderFinder.getCliqueLeaderName(graph, person1);
            expect(leaderName).toEqual("one");
        });

        it("should find oneself to be the leader if not in a clique", function () {
            var graph;
            var person;
            var leaderName;

            graph = new Graph();
            person = graph.getOrCreateNode("one");
            person.name = "one";
            person.extroversion = 1.0;

            leaderName = LeaderFinder.getCliqueLeaderName(graph, person);
            expect(leaderName).toEqual("one");
        });
    });
});
