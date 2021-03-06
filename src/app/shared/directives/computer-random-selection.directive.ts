import {AfterContentInit, ContentChild, Directive, OnInit} from '@angular/core';
import {NimGamePlayerSelectionViewComponent} from '../../modules/nim-game-randomized-selection/components/nim-game-player-selection-view/nim-game-player-selection-view.component';
import {MatchService} from '../../core/services/match.service';
import {RuleService} from '../../core/services/rule.service';
import {RuleEnum} from '../ressources/rule.ressource';

@Directive({
  selector: '[appComputerRandomSelection]'
})
export class ComputerRandomSelectionDirective implements OnInit, AfterContentInit{
  @ContentChild(NimGamePlayerSelectionViewComponent) selectionView!: NimGamePlayerSelectionViewComponent;

  constructor(private matchService: MatchService, private ruleService: RuleService) { }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.selectionView.submitSelectionEvent.subscribe((selectionViewComponent: NimGamePlayerSelectionViewComponent) => {
      let checkWinner = this.ruleService.checkWinner(this.matchService.matches.length, RuleEnum.COMPUTER_TURN);
      if (checkWinner === RuleEnum.DEFAULT){
        // Algorithm to select random matches
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
    // Get random matches
    const selections = this.randomMatchSelection().sort();
    console.log('Selections: ', selections);
    // Remove the random selected matches
    for (let i = selections.length - 1; i >= 0; i--) {
      this.matchService.deleteMatch(selections[i]);
    }
  }

  randomMatchSelection(): number[]{
    const matches = this.matchService.matches;
    const matchLength = matches.length;

    // Get random selection number
    const randomNumberSelection = this.randomSelection(matchLength);
    console.log('Random number: ', randomNumberSelection);
    const selections: number[] = new Array(randomNumberSelection);

    // Select a random match
    for (let i = 0; i < randomNumberSelection; i++) {
      selections[i] = this.getRandomInt(1, matchLength) - 1;
    }
    return selections;
  }

  randomSelection(matchLength: number): number{
    if (matchLength > 3){
      return this.getRandomInt(1, 3);
    }else if (matchLength === 3){
      return this.getRandomInt(1, 2);
    }else if (matchLength === 2){
      return 1;
    }else{
      return 0;
    }
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
