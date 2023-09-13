export interface Logger {
  (content: string, args?: Object): void;
  error: (content: string, args?: Object) => void;
  criticalError: (content: any, args?: Object) => void;
  success: (content: any, args?: Object) => void;
  importantSuccess: (content: any, args?: Object) => void;
  info: (content: any, args?: Object) => void;
}

export const log: Logger = Object.assign(
  function (content: string, args?: Object) {
    console.log(content, args);
  },
  {
    error(content: string, args?: Object) {
      const template = "\x1b[31m...\x1b[0m";
      console.log(template.replace("...", content), args || "");
    },
    criticalError(content: string, args?: Object) {
      const template = "\x1b[1m \x1b[31m ...\x1b[0m \x1b[0m";
      console.log(template.replace("...", content), args || "");
    },
    success(content: string, args?: Object) {
      const template = "\x1b[34m...\x1b[0m";
      console.log(template.replace("...", content), args || "");
    },
    importantSuccess(content: string, args?: Object) {
      const template = "\x1b[1m \x1b[34m...\x1b[0m \x1b[0m";
      console.log(template.replace("...", content), args || "");
    },
    info(content: string, args?: Object) {
      const template = "\x1b[200m...\x1b[0m";
      console.log(template.replace("...", content), args || "");
    },
  }
);
