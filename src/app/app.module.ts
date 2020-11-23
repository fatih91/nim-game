import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NimGameRandomizedSelectionModule} from './modules/nim-game-randomized-selection/nim-game-randomized-selection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NimGameRandomizedSelectionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
