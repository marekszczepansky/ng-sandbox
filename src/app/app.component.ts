import {Component} from '@angular/core';

@Component({
	selector: 'ms-root',
	template: `
      <h1>
          Welcome to {{title}}!!
      </h1>
			<a routerLink="sandbox1">comp1</a>
      <router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ms';
}
