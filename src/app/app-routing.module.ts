import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // {path:'',component: SignUpComponent},
  // {path: 'login', component: LoginComponent}
  { path: '',component: SignUpComponent },
  { path:'signup', component: SignUpComponent},
  { path:'login', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignUpComponent,LoginComponent]  //export fro app.routing module and import from app.module
 