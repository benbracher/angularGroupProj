import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { DisplayPlantComponent } from './display-plant/display-plant.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { AuthService } from './services/auth.service';
import { AboutComponent } from './about/about.component';

const routes = [
  // { path: 'home', component: HomeComponent},
  //{ path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
  { path: 'login', component: LoginComponent},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // AboutComponent,
    LoginComponent,
    ProductComponent,
    DisplayPlantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
