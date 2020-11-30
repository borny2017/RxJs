import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HowToPipeComponent } from './how-to-pipe/how-to-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HowToPipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
