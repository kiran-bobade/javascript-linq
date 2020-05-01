Object.defineProperty(Object.prototype, "hasProperty", {
    value: function (Property) {
        return Object.prototype.hasOwnProperty.call(this, Property);
    },
    enumerable: false,
    configurable: false,
});
Object.defineProperty(Object.prototype, "getType", {
    value: function () {
        return Object.prototype.toString.call(this);
    },
    enumerable: false,
    configurable: false,
});
Object.defineProperty(Object.prototype, "isTypeOf", {
    value: function (type) {
        var _type = Object.prototype.toString.call(this);
        return _type.search(new RegExp(type, "gi")) > -1;
    },
    enumerable: false,
    configurable: false,
});
Object.defineProperty(Object.prototype, "isNumeric", {
    value: function () {
        if (this.isTypeOf("array")) {
            return this.All(function (x) {
                return x.isNumeric();
            });
        }
        return /^\d+$/.test(this) || (!isNaN(parseFloat(this)) && isFinite(this));
    },
    enumerable: false,
    configurable: false,
});
