var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EventEmitter = require("events");
var MyEmitter = /** @class */ (function (_super) {
    __extends(MyEmitter, _super);
    function MyEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyEmitter;
}(EventEmitter));
var myEmitter = new MyEmitter();
myEmitter.on("event", function (p1, p2) {
    console.log("an event occurred! p1:" + p1 + ", p2:" + p2);
});
myEmitter.emit("event", "param1", "param2");
process.nextTick(function () { });
