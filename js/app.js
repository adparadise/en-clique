define(['backbone', 'jquery', 'underscore', 'levels', 'level_definitions', 'walrus', 'sigma', 'sigma.parseJson', 'walrus.strings'], function(Backbone, $, _, levels, definitions, Walrus, sigma) {
    var app = {
        init: function() {
            var director;

            director = levels.buildLevelDirector(definitions[0]);
            director.classroom.each(function (student) {
                console.log(student.get('name'));
                console.log('  extroversion: ' + student.get('extroversion'));
                console.log('  leaderName: ' + student.get('leaderName'));
            });

            Walrus.Domain.student = {
                name: function() {
                    return this.get("name");
                },
                leaderName: function() {
                    return this.get("leaderName");
                },
                extroversion: function() {
                    return this.get("extroversion");
                },
                clique: function() {
                    return this.leaderName.charAt(0).toLower();
                },
                isLeader: function() {
                    return (this.leaderName() === this.name());
                }

            };
            var personInfo = Walrus.Parser.parse( $("#personInfo").html() );
            // var personResult = personInfo.compile({
            //     person: {name: "Janet", "id": "1"}
            // });
            var students = [];
            director.classroom.each(function(student) {
                students.push(student);
            });
            console.log(students);
            var personResult = personInfo.compile({students: students});

            $("#gameBoard").append(personResult);


            // var sigInst = sigma.init($("#gameBoard").get(0)).drawingProperties({
            //     defaultLabelColor: '#fff'
            // }).graphProperties({
            //     minNodeSize: 0.5,
            //     maxNodeSize: 5
            // });

            // var data = director.classroom;
            // var edgeId = 0;

            // console.log(data);
            // director.classroom.each(function (student) {
            //     var id = student.get("name");
            //     sigInst.addNode(id, student);
            //     console.log(student);
            // });

            // director.classroom.each(function (student) {
            //     var target = student.get("leaderName");
            //     var source = student.get("name");
            //     console.log(target);

            //     sigInst.addEdge(edgeId++, source, target, student);
            // });

            // sigInst.draw();
        }
    };
    return app;
});
