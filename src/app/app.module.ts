import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import {MydataService} from './mydata.service';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { SortPipe } from './sort.pipe';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { BaseconvertersComponent } from './baseconverters/baseconverters.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    Comp1Component,
    Comp2Component,
    ModeldrivenComponent,
    TemplatedrivenComponent,
    BaseconvertersComponent,
    FormvalidationComponent,
    ServicesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'path4Comp1',
        component: Comp1Component
      },
      {
        path: 'path4Comp2',
        component: Comp2Component
      },
      {
        path: 'templateDriven',
        component: TemplatedrivenComponent
      },
      {
        path: 'modelDriven',
        component: ModeldrivenComponent
      },
      {
        path: 'baseConvertersDriven',
        component: BaseconvertersComponent
      },
      {
        path: 'ValidationForms',
        component: FormvalidationComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      }
    ])

  ],
  providers: [MydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
