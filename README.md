[![Maintainability](https://api.codeclimate.com/v1/badges/26d13d69dd71a952a3bf/maintainability)](https://codeclimate.com/github/vikzh/htmlBuilder/maintainability)
# Html Builder
* AST
* DSL

## Using
````js
import { parse, redner };

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

//intermediate data
const ast = parse(data);
// {
//   "name":"html",
//   "attributes":{
//
// },
//   "body":"",
//   "children":[
//   {
//     "name":"head",
//     "attributes":{
//
//     },
//     "body":"",
//     "children":[
//       {
//         "name":"title",
//         "attributes":{
//
//         },
//         "body":"hello, world!",
//         "children":[
//
//         ]
//       }
//     ]
//   },
//   {
//     "name":"body",
//     "attributes":{
//
//     },
//     "body":"",
//     "children":[
//       {
//         "name":"h1",
//         "attributes":{
//           "class":"header"
//         },
//         "body":"html builder example",
//         "children":[
//
//         ]
//       },
//       {
//         "name":"div",
//         "attributes":{
//
//         },
//         "body":"",
//         "children":[
//           {
//             "name":"span",
//             "attributes":{
//
//             },
//             "body":"span text",
//             "children":[
//
//             ]
//           },
//           {
//             "name":"hr",
//             "attributes":{
//
//             }
//           }
//         ]
//       }
//     ]
//   }
// ]
// }

const renderedData = render(ast);
//<html>
//
//<head>
//    <title>hello, world!</title>
//</head>
//
//<body>
//    <h1 class="header">html builder example</h1>
//    <div><span>span text</span>
//        <hr>
//    </div>
//</body>
//
//</html>
````
