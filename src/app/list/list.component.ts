import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DripCringeService} from "../drip-cringe.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  dcService: DripCringeService;

  constructor(activatedRoute: ActivatedRoute, dcService: DripCringeService) {
    this.activatedRoute = activatedRoute;
    this.dcService = dcService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        // @ts-ignore
        this.characters = this.dcService.getCharacters(params['affiliation'])
      }
    );
  }
}
