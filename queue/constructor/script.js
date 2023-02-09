class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value){
        let newNode = new Node(value)
        this.start = newNode
        this.end = newNode
    }
}

let myQueue = new Queue()
myQueue