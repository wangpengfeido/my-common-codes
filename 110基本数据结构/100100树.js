

class Node {
  constructor({content, children = []}) {
    this.content = content;
    this.children = children;
  }


  addChild(child) {
    this.children.push(child);
  }
}