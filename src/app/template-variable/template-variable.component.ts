import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
  selector: 'ms-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent implements OnInit {
  kod2: Observable<string>;
  tablica = ['ala', 'ola', 'ela', 'ula'];

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.kod2 = this.dajPrint().do(code => {
      setTimeout(_ => {
        window['prettyPrint']();
        console.log('po pretty', document.getElementsByTagName('pre')[0].innerHTML);
      });
    });
  }

  ś;

  daj(ff) {
    console.log(ff);
    return '1';
  }

  dajPrint() {
    return this.http.get(`https://raw.githubusercontent.com/marekszczepansky/angular2-cli-bootstrap-seed/master/src/app/app.component.ts`)
      .map(response => response.text());
  }

}
