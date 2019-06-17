import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule
} from '@angular/material';


let components = [
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: components,
  exports: components,
})
export class MaterialComponentsModule { }
