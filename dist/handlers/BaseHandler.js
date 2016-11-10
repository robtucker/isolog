"use strict";
var defaults_1 = require("../config/defaults");
var BaseHandler = (function () {
    function BaseHandler(config) {
        this._logLevel = config && config.LOG_LEVEL ? config.LOG_LEVEL : 100;
        this._levels = config && config.LEVELS ? config.LEVELS : defaults_1.defaultLevels;
    }
    BaseHandler.prototype._isLoggble = function (level) {
        return this._levels[level] >= this._logLevel;
    };
    BaseHandler.prototype.log = function (data, level) {
        if (this._isLoggble(level)) {
            this.handle(data);
        }
    };
    return BaseHandler;
}());
exports.BaseHandler = BaseHandler;
