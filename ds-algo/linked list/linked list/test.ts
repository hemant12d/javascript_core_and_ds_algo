class BNode {
  value!: number;
  next!: null | BNode;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

interface IList {
  push(data: number): void;
}

class List implements IList {
  head!: BNode | null;
  tail!: BNode | null;
  length: number = 0;

  push(value: number): void {
    const node = new BNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    }

    this.tail!.next = node;
    this.tail = node;
    this.length++;
  }

  traverseList(): number[] {
    const arr: number[] = new Array(this.length);
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value);
      currentNode = this.head.next;
    }

    return arr;
  }
}

const list = new List();
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);

console.log(list.traverseList());
