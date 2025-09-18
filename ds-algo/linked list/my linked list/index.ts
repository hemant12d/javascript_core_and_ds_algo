// Linked List 
// Head, tail

// ( [val, add-1], [val, add-2], [val, add-3], [val, add-4], [val, null] )

// let first = new Node(56);
// first.next = new Node(45);
// first.next.next = new Node(57);
// first.next.next.next = new Node(57);
// first.next.next.next.next = new Node(77);
// console.log(first.next.next.next.next)


export {}
interface LinkedListType {
    list: Array<[number, string]>
    listLen:() => number
    push: (newNode: number) => void
    getList: () => void
    pushToIndex: (val: number, index: number, address?: string)=>void
    removeFromIndex: (index: number) => any
    getListValues: ()=> Array<number> | void
}

const genRanHex = (size): string => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
const lengthOfAddress: number = 8;


class linkedList {
    list: Array<any> = []; 
    listLen = ()=> this.list.length;
    // constructor(val){    }

    // Add item to the end of list
    push(newNodeValue): void{

        // Insert first list
        if(this.listLen() === 0){
            this.list[0] = [newNodeValue, null];
            return;
        }

        // * Add address of new node to last element of the list
        this.list[this.listLen()-1][1] = genRanHex(lengthOfAddress); // address for new elem

        // * Added the items to last in the list
        this.list.push([newNodeValue, null]);    
    }
 
    getList = ():void =>console.log(this.list);
    
    pushToIndex = (val, index, address = genRanHex(lengthOfAddress)) =>{

        if(index > this.listLen()){
            console.log("You can only push at the end or inside linked list");
            return;
        }

        // TODO Add node to first position 
        if(index === 0){
            // ! Generating address for first node if list already contains node, else assign null address to node

            let first_Element_Address = this.listLen() ? genRanHex(lengthOfAddress) : null;

            // Insert at starting & pointing address of first 
            this.list.unshift([val, first_Element_Address]);

            console.log("+ Node Added, starting ", this.list[0]);
            return;
        }

        // TODO Added node to last
        if(index === this.listLen()){
            // * Handle address when there is only no item in index

            // Create address for last
            const lastElementAddress = genRanHex(lengthOfAddress);

            // Second last pointing to last node's address
            this.list[this.listLen()-1][1] = lastElementAddress;

            // Added element to last
            this.list.push([val, null]);
            console.log("+ Node Added, end ", [val, null]);
            return;
        }

        // TODO Add to middle

        // Get the address of future next element, this address will be pointed by new Node
        const future_Next_Element_Address = this.list[index-1][1];

        // Previous storing address of new node
        this.list[index-1][1] = address;

        // Add value of new node to index & new node pointing to next element
        this.list.splice(index, 0, [val, future_Next_Element_Address]); // Yes, splice can insert value to array
    }

    removeFromIndex = (index): any =>{
        if(this.listLen() === 0) return;

        // TODO Remove first element 
        if(index === 0) return this.list.splice(0, 1);

        // Remove from last
        if(index === this.listLen() - 1){
            // Remove last element
            this.list.splice((this.listLen()-1), 1);
            this.list[this.listLen() - 1][1] = null;
            return; 
        }

        // TODO Remove from middle
        const address_Of_Element_That_Delete_Element_Pointing = this.list[index][1];

        // Delete Previous element pointing to delete next element
        this.list[index-1][1] = address_Of_Element_That_Delete_Element_Pointing

        // Remove element from middle
        this.list.splice(index, 1);

        return;
    }

    // TODO Get the all node values
    getListValues = (): Array<number> | void => this.list.map(val => val[0]); 
}



// Create first node
const newNode: LinkedListType = new linkedList();
newNode.push(45);
newNode.getList();

// Second Node
newNode.push(55);
newNode.getList();

// Third Node
newNode.push(45);
newNode.getList();

// Fourth Node
newNode.push(29);
newNode.getList();

// Fifth Node
newNode.push(87);
newNode.getList();

// Push item to the middle of index
newNode.pushToIndex(23, 1);
newNode.getList();

// Adding items at the starting
newNode.pushToIndex(12, 0);
newNode.getList(); 

newNode.pushToIndex(34, 0);
newNode.getList(); 

// newNode.removeFromIndex(0);
// newNode.getList(); 

newNode.removeFromIndex(4); 
newNode.getList(); 

newNode.removeFromIndex(6);
newNode.getList(); 

newNode.removeFromIndex(0);
newNode.getList(); 

console.log(newNode.listLen());
console.log(newNode.getListValues());