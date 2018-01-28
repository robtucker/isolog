import { defaultLevels } from "../src"
import { MockHandler } from './mock-handler'
import { Isolog, ConsoleHandler, Level } from "../src"

describe('Isolog', () => {


    it('should have a method for each log level', () => {
        Object.keys(defaultLevels).forEach((key: Level) => {
            const handler = new MockHandler({ LOG_LEVEL: 100 })
            const logger = new Isolog(handler)
            const mock = jest.fn()
            console.log('TESTING FUNCTION ', key, logger[key])
            logger[key](mock)
            console.log('MOCKED', mock.mock.calls)
            expect(mock).toHaveBeenCalled()
        })

        const foo = jest.fn();
        foo();
        expect(foo).toHaveBeenCalled();
    })


})


