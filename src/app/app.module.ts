import { InMemoryDataService } from './shared/in-memory-data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { TerminologyAddComponent } from './terminology-add/terminology-add.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    TerminologyComponent,
    TerminologyAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule,
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
