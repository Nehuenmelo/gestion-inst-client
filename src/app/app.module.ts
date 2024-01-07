import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { StudentComponent } from './components/student/student.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CalculateAgePipe } from './core/pipes/calculateAgePipe';
import { MarksComponent } from './components/student/marks/marks.component';
import { DateFormatPipe } from './core/pipes/dateFormatPipe';
import { PaymentsComponent } from './components/student/payments/payments.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { AsistsComponent } from './components/student/asists/asists.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    NavbarComponent,
		CalculateAgePipe,
		DateFormatPipe,
  	MarksComponent,
    PaymentsComponent,
    AsistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		ClarityModule,
  CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
