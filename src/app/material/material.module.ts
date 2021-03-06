import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';


const MATERIAL = [
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatListModule,
  MatFormFieldModule,
  MatRadioModule,
  MatDatepickerModule,
  MatSliderModule,
  MatInputModule
];

@NgModule({
  imports: MATERIAL,
  exports: MATERIAL
})
export class MaterialModule { }
