import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const myRoutes:Routes = [
  {
    path:"",
    component:ViewFriendsComponent
  },
  {
    path:"add",
    component:AddFriendsComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ViewFriendsComponent,
    AddFriendsComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
