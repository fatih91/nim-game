import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // const matches:number[] = ['match1', 'match2', 'match3', 'match', 'match2', 'match2', 'match2', 'match2', 'match2', 'match2', 'match2', 'match2', 'match2'];
  private _matches: number[] = [...Array(13).keys()];
  private _clickCounter = 3;
  private _isSubmitClicked = false;

  constructor() { }

  get matches(): number[] {
    return this._matches;
  }

  set matches(value: number[]) {
    this._matches = value;
  }

  get clickCounter(): number {
    return this._clickCounter;
  }

  set clickCounter(value: number) {
    this._clickCounter = value;
  }

  get isSubmitClicked(): boolean {
    return this._isSubmitClicked;
  }

  set isSubmitClicked(value: boolean) {
    this._isSubmitClicked = value;
  }

  clickSubmit(): boolean {
    this.isSubmitClicked = !this.isSubmitClicked;
    return this.isSubmitClicked;
  }

  clickMatchCounter(): number {
    this.clickCounter = this.clickCounter - 1;
    return this.clickCounter;
  }

  resetClickCounter(): void{
    this.clickCounter = 3;
  }

  deleteMatch(index: number): number[]{
    this.matches.splice(index, 1);
    return this.matches;
  }
}
