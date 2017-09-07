
/**
 * Queue data structure 
 * 
 * @class Queue
 * 
 * @method add : Add value to the end of list
 * @method remove : Remove value from the start of list
 * @method peek : Return first value
 * 
 * @see http://www.studytonight.com/data-structures/queue-data-structure
 */
class Queue{
    constructor (...props) {
        this.list = props || [];
        this.length = props.length || 0;
    }
    add(value){
        if(typeof(value) === 'undefined') return;
        this.list.push(...value);
        this.length += value.length;
    }
    remove(){
        if(this.length === 0) return;
        this.list.shift();
        --this.length;
    }
    peek(){
        if(this.length === 0) return;
        return this.list[0];
    }
}
