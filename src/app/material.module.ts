import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialModules = [
  MatGridListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
];


@NgModule({
  imports: [
    MaterialModules
  ],
  exports:[
    MaterialModules
  ]
})
export class MaterialModule { }
