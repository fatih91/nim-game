import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatchService} from '../../../../core/services/match.service';
import {RuleEnum} from '../../../../shared/ressources/rule.ressource';
import {RuleService} from '../../../../core/services/rule.service';

@Component({
  selector: 'app-nim-game-player-selection-view',
  templateUrl: './nim-game-player-selection-view.component.html',
  styleUrls: ['./nim-game-player-selection-view.component.css']
})
export class NimGamePlayerSelectionViewComponent implements OnInit {
  isSubmitClicked!: boolean;
  clickCounter!: number;

  @Output('submitSelected') submitSelectionEvent = new EventEmitter();

  constructor(private matchService: MatchService, private ruleService: RuleService) { }

  ngOnInit(): void {
    this.isSubmitClicked = this.matchService.isSubmitClicked;
    this.clickCounter = this.matchService.clickCounter;
  }

  submitSelection(): void{
    // Prevent multiple clicks on submit
    if (!this.isSubmitClicked){
      this.clickCounter = this.matchService.clickCounter;
      // Check if the game has selected matches, otherwise no confirmation possible
      if (this.clickCounter < 3){
        // Computer calculates its moves
        this.ruleService.selectRule(RuleEnum.COMPUTER_TURN);
        this.isSubmitClicked = this.matchService.clickSubmit();
        // Play as if the computer was thinking
        setTimeout(() => {
          // Trigger event to directive
          this.submitSelectionEvent.emit(this);
          this.isSubmitClicked = this.matchService.isSubmitClicked;
        }, 2000);
      }else {
        this.ruleService.selectRule(RuleEnum.NO_MATCH_SELECTED);
      }
    }
  }
}
