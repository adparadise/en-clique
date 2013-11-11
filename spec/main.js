
requirejs.config({
    baseUrl: "/js",
});

require(["../spec/graph_spec",
         "../spec/leader_finder_spec"], function () {
    var jasmineEnv, htmlReporter;
    var currentWindowOnload;

    jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    jasmineEnv.execute();
});
