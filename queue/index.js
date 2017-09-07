
/**
 * Queue data structure 
 * 
 * @class Queue
 * 
 * @method add : Add value to the end of list
 * @method remove : Remove value from the start of list
 * @method get : Return first value
 * 
 * @see http://www.studytonight.com/data-structures/queue-data-structure
 */
class Queue{
    constructor (props) {
        super(props)
        this.list = [];
        this.length = 0;
    }
    add(value){
        list.push(value);
        ++list;
    }
    remove(){
        if(list.length === 0) return;
        list.shift();
        --list;
    }
    get(){
        if(list.length === 0) return;
        return list[0];
    }
}
