
define(['js/graph'], function (Graph) {
    describe("Graph", function () {
        describe("eachNode", function () {
            it("should callback each node", function () {
                var graph;
                var person1, person2;
                var calledNameHash, calledNames;

                graph = new Graph();
                person1 = { name: "one" };
                person2 = { name: "two" };
                graph.addNode(person1.name, person1);
                graph.addNode(person2.name, person2);

                calledNameHash = {};
                calledNames = [];
                graph.eachNode(function (person) {
                    if (!calledNameHash[person.name]) {
                        calledNames.push(person.name);
                        calledNameHash[person.name] = 0;
                    }
                    calledNameHash[person.name] += 1;
                });
                expect(calledNames.sort()).toEqual(["one", "two"]);
                expect(calledNameHash["one"]).toEqual(1);
                expect(calledNameHash["two"]).toEqual(1);
            });
        });

        describe("eachEdgeFrom", function () {
            it("should iterate over the edges", function () {
                var graph;
                var person1, person2;
                var calledNameHash, calledNames;
                var edgeValues;

                graph = new Graph();
                person1 = { name: "one" };
                person2 = { name: "two" };
                graph.addNode(person1.name, person1);
                graph.addNode(person2.name, person2);
                graph.setEdgeValue(person1.name, person2.name, "value", 0.5 );
                graph.setEdgeValue(person2.name, person1.name, "value", -0.5);

                calledNameHash = {};
                calledNames = [];
                edgeValues = {};
                graph.eachEdgeFrom("one", function (edge, toName) {
                    if (!calledNameHash[toName]) {
                        calledNames.push(toName);
                        calledNameHash[toName] = 0;
                    }
                    calledNameHash[toName] += 1;
                    edgeValues[toName] = edge.value;
                });

                expect(calledNames.sort()).toEqual(["two"]);
                expect(edgeValues["two"]).toEqual(0.5);
            });
        });
    });
});
