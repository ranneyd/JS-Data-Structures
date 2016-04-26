'use strict';

module.exports = class Deque{
    constructor(CHUNK_SIZE){
        this.CHUNK_SIZE = CHUNK_SIZE || 8;
        this.front = {
            elems: new Array(this.CHUNK_SIZE),
            before: null,
            after: null,
            front_index: 0,
            back_index: 0
        };
        this.back = this.front

        this.size = 0;
    }
    isEmpty(){
        return this.size <= 0;
    }
    push(elem){
        this.push_back(elem);
    }
    push_back(elem){
        if(this.back.back_index >= this.CHUNK_SIZE){
            let newBack = {
                elems: new Array(this.CHUNK_SIZE),
                before: this.back,
                after: null,
                back_index: 0,
                front_index: 0
            };
            this.back.after = newBack;
            this.back = newBack;
        }
        this.back.elems[this.back.back_index++] = elem;
        this.size++;
    }
    push_front(elem){
        if(this.front.front_index < 0){
            let newFront = {
                elems: new Array(this.CHUNK_SIZE),
                before: null,
                after: this.front,
                front_index: this.CHUNK_SIZE - 1,
                back_index: this.CHUNK_SIZE - 1
            };
            this.front.before = newFront;
            this.front = newFront;
        }
        this.front.elems[this.front.front_index--] = elem;
        this.size++;
    }
    pop(){
        this.pop_back();
    }
    pop_front(){
        this.size--;
    }
    pop_back(){
        let elem = this.back.elems[this.back.back_index--];
        if(this.back.back_index <= this.back.front_index){
            // If there is no node before, then we're at the end of the line
            if(this.back.before === null){
                // If they keep popping an empty array, this counter should remain where it is
                this.back.back_index = this.back.front_index;
            }
            else{
                this.back = this.back.before;
                this.back.after = null;
            }
        }
        this.size--;
        return elem;
    }
}