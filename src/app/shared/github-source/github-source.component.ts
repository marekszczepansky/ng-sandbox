import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ms-github-source',
  templateUrl: './github-source.component.html',
  styleUrls: ['./github-source.component.scss']
})
export class GithubSourceComponent implements OnInit {

  @Input()
  filename: string;

  @Input()
  startLine: number;

  @Input()
  endLine: number;

  @Input()
  langExtension = '';

  sourceBody: Observable<string>;

  constructor(private http: Http) {
  }

  ngOnInit() {
    if (!this.langExtension) {
      this.langExtension = this.filename.split('.').pop();
    }
    this.sourceBody = this.loadGihubFile().do(code => {
      if (window['prettyPrint']) {
        setTimeout(_ => {
          window['prettyPrint']();
        });
      }
    });
  }

  loadGihubFile() {
    return this.http.get(`https://raw.githubusercontent.com/marekszczepansky/${this.filename}`)
      .map(response => response.text())
      .map(source => {
        return source.split('\n').slice(this.startLine || 0, this.endLine || Number.MAX_SAFE_INTEGER).join('\n');
      });
  }

}
