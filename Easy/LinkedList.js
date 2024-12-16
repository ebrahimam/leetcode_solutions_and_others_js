// LikedList

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
        this.head = node;
    }
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
        this.size++;
    }

  }
  insertAt(element,index){
    if(index<0 || index>this.size) {
        return console.log("Please enter a valid index.")
    }else { 
        let node = new Node(element);
        let curr,prev;

        curr =this.head;
    }
    if(index ==0){
        node.next = this.head;
        this.head =node 
    }els
  }
}
