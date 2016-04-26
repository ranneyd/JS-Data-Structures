'use strict';

let Deque = require("../deque");

var assert = require('assert');

describe('Deque', function() {

    it('should construct', function () {
        let deque = new Deque();
        let alt_deque = new Deque(4);

        assert.deepStrictEqual(deque.CHUNK_SIZE, 8, "default chunk size");

        assert.deepStrictEqual(deque.front, deque.back, "front/back same");

        assert.deepStrictEqual(deque.front.before, null, "empty front before");
        assert.deepStrictEqual(deque.front.after, null, "empty front after");
        assert.deepStrictEqual(deque.front.front_index, 0, "empty front index");
        assert.deepStrictEqual(deque.front.back_index, 0, "empty back index");


        assert.deepStrictEqual(deque.size, 0, "empty size");

        assert.deepStrictEqual(alt_deque.CHUNK_SIZE, 4, "custom chunk size");

        assert.deepStrictEqual(alt_deque.front, alt_deque.back, "front/back same (custom size)");

        assert.deepStrictEqual(alt_deque.front.before, null, "empty front before (custom size)");
        assert.deepStrictEqual(alt_deque.front.after, null, "empty front after (custom size)");
        assert.deepStrictEqual(alt_deque.front.front_index, 0, "empty front index (custom size)");
        assert.deepStrictEqual(alt_deque.front.back_index, 0, "empty back index (custom size)");


        assert.deepStrictEqual(alt_deque.size, 0, "empty size (custom size)");
    });

    it('should push_back properly', function () {
        let deque = new Deque(4);

        deque.push_back(42);

        let expectedBack = new Array(4);
        expectedBack[0] = 42;

        assert.deepStrictEqual(deque.front.elems, expectedBack, "one elem front (custom size)");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "one elem back (custom size)");
        assert.deepStrictEqual(deque.size, 1, "one elem size");

        deque.push_back(123);

        expectedBack[1] = 123;

        assert.deepStrictEqual(deque.front.elems, expectedBack, "two elem front (custom size)");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "two elem back (custom size)");
        assert.deepStrictEqual(deque.size, 2, "one elem size");

        deque.push_back(1);
        deque.push_back(2);
        deque.push_back(3);

        let expectedFront = [42, 123, 1, 2];
        expectedBack = new Array(4);
        expectedBack[0] = 3;

        assert.deepStrictEqual(deque.front.elems, expectedFront, "multi elem front (custom size)");
        assert.deepStrictEqual(deque.back.before.elems, expectedFront, "multi elem previous back (custom size)");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "multi elem back (custom size)");
        assert.deepStrictEqual(deque.size, 5, "multi elem size");

    });

    it('should push_front properly', function () {
        let deque = new Deque(4);

        deque.push_front(42);

        let expectedFront = new Array(4);
        let expectedBack = new Array(4);
        expectedBack[0] = 42;

        assert.deepStrictEqual(deque.front.elems, expectedBack, "one elem front (custom size)");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "one elem back (custom size)");
        assert.deepStrictEqual(deque.size, 1, "one elem size");

        deque.push_front(123);

        expectedFront[3] = 123;

        assert.deepStrictEqual(deque.front.elems, expectedFront, "two elem front (custom size)");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "two elem back (custom size)");
        assert.deepStrictEqual(deque.size, 2, "one elem size");

        deque.push_front(1);
        deque.push_front(2);
        deque.push_front(3);
        deque.push_front(4);


        let expectedFront2 = new Array(4);
        expectedFront2[3] = 4;
        expectedFront = [3, 2, 1, 123];

        assert.deepStrictEqual(deque.front.elems, expectedFront2, "multi elem front (custom size)");
        assert.deepStrictEqual(deque.back.before.elems, expectedFront, "multi elem previous back (custom size)");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "multi elem back (custom size)");
        assert.deepStrictEqual(deque.size, 6, "multi elem size");
    });
    it('should push_front properly', function () {
        let deque = new Deque(4);

    });
});