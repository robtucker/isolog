import { HandlerInterface, Level } from "./interfaces"
import { ConsoleHandler } from './handlers'

export class Isolog {

    private handlers: HandlerInterface[] = []

    constructor(...handlers: HandlerInterface[]) {
        if(handlers) {
            this.handlers = handlers
        }
    }

    public addHandler(handler: HandlerInterface) {
        this.handlers.push(handler)
    }

    public debug(...data: any[]) {
        this.log('debug', data)
    }

    public info(...data: any[]) {
        this.log('info', data)
    }

    public warn(...data: any[]) {
        this.log('warn', data)
    }

    public error(...data: any[]) {
        this.log('error', data)
    }

    public critical(...data: any[]) {
        this.log('critical', data)
    }

    private log(level: Level = 'debug', data: any[]) {
        this.handlers.forEach((handler) => {
            handler.log(level, data)
        })
    }
}

// export the logger
export const logger = new Isolog(new ConsoleHandler())


// export logger's public methods as free functions
export const debug = logger.debug
export const info = logger.info
export const warn = logger.warn
export const error = logger.error
export const critical = logger.critical
export const addHandler = logger.addHandler
