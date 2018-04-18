import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QwPipesModule} from './qw-pipes/qw-pipes.module';

const importExport = [
  QwPipesModule
];

@NgModule({
  imports: [
    CommonModule,
    ...importExport,
  ],
  exports: [
    ...importExport,
  ],
  declarations: []
})
export class QwModule {
}
