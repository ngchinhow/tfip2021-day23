import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TaskComponent } from './components/task/task.component';
import { MaterialModule } from './material/material.module';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatNativeDateModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-SG'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
