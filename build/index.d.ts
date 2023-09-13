export interface Logger {
    (content: string, args?: Object): void;
    error: (content: string, args?: Object) => void;
    criticalError: (content: any, args?: Object) => void;
    success: (content: any, args?: Object) => void;
    importantSuccess: (content: any, args?: Object) => void;
    info: (content: any, args?: Object) => void;
}
export declare const log: Logger;
