'use strict';

let Deque = require("../deque");

var assert = require('assert');

describe('Deque', function() {

    it('should construct', function () {
        let deque = new Deque();
        let alt_deque = new Deque(4);

        assert.deepStrictEqual(deque.CHUNK_SIZE, 8, "default chunk size");

        assert.deepStrictEqual(deque.front.before, null, "empty front before");
        assert.deepStrictEqual(deque.front.after, deque.back, "empty front after");
        assert.deepStrictEqual(deque.front.index, 7, "empty front index");

        assert.deepStrictEqual(deque.back.before, deque.front, "empty back before");
        assert.deepStrictEqual(deque.back.after, null, "empty back after");
        assert.deepStrictEqual(deque.back.index, 0, "empty back index");

        assert.deepStrictEqual(deque.size, 0, "empty size");

        assert.deepStrictEqual(alt_deque.CHUNK_SIZE, 4, "custom chunk size");

        assert.deepStrictEqual(alt_deque.front.before, null, "empty front before (custom size)");
        assert.deepStrictEqual(alt_deque.front.after, alt_deque.back, "empty front after (custom size)");
        assert.deepStrictEqual(alt_deque.front.index, 3, "empty front index (custom size)");

        assert.deepStrictEqual(alt_deque.back.before, alt_deque.front, "empty back before (custom size)");
        assert.deepStrictEqual(alt_deque.back.after, null, "empty back after (custom size)");
        assert.deepStrictEqual(alt_deque.back.index, 0, "empty back index (custom size)");

        assert.deepStrictEqual(alt_deque.size, 0, "empty size (custom size)");
    });

    it('should push_back properly', function () {
        let deque = new Deque();
        let alt_deque = new Deque(4);

        deque.push_back(42);

        let expectedFront = new Array(8);
        let expectedBack = new Array(8);
        expectedBack[0] = 42;

        assert.deepStrictEqual(deque.front.elems, expectedFront, "one elem front");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "one elem back");

        deque.push_back(123);

        expectedBack[1] = 123;

        assert.deepStrictEqual(deque.front.elems, expectedFront, "two elem front");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "two elem back");

        alt_deque.push_back(42);

        expectedFront = new Array(4);
        expectedBack = new Array(4);
        expectedBack[0] = 42;

        assert.deepStrictEqual(alt_deque.front.elems, expectedFront, "one elem front (custom size)");
        assert.deepStrictEqual(alt_deque.back.elems, expectedBack, "one elem back (custom size)");

        alt_deque.push_back(123);

        expectedBack[1] = 123;

        assert.deepStrictEqual(alt_deque.front.elems, expectedFront, "two elem front (custom size)");
        assert.deepStrictEqual(alt_deque.back.elems, expectedBack, "two elem back (custom size)");

        alt_deque.push_back(1);
        alt_deque.push_back(2);
        alt_deque.push_back(3);

        expectedBack = [42, 123, 1, 2];
        let expectedBack2 = new Array(4);
        expectedBack2[0] = 3;

        assert.deepStrictEqual(alt_deque.front.elems, expectedFront, "multi elem front (custom size)");
        assert.deepStrictEqual(alt_deque.back.before.elems, expectedBack, "multi elem previous back (custom size)");
        assert.deepStrictEqual(alt_deque.back.elems, expectedBack2, "multi elem back (custom size)");
    });

    it('should push_front properly', function () {
        let deque = new Deque();
        let alt_deque = new Deque(4);

        deque.push_front(42);

        let expectedFront = new Array(8);
        expectedFront[7] = 42;
        let expectedBack = new Array(8);

        assert.deepStrictEqual(deque.front.elems, expectedFront, "one elem front");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "one elem back");

        deque.push_front(123);

        expectedFront[6] = 123;

        assert.deepStrictEqual(deque.front.elems, expectedFront, "two elem front");
        assert.deepStrictEqual(deque.back.elems, expectedBack, "two elem back");

        alt_deque.push_front(42);

        expectedFront = new Array(4);
        expectedFront[3] = 42;
        expectedBack = new Array(4);

        assert.deepStrictEqual(alt_deque.front.elems, expectedFront, "one elem front (custom size)");
        assert.deepStrictEqual(alt_deque.back.elems, expectedBack, "one elem back (custom size)");

        alt_deque.push_front(123);
        expectedFront[2] = 123;

        assert.deepStrictEqual(alt_deque.front.elems, expectedFront, "two elem front (custom size)");
        assert.deepStrictEqual(alt_deque.back.elems, expectedBack, "two elem back (custom size)");

        alt_deque.push_front(1);
        alt_deque.push_front(2);
        alt_deque.push_front(3);

        expectedFront = [2, 1, 123, 42];
        let expectedFront2 = new Array(4);
        expectedFront2[3] = 3;

        assert.deepStrictEqual(alt_deque.front.after.elems, expectedFront, "multi elem previous front (custom size)");
        assert.deepStrictEqual(alt_deque.front.elems, expectedFront2, "multi elem front (custom size)");
        assert.deepStrictEqual(alt_deque.back.elems, expectedBack, "multi elem back (custom size)");
    });
});