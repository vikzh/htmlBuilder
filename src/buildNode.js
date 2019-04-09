import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagsList = new Set(['hr', 'br', 'img']);
const buildNode = (name, ...args) => {
  const Tag = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new Tag(name, ...args);
};

export default buildNode;
