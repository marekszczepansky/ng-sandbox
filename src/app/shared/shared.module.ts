import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GithubSourceComponent} from './github-source/github-source.component';
import {LocalSourceAssetsComponent} from './local-source-assets/local-source-assets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GithubSourceComponent,
    LocalSourceAssetsComponent,
  ],
  exports: [
    GithubSourceComponent,
    LocalSourceAssetsComponent,
  ]
})
export class SharedModule { }
