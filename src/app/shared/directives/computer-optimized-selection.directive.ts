import {AfterContentInit, ContentChild, Directive, OnInit} from '@angular/core';
import {NimGamePlayerSelectionViewComponent} from '../../modules/nim-game-randomized-selection/components/nim-game-player-selection-view/nim-game-player-selection-view.component';
import {MatchService} from '../../core/services/match.service';
import {RuleService} from '../../core/services/rule.service';
import {RuleEnum} from '../ressources/rule.ressource';

@Directive({
  selector: '[appComputerOptimizedSelection]'
})
export class ComputerOptimizedSelectionDirective implements OnInit, AfterContentInit{
  @ContentChild(NimGamePlayerSelectionViewComponent) selectionView!: NimGamePlayerSelectionViewComponent;

  constructor(private matchService: MatchService, private ruleService: RuleService) { }

  ngOnInit(): void {
    console.log('Test Optimized Selection');
  }

  ngAfterContentInit(): void {
    this.selectionView.submitSelectionEvent.subscribe((selectionViewComponent: NimGamePlayerSelectionViewComponent) => {
      let checkWinner = this.ruleService.checkWinner(this.matchService.matches.length, RuleEnum.COMPUTER_TURN);
      if (checkWinner === RuleEnum.DEFAULT){
        // Algorithm to select matches to win
        this.removeSelectedMatches();
        checkWinner = this.ruleService.checkWinner(this.matchService.matches.length, RuleEnum.PLAYER_TURN);
        if (checkWinner === RuleEnum.YOU_LOOSE){
          this.ruleService.selectRule(RuleEnum.YOU_LOOSE);
        } else if (checkWinner === RuleEnum.DEFAULT) {
          this.matchService.resetClickCounter();
          this.ruleService.selectRule(RuleEnum.PLAYER_TURN);
          this.matchService.clickSubmit();
        }
      }else if (checkWinner === RuleEnum.YOU_WON){
        this.ruleService.selectRule(RuleEnum.YOU_WON);
        this.matchService.isSubmitClicked = true;
      }
    });
  }

  removeSelectedMatches(): void {
    const matches = this.matchService.matches;
    const matchLength = matches.length;
    let numberOfMatchesToRemove = 0;
    // Page 7 - Formula with PosP and PosN modificated, because
    // https://imsc.uni-graz.at/baur/lehre/WS2014-LAK-Seminar/6_Zoehrer.pdf
    if (matchLength > 9){
      numberOfMatchesToRemove = matchLength - 9;
    }else if (matchLength > 5){
      numberOfMatchesToRemove = matchLength - 5;
    } else if (matchLength > 1){
      numberOfMatchesToRemove = matchLength - 1;
    }

    const selections = this.randomMatchSelection(matchLength, numberOfMatchesToRemove);

    // Remove the selected matches
    for (let i = selections.length - 1; i >= 0; i--) {
      this.matchService.deleteMatch(selections[i]);
    }
  }

  randomMatchSelection(matchLength: number, numberOfMatchesToRemove: number ): number[]{
    const selections: number[] = new Array(numberOfMatchesToRemove);
    // Select a random match
    for (let i = 0; i < numberOfMatchesToRemove; i++) {
      selections[i] = this.getRandomInt(1, matchLength) - 1;
    }
    return selections;
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
