import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DripCringeService} from "../drip-cringe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activatedRoute: ActivatedRoute;
  dcService: DripCringeService;
  loadedAffiliation = 'all';
  subscription = new Subscription;

  constructor(activatedRoute: ActivatedRoute, dcService: DripCringeService) {
    this.activatedRoute = activatedRoute;
    this.dcService = dcService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        // @ts-ignore
        this.characters = this.dcService.getCharacters(params['affiliation'])
        this.loadedAffiliation = params['affiliation'];
      }
    );
    this.subscription = this.dcService.charactersChanged.subscribe(
      () => {
        // @ts-ignore
        this.characters = this.dcService.getCharacters(this.loadedAffiliation);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
