
define(["util"], function (util) {
    var assert = util.assert;

    function Graph () {
        this.initialize.apply(this, arguments);
    }

    (function (proto) {
        proto.initialize = function () {
            this.nodes = {};
            this.nodeNames = [];
            this.edges = {};
            this.blankEdge = {};
        };

        proto.setBlankEdge = function (blankEdge) {
            this.blankEdge = blankEdge;
        };

        proto.getOrCreateNode = function (name) {
            var node;

            node = this.nodes[name];
            if (!node) {
                node = {
                    name: name
                };
                this.nodeNames.push(name);
                this.nodes[name] = node;
            }

            return node;
        };

        proto.setEdgeValue = function (fromName, toName, key, value) {
            assert(this.nodes[fromName]);
            assert(this.nodes[toName]);
            assert(fromName !== toName);

            var edge;

            edge = this.getOrCreateEdge(fromName, toName);
            edge.setValue(key, value);
        };

        proto.getOrCreateEdge = function (fromName, toName) {
            var comboKey, edge;

            comboKey = buildComboKey(fromName, toName);
            edge = this.edges[comboKey];
            if (!edge) {
                edge = new Edge(fromName, toName);
                this.edges[comboKey] = edge;
            }

            return edge;
        };

        proto.getEdge = function (fromName, toName) {
            var comboKey, edge;

            comboKey = buildComboKey(fromName, toName);
            edge = this.edges[comboKey];

            return edge;
        };

        proto.eachName = function (callback) {
            var index, name;
            for (index = 0; index < this.nodeNames.length; index++) {
                name = this.nodeNames[index];
                callback(name);
            }
        };

        proto.eachNode = function (callback) {
            var self = this;
            this.eachName(function (name) {
                var node = self.nodes[name];
                callback(node, name);
            });
        };

        proto.eachEdgeFrom = function (fromName, callback) {
            var self = this;
            this.eachName(function (toName) {
                var comboKey, edge;

                if (fromName === toName) {
                    return;
                }
                comboKey = buildComboKey(fromName, toName);
                edge = self.edges[comboKey];
                if (!edge) {
                    edge = self.blankEdge;
                }
                callback(edge, toName);
            });
        };

        function buildComboKey (fromName, toName) {
            return fromName + "__" + toName;
        };
    }(Graph.prototype));


    function Edge () {
        this.initialize.apply(this, arguments);
    }

    (function (proto) {
        proto.initialize = function (fromName, toName) {
            this.fromName = fromName;
            this.toName = toName;
        };

        proto.setValue = function (key, value) {
            this[key] = value;
        };
    }(Edge.prototype));

    return Graph;
});
