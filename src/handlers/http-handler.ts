import { BaseHandler } from "./base-handler"
import { HandlerConfig } from '../interfaces'

export interface HttpHandlerConfig extends HandlerConfig {
    url: string
    method: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
    makeBody?: (data: any[]) => any
    request?: RequestInit
    callback?: (...args: any[]) => any
}

export class HttpHandler extends BaseHandler {

    private config: HttpHandlerConfig

    constructor(config?: HttpHandlerConfig) {
        super(config)
        this.config = config
    }

    handle(args: any[]) {

        const options: RequestInit = {
            ...this.config.request,
            body: this.makeBody(args)
        }

        fetch(this.config.url, options )
    }

    private makeBody = (args: any[]) =>
        ({ data: args })
}