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

}
