define(['underscore'], function (_) {
    var definitions = [
        {
            students: [
                { name: "Quincy",      extroversion: 0.81 },
                { name: "Douglas",     extroversion: 0.72 },
                { name: "Felix",       extroversion: 0.54 },
                { name: "Theo",        extroversion: 0.41 },
                { name: "Kelly",       extroversion: 0.62 },
                { name: "Alex",        extroversion: 0.40 },
                { name: "Umberto",     extroversion: 0.32 },

                { name: "Charlie",     extroversion: 0.80 },
                { name: "Ralph",       extroversion: 0.79 },
                { name: "Sal",         extroversion: 0.73 },
                { name: "Jowls",       extroversion: 0.51 },
                { name: "Inigo",       extroversion: 0.49 },
                { name: "Velma",       extroversion: 0.39 },

                { name: "Percy",       extroversion: 0.78 },
                { name: "Garfield",    extroversion: 0.58 },
                { name: "Hector",      extroversion: 0.43 },

                { name: "Oppenheimer", extroversion: 0.74 },
                { name: "Barney",      extroversion: 0.60 },

                { name: "Nan",         extroversion: 0.71 },
                { name: "Ester",       extroversion: 0.65 },
                { name: "Xavier",      extroversion: 0.43 },

                { name: "Marissa",     extroversion: 0.67 },
                { name: "Laura",       extroversion: 0.64 },
                { name: "Zelda",       extroversion: 0.50 },
                { name: "Yana",        extroversion: 0.47 },
                { name: "Wilma",       extroversion: 0.38 },
            ],
            affinities: {}
        }
    ];

    cliques = [
        ["Quincy", "Douglas",  "Felix",  "Theo",  "Kelly",  "Alex",  "Umberto"],
        ["Charlie",  "Ralph",  "Sal",  "Jowls",  "Inigo",  "Velma"],
        ["Percy",  "Garfield",  "Hector"],
        ["Oppenheimer",  "Barney"],
        ["Nan",  "Ester",  "Xavier"],
        ["Marissa",  "Laura",  "Zelda",  "Yana",  "Wilma"]
    ];

    function createCliques (definition, cliques) {
        _.each(cliques, function (clique) {
            createClique(definition, clique);
        });
    };

    function createClique (definition, clique) {
        var priors;

        priors = [];
        _.each(clique, function (fromName) {
            _.each(priors, function (toName) {
                definition.affinities[fromName + "__" + toName] = 1;
                definition.affinities[toName + "__" + fromName] = 1;
            });
            priors.push(fromName);
        });
    };

    createCliques(definitions[0], cliques);
    console.log(definitions[0].affinities);

    return definitions;
});
