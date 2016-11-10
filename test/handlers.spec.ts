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


describe('LogHandler', function() {

    describe("Handle method", function() {

        it('should have a configurable log level', function() {
            let testLevel = 300;
            var handler = new TestHandler({LOG_LEVEL: testLevel});

            Object.keys(defaultLevels).forEach((level=>{

                var s = spy();
                handler.log(s, level);

                console.log(`${level} has call count of ${s.callCount}`)

                if(defaultLevels[level] >= testLevel) {
                    
                    expect(s.callCount).to.equal(1);
                } else {
                    expect(s.callCount).to.equal(0);
                }
            }))

        });



    })

});
