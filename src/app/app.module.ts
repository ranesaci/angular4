import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { SortPipe } from './sort.pipe';
import { ModeldrivenComponent } from './modeldriven/modeldriven.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';

@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    Comp1Component,
    Comp2Component,
    ModeldrivenComponent,
    TemplatedrivenComponent,
   
    
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
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
