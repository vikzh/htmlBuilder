import Node from './Node';

class SingleTag extends Node {
  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}

export default SingleTag;
