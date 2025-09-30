// basic node implementation

class LLNode {
  value!: any;
  next!: LLNode | null;

  constructor(data: any) {
    this.value = data;
    this.next = null;
  }
}

interface ISingleList {
  push(data: number): void;
  pop(): void;
  pushToIndex(data: number, index: number): void;
  removeToIndex(index: number): number;
  getFromIndex(index: number): LLNode | null;
}

class SingleList implements ISingleList {
  head!: null | LLNode;
  tail!: null | LLNode;
  length: number = 0;

  push(data: number) {
    const newNode = new LLNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.incrementLength();
      return;
    }

    this.tail!.next = newNode;
    this.tail = newNode;
    this.incrementLength();
    return;
  }

  getNodesAsArray(): number[] {
    if (!this.length) return [];

    const nodeElements = Array<number>();

    let currentNode = this.head;
    for (let i = 1; i <= this.length; i++) {
      nodeElements.push(currentNode!.value);
      currentNode = currentNode!.next;
    }

    return nodeElements;
  }

  incrementLength(num: number = 1) {
    this.length = this.length + num;
    return this.length;
  }

  decrementLength(num: number = 1) {
    this.length = this.length - num;
    return this.length;
  }

  getFromIndex(index: number) {
    if (index > this.length || index < 1) {
      return null;
    }

    let currentNode = this.head; //1, 2, 3, 4
    for (let i = 1; i < index; i++) {
      currentNode = currentNode!.next; //
    }

    return currentNode;
  }

  unshift(data: number) {
    const newNode = new LLNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.incrementLength();
  }

  shift() {
    if (!this.length) return;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;

      this.decrementLength();
      return;
    }

    this.head = this.head!.next;

    this.decrementLength();
    return;
  }

  pop(): number {
    if (!this.length) {
      return -1;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.decrementLength();
      return 1;
    }

    this.tail = null;
    let currentNode = this.head;
    let secondLastNodeIndex = this.length - 1;

    for (let i = 1; i < this.length; i++) {
      if (i === secondLastNodeIndex) {
        this.tail = currentNode;
        currentNode!.next = null;
        break;
      }
      currentNode = currentNode!.next;
    }

    this.decrementLength();
    return 1;
  }

  pushToIndex(data: number, index: number) {
    if (index < 1 || index > this.length + 1) {
      return;
    }

    if (index === 1) {
      return this.unshift(data);
    }

    if (index === this.length + 1) {
      return this.push(data);
    }

    const newNode = new LLNode(data);

    let currentNode = this.head;

    for (let i = 1; i < this.length; i++) {
      if (i + 1 === index) {
        newNode.next = currentNode!.next;
        currentNode!.next = newNode;
        break;
      }

      currentNode = currentNode!.next; // iterate node with next;
    }

    this.incrementLength();
  }

  removeToIndex(index: number) {
    if (index < 1 || index > this.length) {
      return -1;
    } // 34, 45, 65, 70 => 34, 65, 70

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.decrementLength();
    }

    if (index === 1) {
      this.shift();
      return 1;
    }

    if (this.length === index) {
      return this.pop();
    }

    let indexPrevNode = this.head;

    for (let i = 1; i < index - 1; i++) {
      indexPrevNode = indexPrevNode!.next;
    }

    const removedNode = indexPrevNode!.next;
    indexPrevNode!.next = removedNode!.next;

    this.decrementLength();
    return 1;
  }
}

const singleList = new SingleList();
singleList.push(34); // 1
// console.log(singleList);

singleList.push(45); // 2
// console.log(singleList);

singleList.push(65); // 3

singleList.push(70); // 4
// console.log(singleList);

// console.log("push item in the beginning");
// singleList.unshift(12);

// singleList.pushToIndex(90, 5)
// console.log(singleList.getNodesAsArray())

// singleList.pop()
// console.log(singleList.getNodesAsArray())

singleList.removeToIndex(1);
console.log(singleList.getNodesAsArray());
