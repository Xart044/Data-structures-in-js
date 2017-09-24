const Graph = require('./index.js');

const dummyData = require('./dummy.json');
const createNode = key => {return {[key]: {name: key, lines: []}}};

describe('Graph data structure test', () => {
    describe('Graph definition test', () => {
        const graph = new Graph();

        it('it has nodes param', () => {
            const graphHasMemory = graph.hasOwnProperty('nodes');

            expect(typeof(graph.nodes)).toEqual('object');
            expect(Object.keys(graph.nodes).length).toEqual(0);
            expect(graphHasMemory).toBeTruthy();
        });

    });

    describe('Graph method addNode test', () => {
        const graph = new Graph();
        const key = dummyData[1];
        graph.addNode(key);
        it('It adds node, nodes has one instance', () => {
            expect(graph.nodes).toEqual(createNode(key));
            expect(Object.keys(graph.nodes).length).toEqual(1);
            expect(Object.keys(graph.nodes)[0]).toEqual(key);
        });     

        it('Node name property is equal to the key, node length property is empty initially', () => {
            expect(graph.nodes[key].name).toEqual(key);
            expect(graph.nodes[key].lines.length).toEqual(0);
            expect(graph.nodes[key].lines).toEqual([]);
        });

    });

    describe('Graph method hasNode test', () => {
        const graph = new Graph();
        const key1 = dummyData[1];
        const key2 = dummyData[2];
        graph.addNode(key1);

        it('Returns true if node exist in graph nodes table', () => {
            expect(graph.hasNode(key1)).toBeTruthy();
        });

        if('Return false if node not exist in graph nodes table', () => {
            expect(graph.hasNode(key2)).toBeFalsy();
        });
    });

    describe('Graph method findNode test', () => {
        const graph = new Graph();
        const key1 = dummyData[1];
        const key2 = dummyData[2];
        const nodeKey1 = createNode(key1)[key1];
        graph.addNode(key1);

        it('Returns node if node exist in graph nodes table', () => {
            expect(graph.findNode(key1)).toEqual(nodeKey1);
        });

        if('Throws exception if node not exist in graph nodes table', () => {
            expect(graph.findNode(key2)).toThrow(`Node ${key2} doesn't exist!`);
        });
    });

    describe('Graph method addLine test', () => {
        const graph = new Graph();
        const key1 = dummyData[1];
        const key2 = dummyData[2];
        const key3 = dummyData[3];

        graph.addNode(key1);
        graph.addNode(key2);
        graph.addNode(key3);
        graph.addLine(key1, key2);
        graph.addLine(key2, key1);
        graph.addLine(key2, key3);

        it('Check that key1, key2, key3 exist in nodes and key4 doesnt exist', ()=>{
            const keys = Object.keys(graph.nodes);
            expect(keys.includes(key1)).toBeTruthy();
            expect(keys.includes(key2)).toBeTruthy();
            expect(keys.includes(key3)).toBeTruthy();
            expect(keys.includes('key4')).toBeFalsy();
        })

        it('Node with key1 has line to key2 node', () => {
            expect(graph.nodes[key1].lines.includes(key2)).toBeTruthy();
        });

        it('Node with key2 has line to key1 and key3 node', () => {
            expect(graph.nodes[key2].lines.includes(key1)).toBeTruthy();
            expect(graph.nodes[key2].lines.includes(key3)).toBeTruthy();
        });

        // it('Throws exception if key doesn\'t exist', () => {
        //     expect(graph.addLine('key4',key1)).toThrow(`Node with key key4 should exist!`);
        //     expect(graph.addLine(key1,'key5')).toThrow(`Node with key key5 should exist!`);
        //     expect(graph.addLine('key4','key5')).toThrow(`Node with key key4 should exist!`);
        // });

    });

    describe('Graph method removeNode test', () => {
        const graph = new Graph();
        const key1 = dummyData[1];
        const key2 = dummyData[2];
        const key3 = dummyData[3];

        graph.addNode(key1);
        graph.addNode(key2);
        graph.addLine(key1, key2);

        it('Removes node correct', () => {
            graph.removeNode(key1);
            expect(graph.hasNode(key1)).toBeFalsy();
            expect(graph.hasNode(key2)).toBeTruthy();
        });

    });

});