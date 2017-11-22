import {Component} from '@angular/core';

@Component({
  selector: 'ms-root',
  template: `
    <div class="row">
      <div class="col-1 bg-light">
        <nav class="nav flex-column">
          <a class="nav-link active" routerLink="sandbox1">comp1</a>
          <a class="nav-link" routerLink="templVar">templVar</a>
          <a class="nav-link" routerLink="checkbox2">Checkbox array</a>
        </nav>
      </div>
      <div class="col-11">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ms';
}
