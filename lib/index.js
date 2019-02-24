"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(store, selector, cb) {
  var data = selector(store.getState());
  return store.subscribe(function () {
    var newData = selector(store.getState());

    if (data !== newData) {
      data = newData;
      cb(data);
    }
  });
};

exports.default = _default;