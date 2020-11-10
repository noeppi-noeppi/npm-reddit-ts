"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedditAPIErr = void 0;
var General = (function (_super) {
    __extends(General, _super);
    function General(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'RedditAPIGeneralError';
        Object.setPrototypeOf(_this, General.prototype);
        return _this;
    }
    return General;
}(Error));
var PostLimit = (function (_super) {
    __extends(PostLimit, _super);
    function PostLimit(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'RedditAPIPostLimitError';
        Object.setPrototypeOf(_this, PostLimit.prototype);
        return _this;
    }
    return PostLimit;
}(General));
var ServerBusy = (function (_super) {
    __extends(ServerBusy, _super);
    function ServerBusy(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'RedditAPIServerBusyError';
        Object.setPrototypeOf(_this, ServerBusy.prototype);
        return _this;
    }
    return ServerBusy;
}(General));
var Failed = (function (_super) {
    __extends(Failed, _super);
    function Failed(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'RedditAPIFailedError';
        Object.setPrototypeOf(_this, Failed.prototype);
        return _this;
    }
    return Failed;
}(General));
var Null = (function (_super) {
    __extends(Null, _super);
    function Null(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'RedditAPINullError';
        Object.setPrototypeOf(_this, Null.prototype);
        return _this;
    }
    return Null;
}(General));
var Unauthorized = (function (_super) {
    __extends(Unauthorized, _super);
    function Unauthorized(msg) {
        var _this = _super.call(this, msg) || this;
        _this.name = 'RedditAPIUnauthorizedError';
        Object.setPrototypeOf(_this, Unauthorized.prototype);
        return _this;
    }
    return Unauthorized;
}(General));
exports.RedditAPIErr = {
    General: General,
    PostLimit: PostLimit,
    ServerBusy: ServerBusy,
    Failed: Failed,
    Null: Null,
    Unauthorized: Unauthorized
};
//# sourceMappingURL=RedditAPIErr.js.map