export class MenuItemRessource{
  static readonly RANDOMIZED_COMPUTER_SELECTION = new MenuItemRessource('Randomized Computer Selection');
  static readonly OPTIMIZED_COMPUTER_SELECTION = new MenuItemRessource('Optimized Computer Selection');

  private constructor(public readonly name: string) {
  }
}


export enum MenuItemEnum{
  RANDOMIZED_COMPUTER_SELECTION,
  OPTIMIZED_COMPUTER_SELECTION
}
