import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {CardModule} from 'primeng/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ToastModule} from 'primeng/toast';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule, CalendarModule, DropdownModule, ToolbarModule, MessageService} from 'primeng/primeng';
import {ToolbarComponent} from './toolbar/toolbar.component';


import {TableModule} from 'primeng/table';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    RouterModule,
    ToastModule,
    BrowserAnimationsModule,
    ToolbarModule,
    DropdownModule,
    TableModule,
  ],
  declarations: [
    LoginComponent,
    ToolbarComponent,
    FirstPageComponent
    ],
    providers: [MessageService],

})
export class ComponentsModule {
}

