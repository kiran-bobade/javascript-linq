"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utility {
    static isNullOrUndefined(value) {
        return value === null || value === undefined;
    }
    static isFunction(fn) {
        return fn instanceof Function || typeof fn === "function";
    }
}
exports.Utility = Utility;
