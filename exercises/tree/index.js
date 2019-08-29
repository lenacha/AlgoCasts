// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(val){
        this.data = val;
        this.children = [];
    };
    add(value){
        let newNode = new Node(value);
        this.children.push(newNode);
    };
    remove(data){
        this.children = this.children.filter(node => node.data !== data);
    }
}

class Tree {
    constructor(){
        this.root = null;
    };
    traverseBF(fn) {
        const arr = [this.root];
        while(arr.length > 0) {
           let node = arr.shift();
           node.children.forEach(nd => arr.push(nd));
           fn(node);
        }
    };

    traverseDF(fn) {
        // let helper = (node) => {
        //     if(!node) {
        //         return;
        //     } else {
        //         fn(node);
        //         for(let nd of node.children) {
        //             helper(nd);
        //         }
        //     }
        // }
        // helper(this.root);
        const arr = [this.root];
        while(arr.length) {
            let node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    };
}

module.exports = { Tree, Node };
