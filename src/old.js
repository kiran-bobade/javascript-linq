/*---------------- jQuery Methods --------------------*/

(function ($) {
  /*-------------- Utility Methods ---------------*/
  $.IsNull = function (data) {
    return data === null || data === undefined;
  };

  $.IsNullOrEmpty = function (data) {
    return $.IsNull(data) || data == "";
  };

  $.IsNullOrWhiteSpace = function (data) {
    return $.IsNull(data) || (data.isTypeOf("string") && data.trim() == "");
  };

  S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };

  $.GetGUID = function () {
    var guid = (
      S4() +
      S4() +
      "-" +
      S4() +
      "-4" +
      S4().substr(0, 3) +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    ).toLowerCase();
    return guid;
  };

  $.GetRandomNumber = function () {
    return Math.ceil(Math.random() * 10000000);
  };

  $.IsFunction = function (Func) {
    return Func instanceof Function || typeof Func === "function";
  };
})(jQuery);

/*--------------------------------------------------------------------------------------------------------- 
------------------------------------- Extension Methods ---------------------------------------------------
-----------------------------------------------------------------------------------------------------------*/

/*--------------- String Extensions ------------------*/
String.prototype.IsNullOrWhiteSpace = function () {
  return this == undefined || this == "" || this.trim() == "";
};

String.prototype.toLower = function () {
  return this.toLowerCase();
};

String.prototype.toUpper = function () {
  return this.toUpperCase();
};

String.prototype.startsWith = function (SearchString) {
  return this.indexOf(SearchString, 0) === 0;
};

String.prototype.endsWith = function (SearchString) {
  return this.indexOf(SearchString, this.length - SearchString.length) !== -1;
};

String.prototype.contains = function (SearchString, IgnoreCase) {
  var ignoreCase = IgnoreCase == undefined ? false : IgnoreCase;
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
  var Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return Pattern.test(this);
};

String.prototype.trimExcess = function (Length) {
  if (Length > 0 && this.length > 0 && this.length > Length) {
    return this.substr(0, Length);
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

String.prototype.IsLower = function () {
  return this.isAlpha() && this.toLower() === this;
};

String.prototype.IsUpper = function () {
  return this.isAlpha() && this.toUpper() == this;
};

String.prototype.ToBoolean = function () {
  if (this instanceof String) {
    var str = this.ToLower();
    return str === "true" || str === "yes" || str === "on";
  } else return this === true || this === 1;
};

String.prototype.ToFloat = function (precision) {
  var num = parseFloat(this);
  if (precision) return parseFloat(num.toFixed(precision));
  else return num;
};

String.prototype.toInt = function () {
  return /^\s*-?0x/i.test(this) ? parseInt(this, 16) : parseInt(this, 10);
};

String.prototype.From = function (Length) {
  if (Length.toString().isNumeric()) {
    return this.slice(Length);
  } else {
    return this;
  }
};

String.prototype.To = function (Length) {
  if (Length.toString().isNumeric()) {
    return this.slice(0, Length);
  } else {
    return this;
  }
};

String.prototype.First = function (Length) {
  if (Length.toString().isNumeric()) {
    return this.slice(0, Length);
  } else {
    return this;
  }
};

String.prototype.CountOf = function (StringToCount) {
  var Arr = this.split(StringToCount);
  return Arr.length - 1;
};

String.prototype.ToArray = function (delimiter) {
  if (!$.IsNull(delimiter)) {
    return this.split(delimiter);
  }
  return this.split("");
};

String.prototype.In = function (Values) {
  var args = [];
  args.push(Values);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  }
  return args.contains(this);
};

String.prototype.GetName = function () {
  if (!$.IsNullOrWhiteSpace(this)) {
    if (this.IsUpper()) return this;

    var arr = this.split(/(?=[A-Z])/);
    return arr.join(" ");
  }
  return this;
};

String.prototype.Capitalize = function () {
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

String.prototype.CreateName = function () {
  if (!$.IsNullOrWhiteSpace(this)) {
    var str = this.Capitalize();
    return str.replace(" ", "");
  }
  return this;
};

//Object.defineProperty(String.prototype, "Format", {
//    value: function () {
//        var _string = this;
//        if (arguments.length > 0) {
//            for (var i = 0; i < arguments.length; i++) {
//                _string = _string.replace("{" + i + "}", arguments[i]);
//            }
//        }
//        return _string;
//    },
//    enumerable: false,
//});

/*------------------ Array Extentions ----------------------------*/
Object.defineProperty(Array.prototype, "add", {
  value: function (value) {
    this.push(value);
    return this;
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "addRenge", {
  value: function (values) {
    if ($.IsNull(values) || !values.isTypeOf("array")) {
      throw "Invalid argument, value should be an array";
    }
    for (var i = 0; i < values.length; i++) {
      this.push(values[i]);
    }
    return this;
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "contains", {
  value: function (value) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == value) return true;
    }
    return false;
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "first", {
  value: function () {
    if ($.IsNull(this) || this.length == 0) {
      throw "Array contains no elements";
    } else {
      return this[0];
    }
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "firstOrDefault", {
  value: function () {
    if ($.IsNull(this) || this.length == 0) {
      return null;
    } else {
      return this[0];
    }
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "last", {
  value: function () {
    if ($.IsNull(this) || this.length == 0) {
      return null;
    } else {
      return this[this.length - 1];
    }
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "all", {
  value: function (Predicate) {
    if ($.IsNull(Predicate) || !$.IsFunction(Predicate)) {
      throw "Invalid predicate";
    }

    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (Predicate(this[i])) arr.push(this[i]);
    }

    return arr.length == this.length;
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "any", {
  value: function (Predicate) {
    if ($.IsNull(Predicate) || !$.IsFunction(Predicate)) {
      throw "Invalid predicate";
    }
    for (var i = 0; i < this.length; i++) {
      if (Predicate(this[i])) return true;
    }
    return false;
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "where", {
  value: function (Predicate) {
    if ($.IsNull(Predicate) || !$.IsFunction(Predicate)) {
      throw "Invalid predicate";
    }
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (Predicate(this[i])) arr.push(this[i]);
    }
    return arr;
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "select", {
  value: function (Selector) {
    if ($.IsNull(Selector) || !$.IsFunction(Selector)) {
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
    if (!$.IsNull(Length)) {
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
    if ($.IsNull(Selector) || !$.IsFunction(Selector)) {
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
    if (!$.IsNull(Length)) {
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
Object.defineProperty(Array.prototype, "clone", {
  value: function (Deep) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      arr.push(this[i]);
    }
    return arr;
  },
  enumerable: false,
});
Object.defineProperty(Array.prototype, "single", {
  value: function (Selector) {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (Selector(this[i])) arr.push(this[i]);
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
      if (!arr.contains(this[x])) {
        arr.push(this[x]);
      }
    }
    return arr;
  },
  enumerable: false,
});

Object.defineProperty(Array.prototype, "removeWhere", {
  value: function (Predicate) {
    for (var i = 0; i < this.length; i++) {
      if (Predicate(this[i])) this.splice(i, 1);
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

/*-------------------- Object Extensions -----------------------------*/

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

Object.defineProperty(Object.prototype, "toInt", {
  value: function () {
    return /^\s*-?0x/i.test(this) ? parseInt(this, 16) : parseInt(this, 10);
  },
  enumerable: false,
  configurable: false,
});

/* ------------------------ String Builder ------------------------------*/
var StringBuilder = function (string) {
  this.Data = [];
  this._length = 0;
  if (!$.IsNullOrEmpty(string)) {
    this.Data.addRenge(string.ToArray());
  }
};

StringBuilder.prototype.Append = function (string) {
  this.Data.addRenge(string.ToArray());
};

StringBuilder.prototype.AppendFormat = function (string, values) {
  var _string = string;
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      _string = _string.replace("{" + (i - 1) + "}", arguments[i]);
    }
  }
  this.Data.addRenge(_string.ToArray());
};

//Index was out of range. Must be non-negative and less than the size of the collection.
StringBuilder.prototype.Remove = function (StartIndex, Length) {
  return this.Data.removeAll();
};

StringBuilder.prototype.Clear = function () {
  return this.Data.removeAll();
};

StringBuilder.prototype.toString = function () {
  return this.Data.join("");
};

StringBuilder.prototype.ToString = function () {
  return this.Data.join("");
};

//Properties
Object.defineProperty(StringBuilder.prototype, "Length", {
  get: function () {
    return this.ToString().length;
  },
  set: function (length) {
    if (length == 0) {
      this.Data = this.Data.take();
    } else {
      this.Data = this.Data.take(length);
    }
  },
});
