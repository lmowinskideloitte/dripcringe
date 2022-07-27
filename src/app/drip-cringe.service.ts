import {LogService} from "./log.service";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class DripCringeService {
  private characters = [
    {name: 'Paweł Drippa', affiliation: ''},
    {name: 'Hubert Kajzerka', affiliation: ''}
  ];
  private logService: LogService;
  public charactersChanged = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
  }

  public getCharacters(chosenList: string) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((character) => {
      return character.affiliation === chosenList;
    })
  }

  onAffiliationChosen(characterInfo: { name: string; affiliation: string; }) {
    const pos = this.characters.findIndex((ch) => {
      return ch.name === characterInfo.name;
    })
    this.characters[pos].affiliation = characterInfo.affiliation;
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + characterInfo.name + ', new affiliation: ' + characterInfo.affiliation);
  }

  addCharacter(name: any, affiliation: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    })
    if (pos != -1) {
      return;
    }
    const newChar = {name: name, affiliation: affiliation};
    this.characters.push(newChar);
  }
}
