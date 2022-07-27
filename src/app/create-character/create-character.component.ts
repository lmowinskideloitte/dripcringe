import {Component, OnInit} from '@angular/core';
import {DripCringeService} from "../drip-cringe.service";

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'None', value: ''},
    {display: 'Drip', value: 'drip'},
    {display: 'Cringe', value: 'cringe'}
  ]
  dcService: DripCringeService;

  constructor(dcService: DripCringeService) {
    this.dcService = dcService;
  }

  ngOnInit(): void {
  }

  onSubmit(submittedForm: any) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm.value);
    this.dcService.addCharacter(submittedForm.value.name, submittedForm.value.affiliation);
  }
}
