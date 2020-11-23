export class RuleRessource{
  static readonly DEFAULT = new RuleRessource('white', 'Good luck!');
  static readonly REACHED_OUT = new RuleRessource('white', 'You have reached the maximum number of choices');
  static readonly COMPUTER_TURN = new RuleRessource('white', 'The computer\'s turn');
  static readonly PLAYER_TURN = new RuleRessource('white', 'It\'s your turn');
  static readonly NO_MATCH_SELECTED = new RuleRessource('white', 'No match selected');
  static readonly YOU_LOOSE = new RuleRessource('white', 'You have lost');
  static readonly YOU_WON = new RuleRessource('white', 'You have won');

  private constructor(public readonly color: string, public readonly text: string) {
  }
}

export enum RuleEnum {
  DEFAULT,
  REACHED_OUT,
  NO_MATCH_SELECTED,
  COMPUTER_TURN,
  YOU_LOOSE,
  YOU_WON,
  PLAYER_TURN,
}
