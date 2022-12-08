import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnagramTestComponent } from './anagram-test/anagram-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AnagramTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
