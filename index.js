export const log = Object.assign(function (content, args) {
    console.log(content, args);
}, {
    error(content, args) {
        const template = "\x1b[31m...\x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    criticalError(content, args) {
        const template = "\x1b[1m \x1b[31m ...\x1b[0m \x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    success(content, args) {
        const template = "\x1b[34m...\x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    importantSuccess(content, args) {
        const template = "\x1b[1m \x1b[34m...\x1b[0m \x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
    info(content, args) {
        const template = "\x1b[200m...\x1b[0m";
        console.log(template.replace("...", content), args || "");
    },
});
