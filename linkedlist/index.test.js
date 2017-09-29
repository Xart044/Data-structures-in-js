const LinkedList = require('./index');

describe('LinkedList test', () =>{
    describe('LinkedList definition test', () => {
        const linkedlist = new LinkedList();
        it('It has length param', () => {
            const llHasLengthParam = linkedlist.hasOwnProperty('length');
            
            expect(typeof(linkedlist.length)).toEqual('number');
            expect(llHasLengthParam).toBeTruthy();           
        });
        it('It has head param', () => {
            const llHasHeadParam = linkedlist.hasOwnProperty('head');
            
            expect(typeof(linkedlist.head)).toEqual('object');
            expect(llHasHeadParam).toBeTruthy();             
        });
    });
    describe('Method get test', () => {
        const linkedlist = new LinkedList();
        it('if the length is 0, return null', () => {
            expect(linkedlist.get(0)).toBeNull();             
        });      
        it('get correct element', () => {
            linkedlist.add(0,0);
            expect(linkedlist.get(0)).toEqual({value: 0, next: null})            
        });  
    });   
    describe('Method add test', () => {
        const linkedlist = new LinkedList();
        it('Add correct element on correct place', () => {
            linkedlist.add(0,0);
            expect(linkedlist.get(0)).toEqual({value: 0, next: null}); 
            linkedlist.add(0,1);    
            expect(linkedlist.get(0)).toEqual({value: 0, next: {value: 0, next: null}});        
        });        
    });
    describe('Method remove test', () => {
        const linkedlist = new LinkedList();
        it('Remove correct element from correct place', () => {
            linkedlist.add(0,0);
            expect(linkedlist.get(0)).toEqual({value: 0, next: null}); 
            linkedlist.add(0,1);    
            expect(linkedlist.get(0)).toEqual({value: 0, next: {value: 0, next: null}});     
            linkedlist.remove(1); 
            expect(linkedlist.get(0)).toEqual({value: 0, next: null});  
            linkedlist.remove(0);   
            expect(linkedlist.length).toEqual(0); 
        });        
    });   
});