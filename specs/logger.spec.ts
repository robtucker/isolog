import { defaultLevels } from "../src"
import { MockHandler } from './mock-handler'
import { logger, Isolog, ConsoleHandler, Level } from "../src"

describe('Isolog', () => {


    it('should have a method for each log level', () => {
        Object.keys(defaultLevels).forEach((key: Level) => {
            const handler = new MockHandler({ LOG_LEVEL: 100 })
            const l = new Isolog(handler)
            const mock = jest.fn()
            l[key](mock)
            expect(mock).toHaveBeenCalled()
        })
    })

    it('should allow multiple args to be logged', () => {
        const handler = new MockHandler({ LOG_LEVEL: 100 })
        const l = new Isolog(handler)
        const mock1 = jest.fn()
        const mock2 = jest.fn()
        l.debug(mock1, mock2)
        expect(mock1).toHaveBeenCalled()
        expect(mock2).toHaveBeenCalled()
    })


})


