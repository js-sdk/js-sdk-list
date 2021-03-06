(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.chunk = chunk;
  function chunk(ls, n) {
    var l = ls;
    var res = [];
    while (l.length > 0) {
      res.push(l.splice(0, n));
    }return res;
  }
});
