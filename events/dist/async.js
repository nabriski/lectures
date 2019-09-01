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
var EventEmitter3 = require("events");
var MyEmitter3 = /** @class */ (function (_super) {
    __extends(MyEmitter3, _super);
    function MyEmitter3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyEmitter3;
}(EventEmitter3));
var myEmitter3 = new MyEmitter3();
myEmitter3.on("event", function () {
    setImmediate(function () {
        console.log("async");
    });
});
myEmitter3.on("event", function () {
    console.log("sync");
});
myEmitter3.emit("event");
