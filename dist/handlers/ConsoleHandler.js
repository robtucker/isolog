"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseHandler_1 = require("./BaseHandler");
var ConsoleHandler = (function (_super) {
    __extends(ConsoleHandler, _super);
    function ConsoleHandler() {
        _super.apply(this, arguments);
    }
    ConsoleHandler.prototype.handle = function (data) {
        console.log(data);
    };
    return ConsoleHandler;
}(BaseHandler_1.BaseHandler));
exports.ConsoleHandler = ConsoleHandler;
