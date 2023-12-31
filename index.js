export var log = Object.assign(function (content, args) {
    console.log(content, args);
}, {
    error: function (content, args) {
        var template = "\x1b[31m...\x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    criticalError: function (content, args) {
        var template = "\x1b[1m \x1b[31m ...\x1b[0m \x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    success: function (content, args) {
        var template = "\x1b[34m...\x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    importantSuccess: function (content, args) {
        var template = "\x1b[1m \x1b[34m...\x1b[0m \x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    info: function (content, args) {
        var template = "\x1b[200m...\x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
});
