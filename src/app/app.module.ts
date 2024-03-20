import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './counter/heroes/hero/hero.component';
import { ListComponent } from './counter/heroes/list/list.component';
import {CounterModule} from "./counter/components/counter.module";
import {HeroesModule} from "./counter/heroes/heroes.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
