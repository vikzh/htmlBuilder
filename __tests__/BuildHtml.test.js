import {parse, render} from '../src';

describe('HtmlBuilder', () => {
  it('#Parse to AST', () => {
    const data = ['html', [
      ['meta', {id: 'uniq-key'}, [
        ['title', 'hello, world!'],
      ]],
      ['body', [
        ['br'],
      ]],
    ]];

    const expectedAst = {
      name: 'html',
      attributes: {},
      body: '',
      children: [
        {
          name: 'meta',
          attributes: {id: 'uniq-key'},
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
          attributes: {id: 'uniq-key'},
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
