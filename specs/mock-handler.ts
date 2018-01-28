import { BaseHandler } from "../src"

export class MockHandler extends BaseHandler {
    // mock handler will call the spy
    handle(data: any[]) {
        data.forEach(func => {
            try {
                func()
            } catch (e) {
                console.log('FAILED TO CALL SPY', func, e)
            }
        })
    }
}
