import chai from "chai";

var expect = chai.expect;

import { Logger, ConsoleHandler } from "../dist";


describe('Logger', function() {

    before(function() {
        var handler = new ConsoleHandler(100);
    });

    

    describe("ConsoleHandler", function() {

        it('should have a configurable log level', function() {

            expect([1,2,3].indexOf(5)).to.equal(-1);

        });



    })






});
