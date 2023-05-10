import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarComponent } from './agendar/agendar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent }, // Página de inicio
  { path: 'agendar', component: AgendarComponent }, // Página AgendarComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
