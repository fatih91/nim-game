import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../../../core/services/match.service';
import {RuleService} from '../../../../core/services/rule.service';
import {RuleEnum} from '../../../../shared/ressources/rule.ressource';

@Component({
  selector: 'app-nim-game-matches-view',
  templateUrl: './nim-game-matches-view.component.html',
  styleUrls: ['./nim-game-matches-view.component.css']
})
export class NimGameMatchesViewComponent implements OnInit {
  matches: number[] = [];
  clickCounter!: number;

  constructor(private matchService: MatchService, private ruleService: RuleService) {
  }

  ngOnInit(): void {
    this.initializeMatches();
  }

  initializeMatches(): void {
    this.matches = this.matchService.matches;
    this.clickCounter = this.matchService.clickCounter;
  }

  selectMatchEvent(matchIndex: number, matchId: number): void{
    // Check if the selection was confirmed,
    // so that no matches are selected when it
    // is the computer's turn
    if (!this.matchService.isSubmitClicked){
      const matchesLength = this.matches.length;
      if (matchesLength > 0) {
        this.clickCounter = this.matchService.clickCounter;
        // Check that no more than 3 matches were removed
        if (this.clickCounter > 0) {
          // console.log(matchIndex, matchId);
          this.matches = this.matchService.deleteMatch(matchIndex);
          this.clickCounter = this.matchService.clickMatchCounter();
        }else{
          this.ruleService.selectRule(RuleEnum.REACHED_OUT);
        }
      }
    }
  }



}
