'use strict';

let Deque = require("../deque");

var assert = require('assert');

describe('Deque', function() {
    let deque = new Deque();
    it('should construct', function () {
        assert.deepStrictEqual(deque.CHUNK_SIZE, 8, "default chunk size");

        assert.deepStrictEqual(deque.front.before, null, "empty front before");
        assert.deepStrictEqual(deque.front.after, deque.back, "empty front after");
        assert.deepStrictEqual(deque.front.index, 7, "empty front index");

        assert.deepStrictEqual(deque.back.before, deque.front, "empty back before");
        assert.deepStrictEqual(deque.back.after, null, "empty back after");
        assert.deepStrictEqual(deque.back.index, 0, "empty back index");

        assert.deepStrictEqual(deque.size, 0, "empty size");

        let alt_deque = new Deque(4);
        assert.deepStrictEqual(alt_deque.CHUNK_SIZE, 4, "custom chunk size");

        assert.deepStrictEqual(alt_deque.front.before, null, "empty front before (custom size)");
        assert.deepStrictEqual(alt_deque.front.after, alt_deque.back, "empty front after (custom size)");
        assert.deepStrictEqual(alt_deque.front.index, 3, "empty front index (custom size)");

        assert.deepStrictEqual(alt_deque.back.before, alt_deque.front, "empty back before (custom size)");
        assert.deepStrictEqual(alt_deque.back.after, null, "empty back after (custom size)");
        assert.deepStrictEqual(alt_deque.back.index, 0, "empty back index (custom size)");

        assert.deepStrictEqual(alt_deque.size, 0, "empty size (custom size)");
    });
});