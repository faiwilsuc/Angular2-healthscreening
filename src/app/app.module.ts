import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';
import { FormsModule } from '@angular/forms';
// import {RegisterComponent} from './register/register.component'

// Routing Module
import { AppRoutingModule } from './app.routing';

//Layouts
import { SignupComponent } from './signup/signup.component';
import { FullLayoutComponent } from './layouts/full-layout.component';
import { LoginbtnComponent } from './loginbtn/loginbtn.component';
import { LoginOutComponent } from './login-out/login-out.component';
import { RegisterComponent } from './register/register.component';
import { TbScreeningComponent } from './tb-screening/tb-screening.component';
import { HealthComponent } from './health/health.component';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    BreadcrumbsComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    LoginbtnComponent,
    LoginOutComponent,
    RegisterComponent,
    HealthComponent,
    TbScreeningComponent
   
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
