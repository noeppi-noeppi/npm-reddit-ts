"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RedditAPI_1 = __importDefault(require("../src/RedditAPI"));
var commons_1 = require("@aelesia/commons");
var pkg = __importStar(require("../package.json"));
var CLIENT_ID = process.env['O2A_CLIENT_ID'];
var CLIENT_SECRET = process.env['O2A_SECRET'];
var USER_AGENT = "npm:reddit-ts:v" + pkg.version + " (by /u/aelesia)";
var PASSWORD = process.env['O2A_PASSWORD'];
var USERNAME = process.env['O2A_USERNAME'];
var Reddit = new RedditAPI_1.default({
    user_agent: USER_AGENT,
    o2a: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        password: PASSWORD,
        username: USERNAME
    }
});
describe('RedditAPI', function () {
    beforeAll(function () {
        expect(CLIENT_ID).toBeDefined();
        expect(CLIENT_SECRET).toBeDefined();
        expect(USER_AGENT).toBeDefined();
        expect(PASSWORD).toBeDefined();
        expect(USERNAME).toBeDefined();
    });
    test('Comments', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.comments('testingground4bots')];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(25);
                    results.forEach(function (r) {
                        expect(r.kind).toEqual('t1');
                        expect(r.date).not.toBeNull();
                        expect(r.date).toBeInstanceOf(Date);
                        expect(commons_1.Date_.isBefore(r.date, commons_1.Date_.now())).toBeTruthy();
                        expect(commons_1.Date_.isAfter(r.date, commons_1.Date_.minus(commons_1.Time.days(365), commons_1.Date_.now()))).toBeTruthy();
                        expect(r.url).not.toBeNull();
                        expect(r.title).not.toBeNull();
                        expect(r.thread_id).not.toBeNull();
                        expect(r.id).not.toBeNull();
                        expect(r.id).toMatch(new RegExp('t1_[\\w\\d]{7}'));
                        expect(r.subreddit).toEqual('testingground4bots');
                        expect(r.body).not.toBeNull();
                        expect(r.author).not.toBeNull();
                    });
                    return [2];
            }
        });
    }); });
    test('Threads', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.threads('testingground4bots')];
                case 1:
                    results = _a.sent();
                    expect(results.length).toEqual(25);
                    results.forEach(function (r) {
                        expect(r.kind).toEqual('t3');
                        expect(r.date).not.toBeNull();
                        expect(r.date).toBeInstanceOf(Date);
                        expect(commons_1.Date_.isBefore(r.date, commons_1.Date_.now())).toBeTruthy();
                        expect(commons_1.Date_.isAfter(r.date, commons_1.Date_.minus(commons_1.Time.days(365), commons_1.Date_.now()))).toBeTruthy();
                        expect(r.url).not.toBeNull();
                        expect(r.title).not.toBeNull();
                        expect(r.thread_id).not.toBeNull();
                        expect(r.id).not.toBeNull();
                        expect(r.id).toMatch(new RegExp('t3_[\\w\\d]{6}'));
                        expect(r.subreddit).toEqual('testingground4bots');
                        expect(r.body).not.toBeNull();
                        expect(r.author).not.toBeNull();
                    });
                    return [2];
            }
        });
    }); });
    test('Me', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.me()];
                case 1:
                    results = _a.sent();
                    expect(results).not.toBeNull();
                    expect(results.name).toEqual(USERNAME);
                    return [2];
            }
        });
    }); });
    test('Reply', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.threads('testingground4bots')];
                case 1:
                    results = _a.sent();
                    return [4, Reddit.reply(results[0].id, "[Jest Test Reply " + new Date().toLocaleString() + "] " + USER_AGENT)];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    describe('Search & Delete', function () {
        var post;
        test('Search', function () { return __awaiter(void 0, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Reddit.search_all('bot-aelesia-dev')];
                    case 1:
                        results = _a.sent();
                        expect(results.length > 0);
                        results.forEach(function (r) {
                            expect(r.kind).not.toBeNull();
                            expect(r.date).not.toBeNull();
                            expect(r.url).not.toBeNull();
                            expect(r.title).not.toBeNull();
                            expect(r.thread_id).not.toBeNull();
                            expect(r.id).not.toBeNull();
                            expect(r.body).not.toBeNull();
                            expect(r.author).toEqual(USERNAME);
                        });
                        post = results[0];
                        return [2];
                }
            });
        }); });
        test('Delete', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, Reddit.delete(post.id)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        }); });
    });
    test('Edit', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.edit('t3_eaiqlw', "[Jest Test Edit " + new Date().toLocaleString() + "] " + USER_AGENT)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
    test('Search Max Posts 100', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.search_all('aelesia-', 100)];
                case 1:
                    results = _a.sent();
                    expect(results.length).toBeLessThanOrEqual(100);
                    return [2];
            }
        });
    }); });
    test('User', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.user('bot-aelesia-dev')];
                case 1:
                    results = _a.sent();
                    expect(results.is_employee).toEqual(false);
                    expect(results.is_friend).toEqual(false);
                    expect(results.awardee_karma).toEqual(0);
                    expect(results.id).toEqual('18vcwzqz');
                    expect(results.verified).toEqual(true);
                    expect(results.is_gold).toEqual(false);
                    expect(results.is_mod).toEqual(false);
                    expect(results.awarder_karma).toEqual(0);
                    expect(results.has_verified_email).toEqual(false);
                    expect(results.icon_img).toEqual('https://www.redditstatic.com/avatars/avatar_default_16_EA0027.png');
                    expect(results.hide_from_robots).toEqual(false);
                    expect(results.link_karma).toBeGreaterThanOrEqual(1);
                    expect(results.pref_show_snoovatar).toEqual(false);
                    expect(results.total_karma).toBeGreaterThanOrEqual(3);
                    expect(results.name).toEqual('bot-aelesia-dev');
                    expect(results.created).toEqual(1524598131);
                    expect(results.created_utc).toEqual(1524569331);
                    expect(results.comment_karma).toBeGreaterThanOrEqual(2);
                    expect(results.has_subscribed).toEqual(false);
                    expect(results['subreddit']).toBeUndefined();
                    return [2];
            }
        });
    }); });
    test('post_t3', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.post('t3_irtuce')];
                case 1:
                    results = _a.sent();
                    expect(results.author).toEqual('aelesia-dev');
                    expect(results.id).toEqual('t3_irtuce');
                    expect(results.parent_id).toBeUndefined();
                    expect(results.body).toEqual('Body');
                    expect(results.date).toEqual(commons_1.Date_.parse(1599981923));
                    expect(results.title).toEqual('Title');
                    expect(results.kind).toEqual('t3');
                    expect(results.subreddit).toEqual('testingground4bots');
                    expect(results.url).toContain('r/testingground4bots/comments/irtuce/title');
                    return [2];
            }
        });
    }); });
    test('post_t1', function () { return __awaiter(void 0, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.post('t1_g52b546')];
                case 1:
                    results = _a.sent();
                    expect(results.author).toEqual('aelesia-dev');
                    expect(results.id).toEqual('t1_g52b546');
                    expect(results.parent_id).toEqual('t3_irtuce');
                    expect(results.body).toEqual('Comment');
                    expect(results.date).toEqual(commons_1.Date_.parse(1599981934));
                    expect(results.title).toBeUndefined();
                    expect(results.kind).toEqual('t1');
                    expect(results.subreddit).toEqual('testingground4bots');
                    expect(results.url).toContain('/r/testingground4bots/comments/irtuce/title/g52b546');
                    return [2];
            }
        });
    }); });
    test('compose', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, Reddit.compose(USERNAME, 'Jest Test', commons_1.Date_.now().toUTCString())];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=RedditAPI.test.js.map