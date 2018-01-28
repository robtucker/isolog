import { HandlerInterface, HandlerConfig, LogLevels, LogLevel, Level } from "../interfaces"

import { defaultLevels } from "../config/defaults"

export abstract class BaseHandler implements HandlerInterface {

    private levels: LogLevels

    private logLevel: LogLevel

    constructor(config?: HandlerConfig) {
        this.logLevel = config && config.LOG_LEVEL ? config.LOG_LEVEL : 100
        this.levels = config && config.LEVELS ? config.LEVELS : defaultLevels
    }

    private isLoggble(level: Level): boolean {
        return this.levels[level] >= this.logLevel
    }

    public log(level: Level, data: any[]) {
        if(this.isLoggble(level)) {
            this.handle(data)
        }
    }

    abstract handle (data: any[]): void

}
