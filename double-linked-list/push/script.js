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

    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
}

let myDoubleLinkedList = new DoubleLinkedList(7);
myDoubleLinkedList.push(2)