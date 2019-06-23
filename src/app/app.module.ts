import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ComponentsModule } from './components/components.module';
import {SharedModule, TabViewModule} from "primeng/primeng";
// import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ProcessingService } from './services/processing.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // AccordionModule,
    ToastModule,
    TabViewModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [UserService, ProcessingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
