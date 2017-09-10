const Queue = require('./index.js');

describe('Queue data structure test', () => {
    describe('Queue definition test', () => {
        const queue = new Queue();

        it('it has length param', () => {
            const queueHaslength = queue.hasOwnProperty('length'),
            queueLength = queue.length;

            expect(queueHaslength).toBeTruthy();
            expect(queueLength).toEqual(0);
        });

        it('it has list param', () => {
            const queueHasList = queue.hasOwnProperty('list'),
            queueList = queue.list,
            queueListLength = queue.list.length;

            expect(queueHasList).toBeTruthy();
            expect(Array.isArray(queueList)).toBeTruthy();
            expect(queueListLength).toEqual(0);             
        });

    });    

    describe('Queue creation test', () => {
        it('Queue creates without params', () => {
            const queue = new Queue();

            expect(queue.list).toEqual([]);
            expect(queue.length).toEqual(0);
        });
        it('Queue creates with params', () => {
            const queue = new Queue(1,2);

            expect(queue.list).toEqual([1,2]);
            expect(queue.length).toEqual(2);
        });
    });

    describe('Queue method add test', () => {
        it('Add undefined value', () => {
            const queue = new Queue(1,2);
            queue.add();
 
            expect(queue.list).toEqual([1,2]);
            expect(queue.length).toEqual(2);
        });
        it('Add one value', () => {
            const queue = new Queue(1,2);
            queue.add(3);
 
            expect(queue.list).toEqual([1,2,3]);
            expect(queue.length).toEqual(3);           
        });
        it('Add multiple value', () => {
            const queue = new Queue(1,2);
            queue.add(3,4);

            expect(queue.list).toEqual([1,2,3,4]);
            expect(queue.length).toEqual(4);               
        });
    });
    describe('Queue method remove test', () => {
        /**
         * We can remove only the first element from queue 
         */
        it('Remove value from queue', () => {
            const queue = new Queue(1,2);
            queue.remove();

            expect(queue.list).toEqual([2]);
            expect(queue.length).toEqual(1);    
            
            queue.remove();
            expect(queue.list).toEqual([]);
            expect(queue.length).toEqual(0);  

            queue.remove();
            expect(queue.list).toEqual([]);
            expect(queue.length).toEqual(0);  
        });    
    });
    describe('Queue method get test', () => {
        it('Peek method return first value', ()=>{
            const queue = new Queue(1,2);

            expect(queue.peek()).toEqual(1);    
            
            queue.remove();
            expect(queue.peek()).toEqual(2);  

            queue.remove();
            expect(queue.peek()).toEqual(undefined);            
        });
    });
    describe('Queue method isEmpty test', () => {
        it('isEmpty return true if queue is empty and false if its not', ()=>{
            const queue = new Queue(1);

            expect(queue.isEmpty()).toBeFalsy();   
            
            queue.remove();
            expect(queue.isEmpty()).toBeTruthy(); 

            queue.remove();
            expect(queue.isEmpty()).toBeTruthy();         
        });
    });
});
