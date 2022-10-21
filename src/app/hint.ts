import { model, numberOperators, stringOperator, user } from './model/model';
export const init = (CodeMirror: any) => {
  CodeMirror.registerHelper('hint', 'anyword', function (CodeMirror: any) {
    const regex = /[\w$|{>,<,>=,<=,==,!=,.,\s}$]+/;
    const operatorsList = Object.values(numberOperators);
    const stringOperatorList = Object.values(stringOperator);
    const extraWords = Object.keys(user);
    const cur = CodeMirror.getCursor();
    const curLine: any = CodeMirror.getLine(cur.line);
    let end = cur.ch,
      start = end;
    while (start && regex.test(curLine.charAt(start - 1))) --start;
    const curWord = start != end && curLine.slice(start, end);
    const content = curLine.split(' ');
    let list: any = [];
    if (curLine === '') {
      list = extraWords;
    } else if (
      curWord &&
      curLine &&
      curLine[end - 1] === ' ' &&
      !stringOperatorList.includes(content[content.length - 2]) &&
      !operatorsList.includes(content[content.length - 2])
    ) {
      if (typeof user[content[content.length - 2]] === 'string') {
        list = stringOperatorList;
      } else {
        list = operatorsList;
      }
      return {
        list: list,
        from: { ch: end, line: cur.line },
      };
    } else if (curWord && curLine[end - 1] === '.') {
      list = Object.keys(user[curWord.slice(0, -1)]);
      return {
        list: list,
        from: { ch: end, line: cur.line },
      };
    } else if (curWord) {
      if (curLine[end - 1] === ' ') {
        list = extraWords;
      } else {
        list = extraWords.filter((el) => el.startsWith(curLine[end - 1] || ''));
      }
      return {
        list: list,
        from: { ch: end, line: cur.line },
      };
    }
    return {
      list: list,
      from: { ch: start, line: cur.line },
      to: { ch: end, line: cur.line },
    };
  });
};
export default init;

//   var cur = CodeMirror.getCursor();
//   var word = /[\w$]+/;
//   var range = 500;
//   var extraWords = ['user','users','salim','salmmm'];
//   var cur = CodeMirror.getCursor(), curLine = CodeMirror.getLine(cur.line);
//   var end = cur.ch, start = end;
//   while (start && word.test(curLine.charAt(start - 1))) --start;
//   var curWord = start != end && curLine.slice(start, end);

//   var list:any = []
//   list.push(...(extraWords.filter(el => el.startsWith(curWord || ''))))
//   var optio = {
//     hint: function() {
//       return {
//         from: CodeMirror.getDoc().getCursor(),
//           to: CodeMirror.getDoc().getCursor(),
//         list: list
//       }
//     }
//   };
//   CodeMirror.showHint(optio);
