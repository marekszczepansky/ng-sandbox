import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ms-local-source-assets',
  templateUrl: './local-source-assets.component.html',
  styleUrls: ['./local-source-assets.component.scss']
})
export class LocalSourceAssetsComponent implements OnInit {
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
    this.sourceBody = this.loadAssetsFile().do(code => {
      if (window['prettyPrint']) {
        setTimeout(_ => {
          window['prettyPrint']();
        });
      }
    });
  }

  loadAssetsFile() {
    return this.http.get(`assets/src/${this.filename}`)
      .map(response => response.text())
      .map(source => {
        return source.split('\n').slice(this.startLine || 0, this.endLine || Number.MAX_SAFE_INTEGER).join('\n');
      });
  }

}
