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
            var person = Walrus.Parser.parse( $("#person").html() );
            var personInfo = Walrus.Parser.parse( $("#personInfo").html() );

            var stage = Facade($("#gameBoard-background").get(0), 1400, 750);
            // var student_image = Facade.Image("images/p2_front.png", {anchor: "center"});

            window.stage = stage;
            window.Facade = Facade;
            window.director = director;
            var students = [];
            director.classroom.each(function(student) {
                students.push(student);
            });
            var studentList = person.compile({students: students});

            $("#gameBoard").append(studentList);

            $(".person").on("click", function(event) {
                var selectedPersonEl = this;
                $(selectedPersonEl).addClass("selected");
                $("#gameBoard").on("click", function(event) {
                    $(selectedPersonEl).removeClass("selected");
                    stage.clear();
                });
                var edges = [];
                // edges.push({origin: "oppenheimer", destination: "barney"});
                // edges.push({origin: "oppenheimer",  destination: "umberto"});
                // edges.push({origin: "umberto",  destination: "oppenheimer"});

                // console.log(director.graph.getOrCreateNode($(this).data("id")));
                director.graph.eachEdgeFrom($(this).data("id"), function(edge, toName) {
                    if(edge.toName) {
                        console.log(edge, toName);
                        edges.push({origin: edge.fromName, destination: edge.toName});

                        stage.draw(function() {
                            var that = this;
                            this.clear();

                            // this.addToStage(student_image, {x: 20, y: 20});
                            _.each(edges, function(edge) {
                                var prefix = ".student-",
                                    $origin = $(prefix + edge.origin),
                                    $destination = $(prefix + edge.destination),
                                    position = {
                                        lineWidth: 4,
                                        strokeStyle: "#FFFFFF",
                                        shadowBlur: 6,
                                        shadowColor: "#FFFFFF",
                                        x: $origin.offset().left + $origin.outerWidth()/2,
                                        y: $origin.offset().top + $origin.outerHeight()/2,
                                        endX: $destination.offset().left + $destination.outerWidth()/2,
                                        endY: $destination.offset().top + $destination.outerHeight()/2,
                                    };

                                position.endX -= position.x;
                                position.endY -= position.y;

                                that.addToStage(Facade.Line(position));
                            });

                            // this.stop();
                        });

                    }
                });
                // personInfo.compile({})
            });


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
