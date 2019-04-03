import { parse, render } from '../src';
import PairedTag from '../src/PairedTag';
import SingleTag from '../src/SingleTag';


describe('HtmlBuilder', () => {
  it('#Parse to AST', () => {
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

    const expectedAst = new PairedTag('html', {}, '', [
      new PairedTag('head', {}, '', [
        new PairedTag('title', {}, 'hello, world!'),
      ]),
      new PairedTag('body', {}, '', [
        new PairedTag('h1', { class: 'header' }, 'html builder example'),
        new PairedTag('div', {}, '', [
          new PairedTag('span', {}, 'span text'),
          new SingleTag('hr'),
        ]),
      ]),
    ]);
    const ast = parse(data);
    expect(ast).toEqual(expectedAst);
  });

  it('#Ast to string', () => {
    const ast = {
      name: 'html',
      attributes: {},
      body: '',
      children: [
        {
          name: 'meta',
          attributes: { id: 'uniq-key' },
          body: '',
          children: [
            {
              name: 'title', attributes: {}, body: 'hello, world!', children: [],
            },
          ],
        },
        {
          name: 'body',
          attributes: {},
          body: '',
          children: [
            {
              name: 'br', attributes: {}, body: '', children: [],
            },
          ],
        },
      ],
    };
    const expectedString = '<html><meta id="uniq-key"><title>hello, world!</title></meta><body><br></body></html>';
    expect(render(ast)).toEqual(expectedString);
  });
});
