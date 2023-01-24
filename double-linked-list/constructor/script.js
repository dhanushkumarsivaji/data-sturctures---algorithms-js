class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
}

let myDoubleLinkedList = new DoubleLinkedList(7);
myDoubleLinkedList