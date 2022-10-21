declare var CodeMirror: any;
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'codemirror/mode/clike/clike';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/spreadsheet/spreadsheet';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/display/placeholder';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/selection/mark-selection';
import 'codemirror/addon/selection/selection-pointer';
import 'codemirror/addon/search/match-highlighter';
import 'codemirror/addon/lint/lint';
import { EditorFromTextArea } from 'codemirror';
import init from './hint';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'regular-expression';
  codeMirrorOptions: any = {
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { 'Ctrl-Space': 'autocomplete' },
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true,
  };
  query: any = '';
  _codeMirror: any;

  @ViewChild('ref') ref!: ElementRef<HTMLTextAreaElement>;
  private _options: any;
  codeMirror?: EditorFromTextArea;
  ngAfterViewInit() {
    // to create code mirror from ts
    this._codeMirror =
      typeof CodeMirror !== 'undefined' ? CodeMirror : require('codemirror');
    this._options = {
      mode: 'anyword',
      extraKeys: {
        'Ctrl-Space': 'autocomplete',
      },
      gutters: ['CodeMirror-lint-markers'],
      lineNumbers: true,
    };
    // initialize code mirror
    this.codeMirror = this._codeMirror.fromTextArea(
      this.ref.nativeElement,
      this._options
    ) as EditorFromTextArea;
    // display the autocomplite with ctrl+space (init the combox)
    init(this._codeMirror);
  }

  setEditorContent(event: any) {
    console.log(event);
  }

  // linting(CodeMirror :any, matchKeyword :any, logExceptions?:any) {
  //   CodeMirror.registerHelper('lint', 'javascript', function (text:any) {

  //     var found :any = [];
  //     text = "b"
  //       const lines = text.split('\n');
  //       lines.forEach((line:any, index:any) => {
  //         let wordsInBrackets = line.match(/\[.*?\]/g);
  //         var word = /[\w$]+/;
  //         var range = 500;
  //         var extraWords = ['bozo','cozo','dozo','toto'];
  //         wordsInBrackets = wordsInBrackets ? wordsInBrackets : [];
  //         let lineWithoutFieldsAndQuotes = line.replaceAll(/(\".*?\"|\'.*?\'|\[.*?\])/g, '');
  //         let otherWords = lineWithoutFieldsAndQuotes.split(/[\s,%\-\^;\+*<=>\/\(\)]+/g);
  //         otherWords = [...otherWords, ...wordsInBrackets];
  //         otherWords &&
  //           otherWords
  //             .forEach((item:any) => {
  //               const startPos = line.indexOf(item);
  //               const endPos = startPos + item.length;
  //               found.push(...(extraWords.filter(el => el.startsWith(text || ''))))
  //               var a = CodeMirror.Pos(index, startPos)
  //               var b = CodeMirror.Pos(index, endPos)
  //              return {
  //                 list:found,
  //                 from: CodeMirror.Pos(index, startPos),
  //                 to: CodeMirror.Pos(index, endPos),
  //               };
  //             });

  //       });
  // //           var orig = CodeMirror.hint.javascript;
  // //        CodeMirror.hint.javascript = function(cm:any) {
  // // var inner = orig(cm) || {from: cm.getCursor(), to: cm.getCursor(), list: []};
  // // inner.list.push("bozo");
  // // inner.list.push("salim");
  // // inner.list.forEach((el : any)  => {
  // //   if(el.indexOf(text)===-1){
  // //     const index = inner.list.indexOf(el);
  // //     inner.list.splice(index)
  // //   }
  // // });
  // // return inner;
  // //        }})

  //   // CodeMirror.registerHelper("lint", "javascript", function(CodeMirror :any, options:any) {
  //   //   var word = options && options.word || ['salim','hafsi'];
  //   //   var range = options && options.range || 500;
  //   //   var cur = CodeMirror.getCursor(), curLine = CodeMirror.getLine(cur.line);
  //   //   var end = cur.ch, start = end;
  //   //   while (start && word.test(curLine.charAt(start - 1))) --start;
  //   //   var curWord = start != end && curLine.slice(start, end);

  //   //   var list = options && options.list || [], seen = {};
  //   //   var re = new RegExp(word.source, "g");
  //   //   for (var dir = -1; dir <= 1; dir += 2) {
  //   //     var line = cur.line, endLine = Math.min(Math.max(line + dir * range, CodeMirror.firstLine()), CodeMirror.lastLine()) + dir;
  //   //     for (; line != endLine; line += dir) {
  //   //       var text = CodeMirror.getLine(line), m;
  //   //       while (m = re.exec(text)) {
  //   //         if (line == cur.line && m[0] === curWord) continue;
  //   //         if ((!curWord || m[0].lastIndexOf(curWord, 0) == 0) && !Object.prototype.hasOwnProperty.call(seen, m[0])) {
  //   //           //seen[m[0]] = true ;
  //   //           list.push(m[0]);
  //   //         }
  //   //       }
  //   //     }
  //   //   }
  //   //   return {list: list, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)};
  //  });
  // }
}
