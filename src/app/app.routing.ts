import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
// import { LoginbtnComponent } from './loginbtn/Loginbtn.component';
import { LoginOutComponent } from './login-out/login-out.component';
import { SignupComponent } from './signup/signup.component';
import { RegisterComponent } from './register/register.component';
import { HealthComponent } from './health/health.component';
import { TbScreeningComponent } from './tb-screening/tb-screening.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    // component: LoginbtnComponent,
    component: LoginOutComponent,
  }, 
  {
        path: 'signup',
        component: SignupComponent,
  }, 
   
  {
    path: '',
    component: FullLayoutComponent,
      // data: {
      //   title: 'Home'
      // },
    children: [
      {
        path: 'register',
        // loadChildren: './register/register.module#RegisterModule'
        component: RegisterComponent
      },
      {
        path: 'health',
        component: HealthComponent
      },
      {
        path: 'tb-screening',
        component:TbScreeningComponent
      },
      // {
      //   path: 'signup',
      //   component: SignupComponent,
      // }, 
           
    ],
    
  },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
