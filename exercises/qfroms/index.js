// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    add (val) {
        this.stack1.push(val);
    };
    remove () {
        while(this.stack1.data.length > 1) {
            let val = this.stack1.pop()
            this.stack2.push(val);
        }
        let result = this.stack1.pop();
        while(this.stack2.data.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        return result;
    };

    peek() {
        return this.stack1.data[0]
    }
}

module.exports = Queue;
