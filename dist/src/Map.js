"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map_search = exports.map_t3 = exports.map_t1 = void 0;
var commons_1 = require("@aelesia/commons");
function map_t1(it) {
    return {
        id: "t1_" + it.data.id,
        author: it.data.author,
        body: it.data.body,
        date: commons_1._.date.parse(it.data.created_utc),
        kind: 't1',
        subreddit: it.data.subreddit,
        parent_id: it.data.parent_id,
        thread_id: it.data.link_id,
        title: it.data.link_title,
        url: "https://reddit.com" + it.data.permalink
    };
}
exports.map_t1 = map_t1;
function map_t3(it) {
    return {
        id: it.data.name,
        author: it.data.author,
        body: it.data.selftext === '' ? '<empty>' : it.data.selftext,
        date: commons_1._.date.parse(it.data.created_utc),
        kind: 't3',
        subreddit: it.data.subreddit,
        thread_id: it.data.name,
        title: it.data.title,
        url: it.data.url
    };
}
exports.map_t3 = map_t3;
function map_search(it) {
    if (it.kind === 't1') {
        return map_t1(it);
    }
    else if (it.kind === 't3') {
        return map_t3(it);
    }
    else {
        throw new commons_1.Err.IllegalArgumentErr("Invalid kind: " + it.kind + ", id: " + it.data.id);
    }
}
exports.map_search = map_search;
//# sourceMappingURL=Map.js.map