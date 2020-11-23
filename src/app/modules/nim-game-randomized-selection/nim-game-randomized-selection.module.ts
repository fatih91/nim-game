import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {NimGameGuiContainerComponent} from './pages/nim-game-gui-container/nim-game-gui-container.component';
import {NimGameMatchesViewComponent} from './components/nim-game-matches-view/nim-game-matches-view.component';
import {NimGamePlayerSelectionViewComponent} from './components/nim-game-player-selection-view/nim-game-player-selection-view.component';
import {MaterialModule} from '../../material.module';
import {CoreModule} from '../../core/core.module';
import {SharedModule} from '../../shared/shared.module';
import { NimGameMenuDropdownViewComponent } from './components/nim-game-menu-dropdown-view/nim-game-menu-dropdown-view.component';

@NgModule({
  declarations: [
    NimGameGuiContainerComponent,
    NimGameMatchesViewComponent,
    NimGamePlayerSelectionViewComponent,
    NimGameMenuDropdownViewComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    SharedModule
  ],
  exports: [
    NimGameGuiContainerComponent,
    NimGameMatchesViewComponent,
    NimGamePlayerSelectionViewComponent
  ],
})
export class NimGameRandomizedSelectionModule { }
