"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (store, selector, cb) {
  var data = selector(store.getState());

  return store.subscribe(function () {
    var newData = selector(store.getState());
    if (data !== newData) {
      data = newData;
      cb(data);
    }
  });
};