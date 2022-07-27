import {Component, OnInit} from '@angular/core';
import {DripCringeService} from "../drip-cringe.service";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  dcService: DripCringeService;

  constructor(dcService: DripCringeService) {
    this.dcService = dcService;
  }

  ngOnInit(): void {
  }

  onChoose(affiliation: string) {
    this.chosenList = affiliation;
  }

  getCharacters() {
    // @ts-ignore
    this.characters = this.dcService.getCharacters(this.chosenList);
    return this.characters;
  }
}
