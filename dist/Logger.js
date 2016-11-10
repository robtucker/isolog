"use strict";
var Logger = (function () {
    function Logger(handlers) {
        this._handlers = handlers;
    }
    Logger.prototype.addHandler = function (handler) {
        this._handlers.push(handler);
    };
    Logger.prototype.log = function (data, level) {
        if (level === void 0) { level = 'debug'; }
        this._handlers.forEach(function (handler) {
            handler.log(data, level);
        });
    };
    Logger.prototype.debug = function (data) {
        this.log(data, 'debug');
    };
    Logger.prototype.info = function (data) {
        this.log(data, 'info');
    };
    Logger.prototype.warn = function (data) {
        this.log(data, 'warn');
    };
    Logger.prototype.error = function (data) {
        this.log(data, 'error');
    };
    return Logger;
}());
exports.Logger = Logger;
