import { parse, render } from '../src';
import buildNode from '../src/buildNode';


describe('HtmlBuilder', () => {
  const data = ['html', [
    ['head', [
      ['title', 'hello, world!'],
    ]],
    ['body', [
      ['h1', { class: 'header' }, 'html builder example'],
      ['div', [
        ['span', 'span text'],
        ['hr'],
      ]],
    ]],
  ]];

  it('#parse', () => {
    const ast = parse(data);
    const result = buildNode('html', {}, '', [
      buildNode('head', {}, '', [
        buildNode('title', {}, 'hello, world!'),
      ]),
      buildNode('body', {}, '', [
        buildNode('h1', { class: 'header' }, 'html builder example'),
        buildNode('div', {}, '', [
          buildNode('span', {}, 'span text'),
          buildNode('hr'),
        ]),
      ]),
    ]);

    expect(result).toEqual(ast);
  });

  it('#render', () => {
    const ast = parse(data);
    const result = render(ast);

    expect(result).toBe('<html><head><title>hello, world!</title></head><body><h1 class="header">html builder example</h1><div><span>span text</span><hr></div></body></html>');
  });
});
