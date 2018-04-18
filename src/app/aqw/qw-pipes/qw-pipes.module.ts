import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QwKeysPipe} from './qw-keys.pipe';
import {QwValuesPipe} from './qw-values.pipe';
import {QwEntriesPipe} from './qw-entries.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QwKeysPipe, QwValuesPipe, QwEntriesPipe]
})
export class QwPipesModule {
}
