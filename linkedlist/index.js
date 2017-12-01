/**
 * Linked List is a sequence of links which contains items. 
 * Each link contains a connection to another link. 
 * Linked list is the second most-used data structure after array. 
 * Following are the important terms to understand the concept of Linked List.
 * 
 * @class LinkedList
 * 
 * @method add    : add new node into list
 * @method remove : remove node from list
 * @method get    : get node 
 * 
 * @see http://www.geeksforgeeks.org/linked-list-set-1-introduction/
 */
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    add(value, position) {
        const node = {
            value: value,
            next: null
        };

        if (position === 0) {
            this.head = node;
        } else {
            const prev = this.get(position - 1);
            const current = prev.next;
            node.next = current;
            prev.next = node;
        }

        ++this.length;

        return this;
    }
    remove(position) {
        if (position === 0) {
            this.head = this.head.next;
        } else {
            const prev = this.get(position - 1);
            prev.next = prev.next.next;
        }

        --this.length;

        return this;
    }
    get(position) {
        if (position > this.length) {
            throw new Error("Position is invalid.");
        }
        if (this.length === 0) return null;

        let current = this.head;
        for (let index = 0; index < position; index++) {
            current = current.next;
        }

        return current;
    }
}

module.exports = LinkedList;