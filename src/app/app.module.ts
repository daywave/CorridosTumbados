import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgendarComponent } from './agendar/agendar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendarComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'agendar', component: AgendarComponent},
      {path: 'nosotros', component: NosotrosComponent},
      {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
