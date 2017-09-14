
/**
 * Graph is a pictorial representation of a set of objects where some pairs of objects are connected by links.
 * The interconnected objects are represented by points termed as vertices,
 * and the links that connect the vertices are called edges.
 * 
 * @class Graph
 * 
 * @method addNode  : add new node to the graph
 * @method hasNode : checks for existing node
 * @method findNode : find node in existing nodes in graph
 * @method addLine  : add line between two node in graph
 * 
 * @see http://www.geeksforgeeks.org/graph-data-structure-and-algorithms/
 * 
 */
class Graph {
    constructor(){
        this.nodes = {};
        this.nodeCreation = key => {
            return {
                [key]: {
                    name: key,
                    lines: []
                }
            }
        };
    }
    addNode(key) {
        if(this.nodes[key]){
            return this;
        }
        const node = this.nodeCreation(key);
        this.nodes = Object.assign(this.nodes, node);

        return this;
    }
    removeNode(key){
        const node = this.nodes[key];
        if(node==undefined) throw new Error(`Node ${key} doesn't exist!`);

        delete this.nodes[key];
        return this;
    }
    hasNode(key){
        return this.nodes[key] ? true : false;
    }
    findNode(key){
        const node = this.nodes[key];
        if(node==undefined) throw new Error(`Node ${key} doesn't exist!`);

        return node;
    }
    addLine(startKey, endKey) {
        const startNode = this.findNode(startKey);
        const endNode = this.findNode(endKey);

        if(!startNode){
            throw new Error(`Node with key ${startKey} should exist!`);
        }
        if(!endNode){
            throw new Error(`Node with key ${endKey} should exist!`);
        }

        if(!startNode.lines.includes(endKey)){
            startNode.lines.push(endKey);
        }
        return this;
    }
};

module.exports = Graph;