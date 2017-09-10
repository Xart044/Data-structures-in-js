const HashTable = require('./index.js');

const dummyData = require('./dummy.json');

const testHashFunc = key => {
    let hash = 0;
    if (key.length === 0) return hash;
    key.split('').forEach(symbol => {
        const char = symbol.charCodeAt(0);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    });
    return toString(hash);
}

describe('HashTable data structure test', () => {
    describe('HashTable definition test', () => {
        const hashTable = new HashTable();

        it('it has hashKey method', () => {
            const htHasHashKeyMethod = hashTable.hasOwnProperty('hashKey');

            expect(typeof(hashTable.hashKey)).toEqual('function');
            expect(htHasHashKeyMethod).toBeTruthy();
        });

        it('it has memory param', () => {
            const htHasMemory = hashTable.hasOwnProperty('memory');

            expect(typeof(hashTable.memory)).toEqual('object');
            expect(Object.keys(hashTable.memory).length).toEqual(0);
            expect(htHasMemory).toBeTruthy();
        });

        it('it has length param', () => {
            const htHasLength = hashTable.hasOwnProperty('length');

            expect(typeof(hashTable.length)).toEqual('number');
            expect(hashTable.length).toEqual(0);
            expect(htHasLength).toBeTruthy();            
        });
    });

    describe('HashTable method setItem test', () => {
        const hashTable = new HashTable(testHashFunc);
        hashTable.setItem(dummyData.key, dummyData.value);

        it('It adds value, length is 1, memory has one instance', () => {

            expect(hashTable.length).toEqual(1);
            expect(Object.keys(hashTable.memory).length).toEqual(1);
            
        });

        it('Key of added value is hashed', () => {
            const key = Object.keys(hashTable.memory)[0];

            expect(key).not.toEqual(dummyData.key);
            expect(typeof(key)).toEqual('string');

        });

        it('Added value not changed', () => {
            const value = Object.values(hashTable.memory)[0];

            expect(value).toBe(dummyData.value);

        });       

    });

    describe('HashTable method hashKey test', () => {
        const hashTable = new HashTable(testHashFunc);
        it('it is function', () => {
            hashTable.setItem(dummyData.key, dummyData.value);

            expect(typeof(hashTable.hashKey)).toEqual('function');
            expect(testHashFunc(dummyData.key)).toBe(Object.keys(hashTable.memory)[0]);
            
        });
    });

    describe('HashTable method updateItem test', () => {
        const hashTable = new HashTable(testHashFunc);
        hashTable.setItem(dummyData.key, dummyData.value);
        hashTable.updateItem(dummyData.key, dummyData.newValue);

        it('New value is not like previous', () => {
            const value = Object.values(hashTable.memory)[0];

            expect(value).not.toBe(dummyData.value);
            expect(value).toBe(dummyData.newValue);
            expect(hashTable.length).toBe(1);
            expect(Object.keys(hashTable.memory).length).toBe(1);

        }); 

    });

    describe('HashTable method getItem test', () => {
        const hashTable = new HashTable(testHashFunc);

        it('Can get the value', () => {
            hashTable.setItem(dummyData.key, dummyData.value);
            const value = hashTable.getItem(dummyData.key);
            
            expect(value).toBe(dummyData.value);
        });

        it('Can get new value', () => {
            hashTable.updateItem(dummyData.key, dummyData.newValue);
            const value = hashTable.getItem(dummyData.key);

            expect(value).not.toBe(dummyData.value);
            expect(value).toBe(dummyData.newValue);

        });  

    });

    describe('HashTable method removeItem test', () => {
        const hashTable = new HashTable(testHashFunc);

        it('Removes item correct', () => {
            hashTable.setItem(dummyData.key, dummyData.value);
            expect(hashTable.length).toBe(1);
            hashTable.removeItem(dummyData.key);
            expect(hashTable.length).toBe(0);
            hashTable.removeItem(dummyData.key);
            expect(hashTable.length).toBe(0);
        });

    });

    describe('HashTable method clear test', () => {
        const hashTable = new HashTable(testHashFunc);

        it('Clears empty hashtable correct', () => {
            hashTable.clear();
            expect(hashTable.length).toBe(0);
            expect(Object.keys(hashTable.memory).length).toBe(0);
        });

        it('Clears full hashtable correct', () => {
            hashTable.setItem(dummyData.key, dummyData.value);
            hashTable.setItem(dummyData.key+'1', dummyData.value+'1');
            hashTable.updateItem(dummyData.key, dummyData.newValue);
            hashTable.setItem(dummyData.key, dummyData.value);
            hashTable.clear();
            expect(hashTable.length).toBe(0);
            expect(Object.keys(hashTable.memory).length).toBe(0);            
        });

    });

    describe('HashTable method hasItem test', () => {
        const hashTable = new HashTable(testHashFunc);

        it('Has item works correct', () => {
            hashTable.setItem(dummyData.key, dummyData.value);

            let hasItem = hashTable.hasItem(dummyData.key);
            expect(hasItem).toBeTruthy();

            hashTable.updateItem(dummyData.key, dummyData.newValue);
            hasItem = hashTable.hasItem(dummyData.key);
            expect(hasItem).toBeTruthy();

            hashTable.removeItem(dummyData.key);
            hasItem = hashTable.hasItem(dummyData.key);
            expect(hasItem).toBeFalsy();
        });

    });

});