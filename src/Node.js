class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) => `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}

export default Node;
