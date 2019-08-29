// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = this.right = null;
    }
    insert(data) {
        // let newNode = new Node(data);
        // let helper = (node) => {
        //     if (node.data > data) {
        //         if(node.left === null) {
        //             node.left = newNode;
        //             return;
        //         } else {
        //             helper(node.left);
        //         }
        //     } else {
        //         if(node.right === null) {
        //             node.right = newNode;
        //             return;
        //         } else {
        //             helper(node.right);
        //         }
        //     }
        // }
        // helper(this);


        // if(data < this.data) {
        //     if(this.left === null) {
        //         this.left = new Node(data);
        //     } else {
        //         this.left.insert(data);
        //     }
        // } else {
        //     if(this.right === null) {
        //         this.right = new Node(data);
        //     } else {
        //         this.right.insert(data);
        //     }
        // }

        if(data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else {
            this.right = new Node(data);
        }
    };

    contains(data) {
        // let result = null;
        // let helper = (node) => {
        //     if(node.data === data) {
        //         result = node;
        //         return
        //     }
        //     if (node.data > data) {
        //         if(node.left === null) {
        //             return;
        //         } else {
        //             helper(node.left);
        //         }
        //     } else {
        //         if(node.right === null) {
        //             return;
        //         } else {
        //             helper(node.right);
        //         }
        //     }
        // };
        // helper(this);
        // return result;

        if(this.data === data) {
            return this;
        } else if (data < this.data) {
            if(this.left !== null) {
                return this.left.contains(data);
            } else {
                return null;
            }
        } else {
            if(this.right !== null) {
                return this.right.contains(data);
            } else {
                return null;
            }
        }

        // let currNode = this;
        // while(currNode) {
        //     if(currNode.data === data) {
        //         return currNode;
        //     } else if (currNode.data > data) {
        //         currNode = currNode.left;
        //     } else {
        //         currNode = currNode.right;
        //     }
        // };
        // return null;
    }
}

module.exports = Node;
