import { BaseHandler } from "./BaseHandler";

export class ConsoleHandler extends BaseHandler {

    handle(data: any) {
        console.log(data);
    }
}