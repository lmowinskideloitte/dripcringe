import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {ListComponent} from './list/list.component';
import {ItemComponent} from './item/item.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DripCringeService} from "./drip-cringe.service";
import {LogService} from "./log.service";
import {CreateCharacterComponent} from './create-character/create-character.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './header/header.component';
import {Route, RouterModule} from "@angular/router";

// stupid workaround because IDK why this stuff doesnt work >:(( TODO put that straight into routes
let pathMatchFullRoute: Route = {path: '', redirectTo: 'all', pathMatch: 'full'};

const routes = [
  {
    path: 'characters', component: TabsComponent, children: [
      pathMatchFullRoute,
      {path: ':affiliation', component: ListComponent}
    ]
  },
  {path: 'new-character', component: CreateCharacterComponent},
  {path: '**', redirectTo: '/characters'}
]

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DripCringeService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
