class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head){ //if the LL is empty
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head){ // LL is empty
            return undefined
        }
        let pre = this.head
        let temp = this.head
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){ // LL has one value
            this.head = null
            this.tail = null
        }
        return temp
    }
}

let myLinkedList = new LinkedList(4);
myLinkedList.push(7)
myLinkedList.pop()
myLinkedList.pop()
myLinkedList.push(8)