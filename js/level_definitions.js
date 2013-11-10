define([], function () {
    var definitions = [
        {
            students: [
                { name: "Alex", extroversion: 0.4 },
                { name: "Barney", extroversion: 0.6 },
                { name: "Charlie", extroversion: 0.8 },
                { name: "Douglas", extroversion: 0.72 },
                { name: "Ester", extroversion: 0.65 },
                { name: "Felix", extroversion: 0.54 },
                { name: "Garfield", extroversion: 0.58 },
                { name: "Hector", extroversion: 0.43 },
                { name: "Inigo", extroversion: 0.49 },
                { name: "Jowls", extroversion: 0.51 },
                { name: "Kelly", extroversion: 0.62 },
                { name: "Laura", extroversion: 0.64 },
                { name: "Marissa", extroversion: 0.67 },
                { name: "Nan", extroversion: 0.71 },
                { name: "Oppenheimer", extroversion: 0.74 },
                { name: "Percy", extroversion: 0.78 },
                { name: "Quincy", extroversion: 0.81 },
                { name: "Ralph", extroversion: 0.79 },
                { name: "Sal", extroversion: 0.73 },
                { name: "Theo", extroversion: 0.41 },
                { name: "Umberto", extroversion: 0.32 },
                { name: "Velma", extroversion: 0.39 },
                { name: "Wilma", extroversion: 0.38 },
                { name: "Xavier", extroversion: 0.43 },
                { name: "Yana", extroversion: 0.47 },
                { name: "Zelda", extroversion: 0.5 }
            ],
            affinities: {
                "Alex__Barney": 0.6,
                "Alex__Charlie": 0.8,
                "Barney__Alex": -0.1,
                "Barney__Charlie": 0.2,
                "Charlie__Alex": 0.4,
                "Charlie__Barney": 0.6
            }
        }
    ];

    return definitions;
});
