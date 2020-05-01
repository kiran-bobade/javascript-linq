interface String {
    isNullOrWhiteSpace(): boolean;
    toLower(): string;
    toUpper(): string;
    capitalize(): string;
    startsWith(searchString: string): boolean;
    endsWith(searchString: string): boolean;
    contains(searchString: string, ignoreCase: boolean);
    isEmail(): boolean;
    isGUId(): boolean;
    trimExcess(length: number): string;
    stripTags(): string;
    stripNumeric(): string;
    stripNonNumeric(): string;
    isAlphaNumeric(): boolean;
    isAlpha(): boolean;
    isLowerCase(): boolean;
    isUpperCase(): boolean;
    toBoolean(): boolean;
    toFloat(precision: number): number;
    toInt(): number;
    takeFrom(startIndex: number): string;
    takeTo(endIndex: number): string;
    countOf(searchString: string): number;
    in(params: any): boolean;
}


String.prototype.isNullOrWhiteSpace = function () {
    return this === undefined || this === '' || this.trim() === '';
};

String.prototype.toLower = function () {
    return this.toLowerCase();
};

String.prototype.toUpper = function () {
    return this.toUpperCase();
};

String.prototype.startsWith = function (searchString: string) {
    return this.indexOf(searchString, 0) === 0;
};

String.prototype.endsWith = function (searchString: string) {
    return this.indexOf(searchString, this.length - searchString.length) !== -1;
};

String.prototype.contains = function (SearchString, IgnoreCase) {
    var ignoreCase = IgnoreCase === undefined ? false : IgnoreCase;
    if (ignoreCase) {
        return this.search(new RegExp(SearchString, "i")) !== -1;
    } else {
        return this.search(SearchString) !== -1;
    }
};

String.prototype.isEmail = function () {
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(this);
};

String.prototype.isGUId = function () {
    var pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return pattern.test(this);
};

String.prototype.trimExcess = function (length: number) {
    if (length > 0 && this.length > 0 && this.length > length) {
        return this.substr(0, length);
    }
    return this;
};

String.prototype.stripTags = function () {
    return this.replace(/<[^>]*>/g, "").trim();
};

String.prototype.stripNumeric = function () {
    return this.replace(/[0-9|.]/g, "").trim();
};

String.prototype.stripNonNumeric = function () {
    return this.replace(/[a-zA-Z]/g, "").trim();
};

String.prototype.isAlphaNumeric = function () {
    return !/[^0-9a-z\xC0-\xFF]/.test(this.toLower());
};

String.prototype.isAlpha = function () {
    return !/[^a-z\xC0-\xFF]/.test(this.toLower());
};

String.prototype.isLowerCase = function () {
    return this.isAlpha() && this.toLower() === this;
};

String.prototype.isUpperCase = function () {
    return this.isAlpha() && this.toUpper() == this;
};

String.prototype.toBoolean = function () {
    if (this instanceof String) {
        var str = this.ToLower();
        return str === "true" || str === "yes" || str === "on";
    } else return this === true || this === 1;
};

String.prototype.toFloat = function (precision: number) {
    var num = parseFloat(this);
    if (precision) return parseFloat(num.toFixed(precision));
    else return num;
};

String.prototype.toInt = function () {
    return /^\s*-?0x/i.test(this) ? parseInt(this, 16) : parseInt(this, 10);
};

// String.prototype.takeFrom = function (length) {
//     if (length.toString().isNumeric()) {
//         return this.slice(length);
//     } else {
//         return this;
//     }
// };

// String.prototype.takeTo = function (length) {
//     if (length.toString().isNumeric()) {
//         return this.slice(0, length);
//     } else {
//         return this;
//     }
// };

String.prototype.countOf = function (searchString: string) {
    var Arr = this.split(searchString);
    return Arr.length - 1;
};

// String.prototype.in = function (params) {
//     var args = [];
//     args.push(params);
//     if (arguments.length > 1) {
//         for (var i = 1; i < arguments.length; i++) {
//             args.push(arguments[i]);
//         }
//     }
//     return args.contains(this);
// };

String.prototype.capitalize = function () {
    var newVal = "";
    var val = this.split(" ");
    for (var x = 0; x < val.length; x++) {
        newVal +=
            val[x].substring(0, 1).toUpperCase() +
            val[x].substring(1, val[x].length) +
            " ";
    }
    return newVal.trim();
};
