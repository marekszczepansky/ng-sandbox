import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Sandbox1Component, TestDirective} from './sandbox1/sandbox1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TemplateVariableComponent} from './template-variable/template-variable.component';
import {CommunicationModule} from './communication/communication.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    Sandbox1Component,
    TestDirective,
    TemplateVariableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommunicationModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
