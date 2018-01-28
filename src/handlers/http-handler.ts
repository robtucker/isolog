import { BaseHandler } from "./base-handler"
import { HandlerConfig } from '../interfaces'
import * as fetch from 'isomorphic-fetch'

export interface HttpHandlerConfig extends HandlerConfig {
    url: string
    method?: 'GET' | 'PUT' | 'POST' | 'PATCH' | 'DELETE'
    headers?: { [key: string]: string }
    callback?: any
}

export class HttpHandler extends BaseHandler {

    constructor(config?: HttpHandlerConfig) {
        super(config)
    }

    handle() {
        const options = {

        }

        fetch()
    }
}