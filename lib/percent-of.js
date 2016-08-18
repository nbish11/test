'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _divide = require('./divide.js');

var _divide2 = _interopRequireDefault(_divide);

var _multiply = require('./multiply.js');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var percentOf = function percentOf(percent, amount) {
    var result = 0;

    result = (0, _divide2.default)(percent, 100);
    result = (0, _multiply2.default)(result, amount);

    return result;
};

exports.default = percentOf;