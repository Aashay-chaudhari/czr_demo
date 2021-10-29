import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookedmapComponent } from './bookedmap/bookedmap.component';
import { CtzComponent } from './ctz/ctz.component';
import { CtzloginComponent } from './ctzlogin/ctzlogin.component';
import { CtzmapComponent } from './ctzmap/ctzmap.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RespComponent } from './resp/resp.component';
import { ResploginComponent } from './resplogin/resplogin.component';
import { TestcompComponent } from './testcomp/testcomp.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'receive', component : RespComponent},
  { path: 'send', component : CtzComponent},
  { path: 'ctzlogin', component : CtzloginComponent},
  { path: 'resplogin', component : ResploginComponent},
  { path: 'map', component : MapComponent},
  { path: 'ctzmaps', component : CtzmapComponent},
  { path: 'booked', component : BookedmapComponent},
  { path: 'test', component : TestcompComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
