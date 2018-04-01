import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Sandbox1Component} from './sandbox1/sandbox1.component';
import {TemplateVariableComponent} from './template-variable/template-variable.component';
import {Checkbox2testComponent} from './checkbox2test/checkbox2test.component';
import {Table1Component} from './table1/table1.component';

const routes: Routes = [
  {path: 'sandbox1', component: Sandbox1Component},
  {path: 'templVar', component: TemplateVariableComponent},
  {path: 'checkbox2', component: Checkbox2testComponent},
  {path: 'table1', component: Table1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
