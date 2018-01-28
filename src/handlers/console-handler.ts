import { BaseHandler } from "./base-handler"

export class ConsoleHandler extends BaseHandler {

    handle(args: any[]) {
        console.log(...args)
    }
}