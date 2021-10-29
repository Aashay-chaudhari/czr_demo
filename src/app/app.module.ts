import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CtzComponent } from './ctz/ctz.component';
import { RespComponent } from './resp/resp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


import { HomeComponent } from './home/home.component';
import { CtzloginComponent } from './ctzlogin/ctzlogin.component';
import { ResploginComponent } from './resplogin/resplogin.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { CtzmapComponent } from './ctzmap/ctzmap.component';
import { BookedmapComponent } from './bookedmap/bookedmap.component';
import { TestcompComponent } from './testcomp/testcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    CtzComponent,
    RespComponent,
    HomeComponent,
    CtzloginComponent,
    ResploginComponent,
    MapComponent,
    CtzmapComponent,
    BookedmapComponent,
    TestcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
