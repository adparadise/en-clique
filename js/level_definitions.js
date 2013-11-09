define([], function () {
    var definitions = [
        {
            students: [
                { name: "Alex", affinity: 0.4 },
                { name: "Bob", affinity: 0.6 },
                { name: "Charlie", affinity: 0.8 }
            ],
            affinities: {
                "Alex__Bob": 0.6,
                "Alex__Charlie": 0.8,
                "Bob__Alex": 0.1,
                "Bob__Charlie": 0.2,
                "Charlie__Alex": 0.4,
                "Charlie__Bob": 0.6
            }
        }
    ];

    return definitions;
});
