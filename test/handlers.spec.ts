import * as colors from "colors";

import { expect } from "chai";

import { Logger, BaseHandler, defaultLevels } from "../src";

import { spy } from "sinon";

// the test handler will simply call the spy to prove it was executed
class TestHandler extends BaseHandler {
    handle(spy: any) {
        return spy();
    }
}

var randomStr = () => {
    return Math.random().toString(36).substring(7);
}


describe('Handlers', function() {

    describe("TestHandler", function() {

        var testLevels = (testLevel: number) => {
            console.log(`Testing LOG_LEVEL of ${testLevel}`.cyan);

            var handler = new TestHandler({LOG_LEVEL: testLevel});

            Object.keys(defaultLevels).forEach((level=>{

                var s = spy();
                handler.log(s, level);

                console.log(`${level} has call count of ${s.callCount}`.yellow)

                if(defaultLevels[level] >= testLevel) {
                    
                    expect(s.callCount).to.equal(1);
                } else {
                    expect(s.callCount).to.equal(0);
                }
            }))
        }
        
        it('should have a configurable log level', function() {

            Object.keys(defaultLevels).forEach((key) => {
                testLevels(defaultLevels[key]);
            })
        });



    })

});
