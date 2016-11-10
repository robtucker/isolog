import { HandlerInterface } from "./interfaces";
import { ConsoleHandler } from './handlers';

export class Isolog {

    private _handlers: HandlerInterface[] = [];

    constructor(handlers?: HandlerInterface[]) {
        if(handlers) {
            handlers.forEach((handler) => {
                this.addHandler(handler);
            });
        }
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

    critical(data: any) {
        this.log(data, 'critical');
    }
}

export const Logger = new Isolog();
