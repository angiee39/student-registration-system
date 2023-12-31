import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {NgOptimizedImage} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailsComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgOptimizedImage,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
