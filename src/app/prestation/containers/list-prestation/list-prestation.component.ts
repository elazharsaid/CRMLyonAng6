import { Component, OnInit, Type, OnDestroy } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation-m';
import { Observable, observable, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit, OnDestroy {


  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  public headers: string[];
  public message$: Subject<string>;


  // public addPresta = {libelle: 'Add prestation', route: '/prestations/add'};

  private sub: Subscription;

  constructor(private prestationService: PrestationService) {

  }

  ngOnInit() {
    this.collection$ = this.prestationService.collection$;
    // this.sub = this.prestationService.collection.subscribe((data) => {
    //   console.log('subscribe');
    //   this.collection = data;
    // });
    this.message$ = this.prestationService.message$;

    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Totale TTC',
      'statu',
      'Action',
    ];
  }

  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    // this.sub.unsubscribe();
  }




}

