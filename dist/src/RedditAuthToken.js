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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedditAuthToken = void 0;
var commons_1 = require("@aelesia/commons");
var httyp_1 = __importStar(require("httyp"));
var RedditAuthToken = (function (_super) {
    __extends(RedditAuthToken, _super);
    function RedditAuthToken(config) {
        var _this = _super.call(this, {}) || this;
        _this.tkn = undefined;
        _this.cfg = config;
        return _this;
    }
    RedditAuthToken.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.refresh_token()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    RedditAuthToken.prototype.refresh_token = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, httyp_1.default.url('https://www.reddit.com/api/v1/access_token')
                                .auth_basic(this.cfg.client_id, this.cfg.client_secret)
                                .body_forms({
                                grant_type: 'authorization_code',
                                code: this.cfg.code,
                                redirect_uri: this.cfg.redirect_uri
                            })
                                .post()];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data.access_token || !data.token_type || !data.expires_in) {
                            throw Error("Invalid token - " + JSON.stringify(data));
                        }
                        this.tkn = __assign(__assign({}, data), { expires_on: commons_1.Date_.add(data.expires_in * 1000) });
                        console.log('this.tkn', this.tkn);
                        return [3, 3];
                    case 2:
                        e_1 = _a.sent();
                        commons_1.Throw(new Error('Unable to obtain O2A token'), e_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        });
    };
    RedditAuthToken.prototype.async_access_token = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.tkn) return [3, 2];
                        console.log('No token');
                        return [4, this.refresh_token()];
                    case 1:
                        _a.sent();
                        return [3, 5];
                    case 2:
                        if (!commons_1.Date_.isPast(this.tkn.expires_on)) return [3, 4];
                        console.log('Token expired');
                        return [4, this.refresh_token()];
                    case 3:
                        _a.sent();
                        return [3, 5];
                    case 4:
                        if (commons_1.Time.until(this.tkn.expires_on) < commons_1.Time.mins(1)) {
                            console.log('Token expiring soon');
                            this.refresh_token()
                                .then(function () { })
                                .catch(function () { });
                        }
                        _a.label = 5;
                    case 5: return [2, this.tkn.access_token];
                }
            });
        });
    };
    return RedditAuthToken;
}(httyp_1.OAuth2Token));
exports.RedditAuthToken = RedditAuthToken;
//# sourceMappingURL=RedditAuthToken.js.map