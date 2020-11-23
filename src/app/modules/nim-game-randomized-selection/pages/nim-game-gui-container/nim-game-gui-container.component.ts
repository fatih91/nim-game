import { Component, OnInit } from '@angular/core';
import {RuleService} from '../../../../core/services/rule.service';
import {IRuleModel} from '../../../../shared/models/rule.model';
import {MenuItemEnum} from '../../../../shared/ressources/menu-item.ressource';

@Component({
  selector: 'app-nim-game-gui-container',
  templateUrl: './nim-game-gui-container.component.html',
  styleUrls: ['./nim-game-gui-container.component.css']
})
export class NimGameGuiContainerComponent implements OnInit {
  rule: IRuleModel = this.ruleService.selectedRule;
  selectedMenuItem = MenuItemEnum.RANDOMIZED_COMPUTER_SELECTION;

  constructor(private ruleService: RuleService) { }

  ngOnInit(): void {
  }

  changeMenuItem(menuItem: number): void{
    this.selectedMenuItem = menuItem;
  }
}
