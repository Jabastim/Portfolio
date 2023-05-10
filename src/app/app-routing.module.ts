import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MainComponent } from './componentes/main/main.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [
  { path: '', component: MainComponent},

  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
