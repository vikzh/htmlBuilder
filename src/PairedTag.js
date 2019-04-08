import Node from './Node';

class PairedTag extends Node {
  constructor(name, attributes, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0
      ? this.children.join('') : this.body;
    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }
}

export default PairedTag;
