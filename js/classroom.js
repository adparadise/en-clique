

define(['backbone', 'student'], function (Backbone, Student) {
    var Classroom = Backbone.Collection.extend({
        model: Student
    });

    return Classroom;
});
