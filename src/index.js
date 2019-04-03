import { identity } from 'lodash';

const singleTagsList = new Set(['hr', 'img', 'br']);

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (args, f) => args.map(f),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: identity,
  },
];

const parse = (data) => {
  const [first, ...rest] = data;
  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  return rest.reduce((acc, arg) => {
    const { name, process } = propertyActions.find(({ check }) => check(arg));
    return { ...acc, [name]: process(arg, parse) };
  }, root);
};

const render = (data) => {
  const {
    name,
    attributes,
    body,
    children,
  } = data;

  const attrsLine = Object.keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`).join('');
  const content = children.length > 0 ? children.map(render).join('') : body;

  if (singleTagsList.has(name)) {
    return `<${name}${attrsLine}>`;
  }

  return `<${name}${attrsLine}>${content}</${name}>`;
};

export { parse, render };
