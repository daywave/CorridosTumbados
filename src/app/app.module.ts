import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgendarComponent } from './agendar/agendar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MapaComponent } from './mapa/mapa.component';
import { VisionComponent } from './vision/vision.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendarComponent,
    NosotrosComponent,
    MapaComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'agendar', component: AgendarComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: 'vision', component: VisionComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
