

function Graph () {
    this.initialize.apply(this, arguments);
}

(function (proto) {
    proto.initialize = function () {
        this.nodes = {};
        this.edges = {};
    };

    proto.addNode = function (key, node) {
        assert(!this.nodes[key]);
        this.nodes[key] = node;
    };

    proto.setEdgeValue = function (fromKey, toKey, key, value) {
        var edge;

        edge = getEdge(fromKey, toKey);
        edge.setValue(key, value);
    };

    proto.getEdge = function (fromKey, toKey) {
        var comboKey, edge;

        comboKey = buildComboKey(fromKey, toKey);
        edge = this.edges[comboKey];
        if (!edge) {
            edge = new Edge(fromKey, toKey);
            this.edge[comboKey] = edge;
        }

        return edge;
    };

    buildComboKey = function (fromKey, toKey) {
        return fromKey + "__" + toKey;
    };
}(Graph.prototype));


function Edge () {
    this.initialize.apply(this, arguments);
}

(function (proto) {
    proto.initialize = function (fromKey, toKey) {
        this.fromKey = fromKey;
        this.toKey = toKey;
    };
}(Edge.prototype));
