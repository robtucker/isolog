import { HandlerInterface, HandlerConfig, LogLevels } from "../interfaces";

import { defaultLevels } from "../config/defaults";

export abstract class BaseHandler implements HandlerInterface {

    private _levels: LogLevels;

    private _logLevel: number;

    constructor(config?: HandlerConfig) {
        this._logLevel = config && config.LOG_LEVEL ? config.LOG_LEVEL : 100;
        
        this._levels = config && config.LEVELS ? config.LEVELS : defaultLevels;
    }

    private _isLoggble (level: string): boolean {
        return this._levels[level] >= this._logLevel;
    }

    public log(data: any, level: string) {
        if(this._isLoggble(level)) {
            this.handle(data);
        }
    }

    abstract handle (data: any): void;

}
