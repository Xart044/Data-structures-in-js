/**
 * Hash Table is a data structure which stores data in an associative manner.
 * In a hash table, data is stored in an array format, where each data value has its own unique index value. 
 * Access of data becomes very fast if we know the index of the desired data.
 * 
 * @class HashTable
 * 
 * @constructor get hashFunc as param
 * 
 * @method hashKey :    function that get a key and make a hash
 * @method hasItem :    checks for an instance with such key param in hash table emory
 * @method setItem :    sets item into hash table memory, hashes key param
 * @method updateItem : update only existing instances with new values
 * @method getItem :    get the value by key param
 * @method removeItem : removes instance by key param
 * @method clear :      removes all instances from hashtable
 * 
 * @see https://www.tutorialspoint.com/data_structures_algorithms/hash_data_structure.htm
 */
class HashTable{
    constructor(hashFunc){
        this.memory = {};
        this.length = 0;
        this.hashKey = key => hashFunc(key);
    }

    hasItem(key){
        const hash = this.hashKey(key);
        return this.memory[hash] ? true : false;
    }

    setItem(key, value){
        const hash = this.hashKey(key);
        if(this.memory[hash]) return;

        ++this.length;
        this.memory[hash] = value;
        return this;
    }

    updateItem(key, value){
        const hash = this.hashKey(key);
        if(!this.memory[hash]) return;

        this.memory[hash] = value;
        return this;
    }

    getItem(key){
        const hash = this.hashKey(key);
        const value = this.memory[hash];

        if(!value) return;

        return value;
    }

    removeItem(key){
        const hash = this.hashKey(key);

        if(!this.memory[hash]) return;
        
        --this.length;
        delete this.memory[hash];
        return this;
    }

    clear(){
        this.memory = {};
        this.length = 0;

        return this;
    }

}

module.exports = HashTable;