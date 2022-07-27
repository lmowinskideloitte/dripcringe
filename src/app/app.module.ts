import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DripCringeService} from "./drip-cringe.service";
import {LogService} from "./log.service";
import { CreateCharacterComponent } from './create-character/create-character.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
  ],
  providers: [DripCringeService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
