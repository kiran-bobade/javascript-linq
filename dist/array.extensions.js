"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("./utility");
var _contains = function (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value)
            return true;
    }
    return false;
};
Object.defineProperty(Array.prototype, "contains", {
    value: function (value) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == value)
                return true;
        }
        return false;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "first", {
    value: function () {
        if (utility_1.Utility.isNullOrUndefined(this) || this.length === 0) {
            throw "Array contains no elements";
        }
        else {
            return this[0];
        }
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "firstOrDefault", {
    value: function () {
        if (utility_1.Utility.isNullOrUndefined(this) || this.length == 0) {
            return null;
        }
        else {
            return this[0];
        }
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "last", {
    value: function () {
        if (utility_1.Utility.isNullOrUndefined(this) || this.length == 0) {
            return null;
        }
        else {
            return this[this.length - 1];
        }
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "all", {
    value: function (predicate) {
        if (utility_1.Utility.isNullOrUndefined(predicate) || !utility_1.Utility.isFunction(predicate)) {
            throw "Invalid predicate";
        }
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (predicate(this[i]))
                arr.push(this[i]);
        }
        return arr.length == this.length;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "any", {
    value: function (predicate) {
        if (utility_1.Utility.isNullOrUndefined(predicate) || !utility_1.Utility.isFunction(predicate)) {
            throw "Invalid predicate";
        }
        for (var i = 0; i < this.length; i++) {
            if (predicate(this[i]))
                return true;
        }
        return false;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "where", {
    value: function (predicate) {
        if (utility_1.Utility.isNullOrUndefined(predicate) || !utility_1.Utility.isFunction(predicate)) {
            throw "Invalid predicate";
        }
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (predicate(this[i]))
                arr.push(this[i]);
        }
        return arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "select", {
    value: function (Selector) {
        if (utility_1.Utility.isNullOrUndefined(Selector) || !utility_1.Utility.isFunction(Selector)) {
            throw "Invalid Selector";
        }
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            arr.push(Selector(this[i]));
        }
        return arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "sum", {
    value: function () {
        if (this.length > 0 && this.isNumeric()) {
            var sum = 0;
            for (var i = 0; i < this.length; i++) {
                sum += this[i].toInt();
            }
            return sum;
        }
        return 0;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "max", {
    value: function () {
        if (this.length > 0 && this.isNumeric()) {
            return Math.max.apply(Math, this);
        }
        return 0;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "min", {
    value: function () {
        if (this.length > 0 && this.isNumeric()) {
            return Math.min.apply(Math, this);
        }
        return 0;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "take", {
    value: function (Length) {
        var _arr = [];
        if (!utility_1.Utility.isNullOrUndefined(Length)) {
            for (var i = 0; i < Length; i++) {
                _arr.push(this[i]);
            }
        }
        return _arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "takeWhile", {
    value: function (Selector) {
        if (utility_1.Utility.isNullOrUndefined(Selector) || !utility_1.Utility.isFunction(Selector)) {
            throw "Invalid Selector";
        }
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (Selector(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "skip", {
    value: function (Length) {
        var arr = [];
        if (!utility_1.Utility.isNullOrUndefined(Length)) {
            for (var i = Length; i < this.length; i++) {
                arr.push(this[i]);
            }
            return arr;
        }
        return this;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "zip", {
    value: function (Array2, Selector) {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            for (var x = i; x < Array2.length; x++) {
                arr.push(Selector(this[i], Array2[x]));
                break;
            }
        }
        return arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "single", {
    value: function (Selector) {
        var arr = [];
        for (var i = 0; i < this.length; i++) {
            if (Selector(this[i]))
                arr.push(this[i]);
        }
        if (arr.length > 1) {
            throw "Array returns multiple records";
        }
        return arr.length > 0 ? arr[0] : arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "unique", {
    value: function () {
        var arr = [];
        for (var x = 0; x < this.length; x++) {
            if (!_contains(arr, this[x])) {
                arr.push(this[x]);
            }
        }
        return arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "removeWhere", {
    value: function (predicate) {
        for (var i = 0; i < this.length; i++) {
            if (predicate(this[i]))
                this.splice(i, 1);
        }
        return this;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "removeAll", {
    value: function () {
        while (this.length > 0) {
            this.pop();
        }
        return this;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "unionAll", {
    value: function (Array2) {
        if (arguments.length == 0) {
            throw "Second parameter should be an Array";
        }
        var arr = this.clone();
        for (var x = 0; x < Array2.length; x++) {
            arr.push(Array2[x]);
        }
        return arr;
    },
    enumerable: false,
});
Object.defineProperty(Array.prototype, "union", {
    value: function (Array2) {
        if (arguments.length == 0) {
            throw "Second parameter should be an Array";
        }
        return this.unionAll(Array2).unique();
    },
    enumerable: false,
});
