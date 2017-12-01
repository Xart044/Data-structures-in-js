
/**
 * Stack is a linear data structure which follows a particular order in which the operations are performed.
 * The order may be LIFO(Last In First Out) or FILO(First In Last Out).
 * 
 * @class Stack
 * 
 * @method add : Add value to the end of list
 * @method remove : Remove value from the end of list
 * @method peek : Return last value
 * @method isEmpty : Return true if stack is empty, false if its not
 * 
 * @see http://www.studytonight.com/data-structures/stack-data-structure
 */
class Stack{
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
        this.list = this.list.filter((el,ind, array) => ind !== array.length - 1);
        --this.length;
    }
    peek(){
        if(this.length === 0) return;
        return this.list[this.length-1];
    }
    isEmpty(){
        return this.length === 0;
    }
}

module.exports = Stack;