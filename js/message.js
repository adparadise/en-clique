
define(['backbone'], function (Backbone) {
    var Message = Backbone.Model.extend({
        options: {
            source: 'andrew',
            destination: 'bob',

            targetType: 'individual'
            target: 'andrew',
            value: -1 // andrew sux

        },
        initialize: function(options) {
            // this.author
            this.options = _.extend(this.options, options);
        },
        

    });

    return Message;
});
