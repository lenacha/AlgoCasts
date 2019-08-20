// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(val, next){
        this.data = val;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    };

    insertFirst(val){
        let node = new Node(val, this.head);
        this.head = node;
    };

    size(){
        let count = 0;
        let helper = (node) => {
            if(node === null) {
                return;
            } else {
                count++;
                helper(node.next);
            }
        }
        helper(this.head);
        return count;
    };

    getFirst(){
        return this.head;
    };

    getLast(){
        let last = null;
        let helper = (node) => {
            if(node === null){
                return;
            } else {
                if(node.next === null) {
                    last = node;
                    helper(node.next);
                } else {
                    helper(node.next);
                }
            }
        };
        helper(this.head);
        return last;
    };

    clear(){
        this.head = null;
    };

    removeFirst() {
        let next = this.head.next;
        this.head = next;
    };

    removeLast() {
        let helper = (node) => {
            if(node === null) {
                return;
            } else if (node.next === null && node === this.head) {
                this.head = null;
                return; 
            } else if (node.next.next === null){
                node.next = null;
                return;
            } else {
                helper(node.next);
            }
        };
        helper(this.head);
    };

    insertLast(val){
        let helper = (node) => {
            if(this.head === null) {
                this.head = new Node(val, null);
                return;
            } else if (node.next === null) {
                node.next = new Node(val, null);
                return;
            } else {
                helper(node.next);
            }
        }
        helper(this.head)
    };

    getAt(num){
        let count = 1;
        let node = this.head;
        while(count <= num) {
            if(node !== null) {
                node = node.next;
            } else {
                node = null;
            }
            count++
        }
        return node;
    }

    removeAt(num) {
        let count = 0;
        let prevNode = null;
        let currNode = this.head;
        if(this.head === null) {
            return;
        }

        if(num === 0) {
            this.head = this.head.next;
            return;
        }        

        while(count < num) {
            if(currNode.next === null){
                return;
            } else {
                prevNode = currNode;
                currNode = currNode.next;
                count++
            }
        };
        prevNode.next = currNode.next;
    };

    insertAt(val, num){
        if(num === 0) {
            this.head = new Node(val, this.head);
            return;
        }
        let currNode = this.head;
        let counter = 0;
        while(currNode.data) {
            if(currNode.next === null) {
                currNode.next = new Node(val, null);
                return;
            } else if (counter === num -1){
                let newNode = new Node(val, currNode.next);
                currNode.next = newNode;
                break;
            } else {
                currNode = currNode.next;
            }
            counter++;
        }    
    };
    forEach(func){
        if(this.head === null) {
            return;
        }
        let currNode = this.head;
        while(currNode){
            func(currNode);
            currNode = currNode.next;
        }
    };

}

module.exports = { Node, LinkedList };
