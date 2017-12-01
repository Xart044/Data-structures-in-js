
/**
 * A queue or FIFO (first in, first out) is an abstract data type that serves as a collection of elements,
 * with two principal operations: 
 * enqueue, the process of adding an element to the collection (The element is added from the rear side) 
 * and dequeue, the process of removing the first element that was added (The element is removed from the front side)
 * 
 * @class Queue
 * 
 * @method add : Add value to the end of list
 * @method remove : Remove value from the start of list
 * @method peek : Return first value
 * @method isEmpty : Return true if queue is empty, false if its not 
 * 
 * @see http://www.studytonight.com/data-structures/queue-data-structure
 */
class Queue{
    constructor (...props) {
        this.list = props || [];
        this.length = props.length || 0;
    }
    add(...value){
        if(typeof(value) === 'undefined') return;
        this.list = this.list.concat(...value);
        this.length += value.length;
    }
    remove(){
        if(this.length === 0) return;
        this.list = this.list.filter((el, ind) => ind !== 0);
        --this.length;
    }
    peek(){
        if(this.length === 0) return;
        return this.list[0];
    }
    isEmpty(){
        return this.length === 0;
    }
}

module.exports = Queue;