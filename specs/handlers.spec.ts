import { random } from 'faker'
import { defaultLevels, LogLevel, Level} from "../src"
import { MockHandler } from './mock-handler'

const testLevels = (testLevel: LogLevel) => {
    // console.log(`Testing LOG_LEVEL of ${testLevel}`)
    const handler = new MockHandler({ LOG_LEVEL: testLevel })

    Object.keys(defaultLevels).forEach((level: Level) => {
        const mock = jest.fn()
        handler.log(level, [mock])
        // console.log(`${level} has call count of ${s.callCount}`)
        if (defaultLevels[level] >= testLevel) {
            expect(mock.mock.calls.length).toEqual(1)
        } else {
            expect(mock.mock.calls.length).toEqual(0)
        }
    })
}

describe('Handlers', () => {

        it('should have a configurable log level', () => {
            // Object.keys(defaultLevels).forEach((key) => {
            //     testLevels(defaultLevels[key])
            // })


        })

})
