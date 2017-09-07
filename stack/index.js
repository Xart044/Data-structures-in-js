
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
        list.pop();
        --list;
    }
    get(){
        if(list.length === 0) return;
        return list[length-1];
    }
}
