"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var verify_1 = __importDefault(require("./utils/verify"));
exports.verify = verify_1.default;
var test_1 = __importDefault(require("./utils/test"));
exports.test = test_1.default;
var random_1 = __importDefault(require("./utils/random"));
exports.random = random_1.default;
var objectHelper_1 = __importDefault(require("./utils/objectHelper"));
exports.objectHelper = objectHelper_1.default;
var image_1 = __importDefault(require("./utils/image"));
exports.image = image_1.default;
/**
 * JS获取url参数
 * @param name 查询location的参数名
 * @returns 参数值都是字符串.
 */
function getQueryParam(name) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] === name) {
            return pair[1];
        }
    }
    return '';
}
exports.getQueryParam = getQueryParam;
/**
 * 计算倒计时剩余时间⏰
 * @param startTimestamp 开始时间戳
 * @param endTimestamp 结束时间戳
 * @returns Returns the new debounced function.
 */
function timeDifference(startTimestamp, endTimestamp) {
    var distanceTimestamp = endTimestamp - startTimestamp;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distanceTimestamp / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distanceTimestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distanceTimestamp % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distanceTimestamp % (1000 * 60)) / 1000);
    //console.log(days, startTimestamp, endTimestamp);
    return distanceTimestamp < 0 ? { days: 0, hours: 0, minutes: 0, seconds: 0 } : { days: days, hours: hours, minutes: minutes, seconds: seconds };
}
exports.timeDifference = timeDifference;
/**
 * debounce function
 * @param func 需要防抖的函数
 * @param delay 延迟的毫秒数
 * @param immediate 第一次是否执行开关
 * @returns Returns the new debounced function.
 */
function debounce(func, delay, immediate) {
    var timeoutId;
    var isFirst = true;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        console.log(isFirst);
        if (immediate && isFirst) {
            func.apply(this, args);
            isFirst = false;
        }
        else {
            timeoutId = setTimeout(function () {
                func.apply(_this, args);
                timeoutId = void 0;
            }, delay);
        }
    };
}
exports.debounce = debounce;
/**
 * throttle function
 * @param func 需要节流的函数
 * @param delay 延迟的毫秒数
 * @returns Returns the new throttle function.
 */
function throttle(func, delay) {
    var timeoutId;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!timeoutId) {
            timeoutId = setTimeout(function () {
                func.apply(_this, args);
                timeoutId = void 0;
            }, delay);
        }
    };
}
exports.throttle = throttle;
