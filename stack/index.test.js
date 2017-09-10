const Stack = require('./index.js');

describe('Stack data structure test', () => {
    describe('Stack definition test', () => {
        const stack = new Stack();

        it('it has length param', () => {
            const stackHaslength = stack.hasOwnProperty('length'),
            stackLength = stack.length;

            expect(stackHaslength).toBeTruthy();
            expect(stackLength).toEqual(0);
        });

        it('it has list param', () => {
            const stackHasList = stack.hasOwnProperty('list'),
            stackList = stack.list,
            stackListLength = stack.list.length;

            expect(stackHasList).toBeTruthy();
            expect(Array.isArray(stackList)).toBeTruthy();
            expect(stackListLength).toEqual(0);             
        });

    });    

    describe('Stack creation test', () => {
        it('Stack creates without params', () => {
            const stack = new Stack();

            expect(stack.list).toEqual([]);
            expect(stack.length).toEqual(0);
        });
        it('Stack creates with params', () => {
            const stack = new Stack(1,2);

            expect(stack.list).toEqual([1,2]);
            expect(stack.length).toEqual(2);
        });
    });

    describe('Stack method add test', () => {
        it('Add undefined value', () => {
            const stack = new Stack(1,2);
            stack.add();
 
            expect(stack.list).toEqual([1,2]);
            expect(stack.length).toEqual(2);
        });
        it('Add one value', () => {
            const stack = new Stack(1,2);
            stack.add(3);
 
            expect(stack.list).toEqual([1,2,3]);
            expect(stack.length).toEqual(3);           
        });
        it('Add multiple value', () => {
            const stack = new Stack(1,2);
            stack.add(3,4);

            expect(stack.list).toEqual([1,2,3,4]);
            expect(stack.length).toEqual(4);               
        });
    });
    describe('Stack method remove test', () => {
        /**
         * We can remove only the last element from stack 
         */
        it('Remove value from stack', () => {
            const stack = new Stack(1,2);
            stack.remove();

            expect(stack.list).toEqual([1]);
            expect(stack.length).toEqual(1);    
            
            stack.remove();
            expect(stack.list).toEqual([]);
            expect(stack.length).toEqual(0);  

            stack.remove();
            expect(stack.list).toEqual([]);
            expect(stack.length).toEqual(0);  
        });    
    });
    describe('Stack method peek test', () => {
        it('Peek method return last value', ()=>{
            const stack = new Stack(1,2);

            expect(stack.peek()).toEqual(2);    
            
            stack.remove();
            expect(stack.peek()).toEqual(1);  

            stack.remove();
            expect(stack.peek()).toEqual(undefined);            
        });
    });
    describe('Stack method isEmpty test', () => {
        it('isEmpty return true if stack is empty and false if its not', ()=>{
            const stack = new Stack(1);

            expect(stack.isEmpty()).toBeFalsy();   
            
            stack.remove();
            expect(stack.isEmpty()).toBeTruthy();

            stack.remove();
            expect(stack.isEmpty()).toBeTruthy();           
        });
    });
});
