// A Binary Tree Data Structure is a hierarchical data structure in which each node has at most two children, referred to as the left child and the right child. It is commonly used in computer science for efficient storage and retrieval of data, with various operations such as insertion, deletion, and traversal.

class BTreeNode {
  value!: number;
  leftNode!: BTreeNode | null;
  rightNode!: BTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinaryTree {
  root: BTreeNode | null;

  constructor() {
    this.root = null;
  }

  setRoot(value: number): BTreeNode | null {
    this.root = new BTreeNode(value);
    return this.root;
  }

  getRoot(): BTreeNode | null {
    return this.root;
  }

  insert(value: number) {
    if (!this.getRoot()) {
      return this.setRoot(value);
    }

    return this.setInsert(value, this.root!);
  }

  private setInsert(value: number, currentNode: BTreeNode): null | BTreeNode {
    const node = new BTreeNode(value);

    if (value < currentNode.value) {
      if (!currentNode.leftNode) currentNode.leftNode = node;
      return this.setInsert(value, currentNode.leftNode);
    }

    if (value > currentNode.value) {
      if (!currentNode.rightNode) currentNode.rightNode = node;
      return this.setInsert(value, currentNode.rightNode);
    }

    return currentNode;
  }

  find(value: number): number {
    if (!this.getRoot()) return 0;

    return this.search(value, this.root);
  }

  private search(value: number, currentNode: BTreeNode | null): number {
    if (!currentNode) return 0;

    if (value === currentNode!.value) return 1;

    // go to left
    if (value < currentNode!.value) {
      return this.search(value, currentNode!.leftNode);
    }

    // go to right
    if (value > currentNode!.value) {
      return this.search(value, currentNode!.rightNode);
    }

    return 0;
  }

  getBFS(): number[] {
    const queue = [];
    const data: number[] = [];

    if (!this.getRoot()) return data;

    queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      data.push(node!.value);

      if (node!.leftNode) queue.push(node!.leftNode);
      if (node!.rightNode) queue.push(node!.rightNode);
    }

    return data;
  }

  getDFSWithPreOrder(): number[] {
    const data: number[] = [];

    function traverseNode(node: BTreeNode | null) {
      if (!node) {
        return;
      }

      data.push(node.value);

      if (node.leftNode) {
        traverseNode(node.leftNode); // 40
      }

      if (node.rightNode) {
        traverseNode(node.rightNode); // 60
      }
    }

    traverseNode(this.root);

    return data;
  }

  getDFSWithPostOrder(): number[] {
    const data: number[] = [];

    function traverseNode(node: BTreeNode | null) {
      if (!node) {
        return;
      }
      if (node.leftNode) {
        traverseNode(node.leftNode); // 40
      }

      if (node.rightNode) {
        traverseNode(node.rightNode); // 60
      }

      data.push(node.value);
    }

    traverseNode(this.root);

    return data;
  }

  getDFSWithInOrder(): number[] {
    const data: number[] = [];

    function traverseNode(node: BTreeNode | null) {
      if (!node) {
        return;
      }
      if (node.leftNode) {
        traverseNode(node.leftNode); // 40
      }

      data.push(node.value);

      if (node.rightNode) {
        traverseNode(node.rightNode); // 60
      }
    }

    traverseNode(this.root);

    return data;
  }
  remove() {}
}

const tree = new BinaryTree();
tree.setRoot(50);
tree.insert(40);
tree.insert(60);
tree.insert(41);
tree.insert(35);
tree.insert(65);
tree.insert(58);

// tree.root!.leftNode = new BTreeNode(45);
// tree.root!.rightNode = new BTreeNode(55);

// tree.root!.leftNode!.leftNode = new BTreeNode(40);
// console.log(tree)

// tree.insert(38);
// console.log(tree);

// tree.insert(41);
// console.log(tree);

// tree.insert(44);
console.log(tree);
// console.log(tree.getBFS())
console.log("pre order: ", tree.getDFSWithPreOrder());
console.log("post order: ", tree.getDFSWithPostOrder());
console.log("in order: ", tree.getDFSWithInOrder());
