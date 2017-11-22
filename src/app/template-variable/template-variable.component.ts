import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'ms-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent implements OnInit {
  tablica = ['ala', 'ola', 'ela', 'ula'];

  ngOnInit() {
  }
}
