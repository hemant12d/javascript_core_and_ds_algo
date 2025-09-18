// Important instruction

// Run typescript directely
// ts-node index.ts 

// Generate Javascript file and run
// tsc index.ts

// Generate typescript and run generated javascript file
// tsc index.ts | node index.js


// Basic node
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// 

// Create linked list
// let list: any = new Node("Hello");
// list.tail = new Node("I'm");
// list.tail.tail = new Node("Backend");
// list.tail.tail.tail = new Node("Developer");

// console.log("Linked List", list);
// console.log("Linked List node", list.tail.tail.tail);


// Create linked list in more better way

class singlyLinkedListClass {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Push
    push(value){
        // if list is empty
        const newNode = new Node(value);
        if(!this.head){
            // Initially head and tail points to the same node ( reference )
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Understanding of list
    // list = {
    //     head: {
    //         value: 45,
    //         next: {
    //             value: "whatever",
    //             next:  {
    //                 value: "oneMoreNewValue",
    //                 next: null
    //             }
    //         }
    //     }, //=> newNode,
    //     tail: {value: "oneMoreNewValue", next: null}
    // }

    // newValue = {value: "secondNewValue", next: null}

    pop(){
        if(!this.head) return undefined;
        let pre=this.head, last,
        current = this.head,
        nextNode = null;

        while(current){
            last = current;
            nextNode = current.next;
            current = nextNode;

            // Pre ( second last )
            if(nextNode && !nextNode.next){
                pre = last;
            }
        }      
        pre.next = null; // set pre ( second last ) to null
        this.tail = pre; // set pre to last tail
        this.length--;
        if(!this.length){
            this.head = null;
            this.tail = null;
        }
        return last; // return the last node
        
        // return {last: last, pre: pre}; // return the last item
    }
    //  H                                     T 
    // {23} -> {34} -> {45} -> {65} -> {} -> { }

    // Length = 1 -> 2 -> 3 -> 4 -> 5 -> 6

    // get linked list
    get = () => this;
    
    traverseValues(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }

    // shift => remove form the beginning ()
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        let newHead = currentHead.next;
        this.head = newHead;
        this.length--;
        if(!this.length){
            this.tail = null;
        }
        return currentHead;
    }

    // unShift => Add to beginning ()
    unShift(value){
        if(!this.head) return this.push(value);
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // {H} -> {23} -> {34} -> {45} -> {65} -> {} -> { }
    }

    addToIndex(value, index){

        // Index is greater than node element
        if(index < 0 || index > (this.length)) return false;
        
        // If adding in the end
        if(this.length === index){
            this.push(value);
            return true;
        }

        // If Adding node in the begining
        if(index === 0){
            this.unShift(value);
            return true;
        }

        const newNode = new Node(value);

        // Find element of index
        let counter = 0,
        current = this.head,
        pre = this.head;
        while(index > counter){
            pre = current;
            current = current.next;
            counter++;
        }

        newNode.next = current;
        pre.next = newNode;
        list.length++;
        return true;
        // return newNode;
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.length) return false;

        let removePre=this.head, current=this.head, removePost=this.head, removeNode;
        // Remove logic

        // Remove from start
        if(index === 0){
            let newHead = this.head;
            this.head = newHead.next;
            if(this.length === 1){
                this.tail = null;
            }
            this.length--;
            return true;
        }

        // Remove from end
        if(index === (this.length - 1)){
            this.pop();
            return true;
        }
        
        // Get removePre, removePost and current
        let counter = 0; // indicates that, which elem is pointed by current
        while(counter < index){
            removePre = current;
            current = current.next;
            removePost = current.next;
            counter++;
            if(!removePost.next){
                break;
            }
        }

        // Remove logic
        removePre.next = removePost;
        list.length--;
        return current;
    }

    reverse(){
        if(!this.head) return undefined;
        let current = this.head,
        prev = null,
        next = null;

        // reverse logic
        while (current != null) {
            next = current.next; // null
            current.next = prev; // null
            prev = current; // 65
            current = next; // null
        }
        this.head = prev;
        return this; // this points to current object
    }   

    reverseFromMyMethod(){
        let tail = this.tail;
        let length = this.length - 2; // 2
        let tailPre = null;

        // Creating a new list
        let newList = new singlyLinkedListClass();
        newList.push(tail.value);
        while(length > -1){
            tailPre = this.getFromIndex(length);
            newList.push(tailPre.value);
            length--; // decrement the length
        }
        return newList;
    }
    
    //  {45} -> {65} -> {89} -> {56} => 4 => (3, 2, 1, 0)
        // -> null 
    getFromIndex(index){
        if(index < 0 || index >= this.length) return undefined;
        let counter = 0, current = this.head;
        while(index > counter){
            current = current.next;
            counter++;
        }
        return current;
    }

    updateToIndex(value, index){
        let foundNode = this.getFromIndex(index);
        if(foundNode){
            foundNode.value = value;
            return true;
        }
        return false;
    }

    //  H                                               T 
    // {46} -> {23} -> {34} -> {45} -> {65} -> {89} -> {56}
    // static incrementLength(){
    //     this.length++;
    // }
}
                //  H                       T
// current list => {45} -> {65} -> {89} -> {56}

// reverse list => {56} -> {89} -> {65} -> {45}

let list = new singlyLinkedListClass();
// console.log(singlyLinkedList)
// console.log(singlyLinkedList.push(56))
// console.log(singlyLinkedList.push(23))
// console.log(singlyLinkedList.push(13))
// console.log(singlyLinkedList.getList())

// Stuck point
    // How to preserve the last node when inserting a new node

// # Add to index method flow
// funcation should accept value ( Done )
// Basic validation ( D )
// Find index ( D )
// Create replace logic ( D ) ( That's where you stuck )
// return removed element ( D )

// # Get from index
// Funcation should accept index
// validation 
// logic 
// return item
// optimized

// # Remove from index
// function should accept index
// validation
// remove logic
// return element
// Optimized & refector

// Not the department
// -> RE ( ...flow_making )
// Ask them, let me analyze -> Analyze -> Except/Reject -> R&D -> If possible say except -> Say No


// Reverse list
    // -> Middle divide approach ( Will change current list ) ( Do for now )
    // -> New list approach ( will create new list ) ( Done, it's possible 😎)

    // # What you decide
    // Follow the instruction 
    //      V/S 
    // # What you did
    // Follow the instruction
    // Copy the solution
    // Using dumb mind, in understanding the solution and didn't get it
    // Try anther method, of return reverse copy and it worked

    // Took steps to make it more easy
    // -> Understanding of making previous, current and next can help
    // -> Get an array, find pre, current and next for any particular index

