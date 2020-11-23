import {Injectable} from '@angular/core';
import {RuleEnum, RuleRessource} from '../../shared/ressources/rule.ressource';
import {IRuleModel} from '../../shared/models/rule.model';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private _selectedRule: IRuleModel;

  constructor() {
    this._selectedRule = {
      color: RuleRessource.DEFAULT.color,
      text: RuleRessource.DEFAULT.text
    };
  }

  get selectedRule(): IRuleModel {
    return this._selectedRule;
  }

  set selectedRule(value: IRuleModel) {
    this._selectedRule = value;
  }

  selectRule(r: RuleEnum): void {
    switch (r) {
      case RuleEnum.DEFAULT: {
        this._selectedRule.color = RuleRessource.DEFAULT.color;
        this._selectedRule.text = RuleRessource.DEFAULT.text;
        break;
      }
      case RuleEnum.REACHED_OUT: {
        this._selectedRule.color = RuleRessource.REACHED_OUT.color;
        this._selectedRule.text = RuleRessource.REACHED_OUT.text;
        break;
      }
      case RuleEnum.NO_MATCH_SELECTED: {
        this._selectedRule.color = RuleRessource.NO_MATCH_SELECTED.color;
        this._selectedRule.text = RuleRessource.NO_MATCH_SELECTED.text;
        break;
      }
      case RuleEnum.COMPUTER_TURN: {
        this._selectedRule.color = RuleRessource.COMPUTER_TURN.color;
        this._selectedRule.text = RuleRessource.COMPUTER_TURN.text;
        break;
      }
      case RuleEnum.YOU_LOOSE: {
        this._selectedRule.color = RuleRessource.YOU_LOOSE.color;
        this._selectedRule.text = RuleRessource.YOU_LOOSE.text;
        break;
      }
      case RuleEnum.PLAYER_TURN: {
          this._selectedRule.color = RuleRessource.PLAYER_TURN.color;
          this._selectedRule.text = RuleRessource.PLAYER_TURN.text;
          break;
      }
      case RuleEnum.YOU_WON: {
        this._selectedRule.color = RuleRessource.YOU_WON.color;
        this._selectedRule.text = RuleRessource.YOU_WON.text;
        break;
      }
    }
  }

  checkWinner(matchesLength: number, turn: RuleEnum): RuleEnum{
    if (matchesLength === 1){
      if (turn === RuleEnum.PLAYER_TURN) {
        return RuleEnum.YOU_LOOSE;
      } else if (turn === RuleEnum.COMPUTER_TURN){
        return RuleEnum.YOU_WON;
      }
    }
    return RuleEnum.DEFAULT;
  }
}
