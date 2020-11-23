import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItemEnum, MenuItemRessource} from '../../../../shared/ressources/menu-item.ressource';

@Component({
  selector: 'app-nim-game-menu-dropdown-view',
  templateUrl: './nim-game-menu-dropdown-view.component.html',
  styleUrls: ['./nim-game-menu-dropdown-view.component.css']
})
export class NimGameMenuDropdownViewComponent implements OnInit {
  opponents = [MenuItemRessource.RANDOMIZED_COMPUTER_SELECTION.name, MenuItemRessource.OPTIMIZED_COMPUTER_SELECTION.name];
  selectedOpponent = MenuItemEnum.RANDOMIZED_COMPUTER_SELECTION;

  @Output() selectMenuItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectOpponent(selectedOpponent: any): void{
    this.selectMenuItem.emit(selectedOpponent.value as number);
  }

}
