import { HandlerInterface } from "./interfaces";

export class Logger {

    private _handlers: HandlerInterface[];

    constructor(handlers: HandlerInterface[]) {
        
        this._handlers = handlers;
    }

    addHandler(handler: HandlerInterface) {
        this._handlers.push(handler);
    }

    log(data: any, level = 'debug') {
        this._handlers.forEach((handler) => {
            handler.log(data, level);
        })
    }

    debug(data: any) {
        this.log(data, 'debug');
    }

    info(data: any) {
        this.log(data, 'info');
    }

    warn(data: any) {
        this.log(data, 'warn');
    }

    error(data: any) {
        this.log(data, 'error');
    }
}
