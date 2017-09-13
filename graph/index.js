
/**
 * Graph is a pictorial representation of a set of objects where some pairs of objects are connected by links.
 * The interconnected objects are represented by points termed as vertices,
 * and the links that connect the vertices are called edges.
 * 
 * @class Graph
 * 
 * @method addNode  : add new node to the graph
 * @method findNode : find node in existing nodes in graph
 * @method addLine  : add line between two node in graph
 * 
 * @see http://www.geeksforgeeks.org/graph-data-structure-and-algorithms/
 * 
 */
class Graph {
    constructor(){
        this.nodes = {};
    }
    addNode(key) {
        if(this.nodes[key]){
            return this;
        }
        const node = {[key]: {name: key, line: []}};
        this.nodes = Object.assign(this.nodes, node);

        return this;
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
            throw new Error('startNode should exist!');
        }
        if(!endNode){
            throw new Error('endNode should exist!');
        }

        startNode.lines.push(endKey);
        return this;
    }
};