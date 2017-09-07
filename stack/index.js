
/**
 * Stack data structure 
 * 
 * @class Stack
 * 
 * @method add : Add value to the end of list
 * @method remove : Remove value from the end of list
 * @method get : Return last value
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
        this.list.push(...value);
        this.length += value.length;
    }
    remove(){
        if(this.list.length === 0) return;
        this.list.pop();
        --this.length;
    }
    peek(){
        if(this.list.length === 0) return;
        return this.list[this.length-1];
    }
}

module.exports = Stack;