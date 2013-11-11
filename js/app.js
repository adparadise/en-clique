define(['backbone', 'jquery', 'underscore', 'levels', 'level_definitions', 'walrus', 'sigma', 'facade', 'sigma.parseJson', 'walrus.strings'], function(Backbone, $, _, levels, definitions, Walrus, sigma, Facade) {
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
                    result = this.leaderName();
                    return result.toLowerCase()[0];
                },
                isLeader: function() {
                    return (this.leaderName() === this.name());
                }

            };
            var personInfo = Walrus.Parser.parse( $("#personInfo").html() );

            var stage = Facade($("#gameBoard-background").get(0), 1400, 750);
            // var student_image = Facade.Image("images/p2_front.png", {anchor: "center"});
            var edges = [];
            director.classroom.each(function(student) {
                // edges 
            });
            stage.draw(function() {
                this.clear();
                
                // this.addToStage(student_image, {x: 20, y: 20});
                var position = {
                    lineWidth: 4,
                    strokeStyle: "#FFFFFF",
                    shadowBlur: 6,
                    shadowColor: "#FFFFFF",
                    x: $(".student-marissa").offset().left + $(".student-marissa").outerWidth()/2,
                    y: $(".student-marissa").offset().top + $(".student-marissa").outerHeight()/2,
                    endX: $(".student-wilma").offset().left + $(".student-wilma").outerWidth()/2,
                    endY: $(".student-wilma").offset().top + $(".student-wilma").outerHeight()/2,
                };

                position.endX -= position.x;
                position.endY -= position.y;

                // console.log(position);
                this.addToStage(Facade.Line(position));
                // this.stop();
            });
            window.stage = stage;
            window.Facade = Facade;
            window.director = director;
            var students = [];
            director.classroom.each(function(student) {
                students.push(student);
            });
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
