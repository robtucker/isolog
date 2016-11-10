"use strict";
var Isolog = (function () {
    function Isolog(handlers) {
        var _this = this;
        this._handlers = [];
        if (handlers) {
            handlers.forEach(function (handler) {
                _this.addHandler(handler);
            });
        }
    }
    Isolog.prototype.addHandler = function (handler) {
        this._handlers.push(handler);
    };
    Isolog.prototype.log = function (data, level) {
        if (level === void 0) { level = 'debug'; }
        this._handlers.forEach(function (handler) {
            handler.log(data, level);
        });
    };
    Isolog.prototype.debug = function (data) {
        this.log(data, 'debug');
    };
    Isolog.prototype.info = function (data) {
        this.log(data, 'info');
    };
    Isolog.prototype.warn = function (data) {
        this.log(data, 'warn');
    };
    Isolog.prototype.error = function (data) {
        this.log(data, 'error');
    };
    return Isolog;
}());
exports.Isolog = Isolog;
exports.Logger = new Isolog();
