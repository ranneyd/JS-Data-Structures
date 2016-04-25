'use strict';

module.exports = class Deque{
    constructor(CHUNK_SIZE){
        this.CHUNK_SIZE = CHUNK_SIZE || 8;
        this.front = {
            elems: new Array(this.CHUNK_SIZE),
            before: null,
            after: null,
            index: this.CHUNK_SIZE - 1,
        };
        this.back = {
            elems: new Array(this.CHUNK_SIZE),
            before: null,
            after: null,
            index: 0
        };

        this.front.after = this.back;
        this.back.before = this.front;

        this.size = 0;
    }
    isEmpty(){
        return this.size <= 0;
    }
    push(elem){
        this.push_back(elem);
        this.size++;
    }
    push_back(elem){
        if(this.back.index >= this.CHUNK_SIZE){
            let newBack = {
                elems: new Array(this.CHUNK_SIZE),
                before: this.back,
                after: null,
                index: 0
            };
            this.back.after = newBack;
            this.back = newBack;
        }
        this.back.elems[this.back.index++] = elem;
    }
    push_front(elem){
        if(this.front.index <= 0){
            let newFront = {
                elems: new Array(this.CHUNK_SIZE),
                before: null,
                after: this.front,
                index: this.CHUNK_SIZE - 1
            };
            this.front.before = newFront;
            this.front = newFront;
        }
        this.front.elems[this.front.index++] = elem;
    }
    pop(){
        this.pop_back();
    }
    pop_front(){

    }
    pop_back(){

    }
}