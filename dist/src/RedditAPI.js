"use strict";
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
var httyp_1 = __importStar(require("httyp"));
var RedditAPIErr_1 = require("./RedditAPIErr");
var Map_1 = require("./Map");
var commons_1 = require("@aelesia/commons");
var RedditAuthToken_1 = require("./RedditAuthToken");
var RedditAPI = (function () {
    function RedditAPI(credentials) {
        this.oauth2 = null;
        if (credentials.o2a) {
            this.oauth2 = httyp_1.default.url('')
                .auth_oauth2_password(new httyp_1.OAuth2Token({
                access_token_url: 'https://www.reddit.com/api/v1/access_token',
                client_id: credentials.o2a.client_id,
                client_secret: credentials.o2a.client_secret,
                password: credentials.o2a.password,
                username: credentials.o2a.username
            }))
                .header('User-Agent', credentials.user_agent);
        }
        else if (credentials.bearer_token) {
            this.oauth2 = httyp_1.default.url('')
                .auth_bearer(credentials.bearer_token)
                .header('User-Agent', credentials.user_agent);
        }
        else if (credentials.o2a_implicit) {
            this.oauth2 = httyp_1.default.url('')
                .auth_oauth2_password(new RedditAuthToken_1.RedditAuthToken({
                client_id: credentials.o2a_implicit.client_id,
                client_secret: credentials.o2a_implicit.client_secret,
                code: credentials.o2a_implicit.code,
                redirect_uri: credentials.o2a_implicit.redirect_uri
            }))
                .header('User-Agent', credentials.user_agent);
        }
    }
    RedditAPI.prototype.set_token = function (bearer_token) {
        this.oauth2 = this.oauth2.auth_bearer(bearer_token);
    };
    RedditAPI.prototype.comments = function (subreddit) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, httyp_1.default.url("https://www.reddit.com/r/" + subreddit + "/comments.json").get()];
                                    case 1:
                                        data = (_a.sent()).data;
                                        return [2, data.data.children.map(Map_1.map_t1)];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.threads = function (subreddit) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, httyp_1.default.url("https://www.reddit.com/r/" + subreddit + "/new.json").get()];
                                    case 1:
                                        data = (_a.sent()).data;
                                        return [2, data.data.children.map(Map_1.map_t3)];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.reply = function (thing_id, text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var resp;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.oauth2
                                            .url('https://oauth.reddit.com/api/comment')
                                            .body_forms({ thing_id: thing_id, text: text })
                                            .post()];
                                    case 1:
                                        resp = _a.sent();
                                        if (!resp.data.success) {
                                            if (JSON.stringify(resp.data.jquery).includes('you are doing that too much')) {
                                                throw new RedditAPIErr_1.RedditAPIErr.PostLimit("thing_id: " + thing_id);
                                            }
                                            throw new RedditAPIErr_1.RedditAPIErr.Failed("" + JSON.stringify(resp.data));
                                        }
                                        return [2];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.implicit_token = function (client_id, client_secret, redirect_uri, code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var resp;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, httyp_1.default.url('https://www.reddit.com/api/v1/access_token')
                                            .auth_basic(client_id, client_secret)
                                            .body_forms({
                                            grant_type: 'authorization_code',
                                            code: code,
                                            redirect_uri: redirect_uri
                                        })
                                            .post()];
                                    case 1:
                                        resp = (_a.sent()).data;
                                        if ('error' in resp) {
                                            throw new RedditAPIErr_1.RedditAPIErr.Unauthorized(resp.error);
                                        }
                                        return [2, __assign(__assign({}, resp), { expires_on: commons_1._.date.add(resp.expires_in * 1000) })];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.me = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.oauth2.url('https://oauth.reddit.com/api/v1/me').get()];
                                    case 1: return [2, (_a.sent()).data];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.search = function (username, after) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, httyp_1.default.url("https://www.reddit.com/user/" + username + ".json?limit=100&after=" + (after !== null && after !== void 0 ? after : '')).get()];
                    case 1: return [2, (_a.sent()).data];
                }
            });
        });
    };
    RedditAPI.prototype.search_all = function (username, max_results) {
        if (max_results === void 0) { max_results = 999; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var data, all_posts, map;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        all_posts = [];
                                        _b.label = 1;
                                    case 1: return [4, this.search(username, (_a = data === null || data === void 0 ? void 0 : data.data.after) !== null && _a !== void 0 ? _a : '')];
                                    case 2:
                                        data = _b.sent();
                                        map = data.data.children.map(Map_1.map_search);
                                        all_posts = all_posts.concat(map);
                                        _b.label = 3;
                                    case 3:
                                        if (data.data.after && all_posts.length < max_results) return [3, 1];
                                        _b.label = 4;
                                    case 4: return [2, all_posts];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.oauth2
                                            .url('https://oauth.reddit.com/api/del')
                                            .body_forms({ id: id })
                                            .post()];
                                    case 1:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.edit = function (thing_id, text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var resp;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.oauth2
                                            .url('https://oauth.reddit.com/api/editusertext')
                                            .body_forms({ thing_id: thing_id, text: text })
                                            .post()];
                                    case 1:
                                        resp = _a.sent();
                                        if (!resp.data.success) {
                                            throw new RedditAPIErr_1.RedditAPIErr.Failed("" + JSON.stringify(resp.data));
                                        }
                                        return [2];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.user = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, httyp_1.default.url("https://www.reddit.com/user/" + username + "/about.json").get()];
                                    case 1:
                                        data = (_a.sent()).data.data;
                                        return [2, commons_1._.obj.omit(data, 'subreddit')];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.post = function (thing_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            var data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, httyp_1.default.url("https://api.reddit.com/api/info/?id=" + thing_id).get()];
                                    case 1:
                                        data = (_a.sent()).data.data;
                                        return [2, Map_1.map_search(data.children[0])];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.compose = function (username, subject, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.trycatch(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, this.oauth2
                                            .url("https://oauth.reddit.com/api/compose")
                                            .body_forms({
                                            api_type: 'json',
                                            subject: subject,
                                            text: body,
                                            to: username
                                        })
                                            .post()];
                                    case 1:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    RedditAPI.prototype.trycatch = function (func) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 2, , 3]);
                        return [4, func()];
                    case 1: return [2, _e.sent()];
                    case 2:
                        e_1 = _e.sent();
                        if (e_1 instanceof RedditAPIErr_1.RedditAPIErr.General)
                            throw e_1;
                        else if ((_b = ((_a = e_1.response) === null || _a === void 0 ? void 0 : _a.status) === 503) !== null && _b !== void 0 ? _b : false)
                            commons_1.Throw(new RedditAPIErr_1.RedditAPIErr.ServerBusy('Reddit Servers Busy'), e_1);
                        else if ((_d = ((_c = e_1.response) === null || _c === void 0 ? void 0 : _c.status) === 401) !== null && _d !== void 0 ? _d : false)
                            commons_1.Throw(new RedditAPIErr_1.RedditAPIErr.Unauthorized('Unauthorized. Check your credentials'), e_1);
                        else if (e_1 instanceof TypeError && e_1.message.match(/Cannot read property .* of null/)) {
                            commons_1.Throw(new RedditAPIErr_1.RedditAPIErr.Null('Did you forget to initialize RedditAPI Client with O2A or Bearer token?'), e_1);
                        }
                        commons_1.Throw(new RedditAPIErr_1.RedditAPIErr.General(e_1.message), e_1);
                        throw Error('trycatch');
                    case 3: return [2];
                }
            });
        });
    };
    return RedditAPI;
}());
exports.default = RedditAPI;
//# sourceMappingURL=RedditAPI.js.map