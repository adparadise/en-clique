

define([], function () {
    var util = {
        assert: function (truth, message) {
            if (!truth) {
                throw new Error(message);
            }
        }
    };

    return util;
});
