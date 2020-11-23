import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerRandomSelectionDirective } from './directives/computer-random-selection.directive';
import { ComputerOptimizedSelectionDirective } from './directives/computer-optimized-selection.directive';



@NgModule({
  declarations: [ComputerRandomSelectionDirective, ComputerOptimizedSelectionDirective],
  imports: [CommonModule],
  exports: [ComputerRandomSelectionDirective, ComputerOptimizedSelectionDirective]
})
export class SharedModule { }
