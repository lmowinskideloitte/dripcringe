import {Component, Input, OnInit} from '@angular/core';
import {DripCringeService} from "../drip-cringe.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character: any;
  dcService: DripCringeService;

  constructor(dcService: DripCringeService) {
    this.dcService = dcService;
  }

  ngOnInit(): void {
  }

  onAssign(affiliation: string) {
    // this.character.affiliation = affiliation;
    // this.affiliationAssigned.emit({name: this.character.name, affiliation: affiliation});
    this.dcService.onAffiliationChosen({name: this.character.name, affiliation: affiliation});
  }
}
