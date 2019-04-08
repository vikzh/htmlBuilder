import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name, ...args) => {
  const Tag = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new Tag(name, ...args);
};
