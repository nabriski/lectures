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
var EventEmitter2 = require("events");
var MyEmitter2 = /** @class */ (function (_super) {
    __extends(MyEmitter2, _super);
    function MyEmitter2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyEmitter2;
}(EventEmitter2));
var myEmitter2 = new MyEmitter2();
myEmitter2.on("event", function () {
    console.log("registered first!");
});
myEmitter2.on("event", function () {
    console.log("registered second!");
});
myEmitter2.emit("event");
