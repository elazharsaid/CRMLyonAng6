import { Component, OnInit, Type } from '@angular/core';
import { PrestationService } from '../../services/prestation.service';
import { Prestation } from '../../../shared/models/prestation-m';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {

  public collection: Prestation[];

  public headers: string[];

  // public addPresta = {libelle: 'Add prestation', route: '/prestations/add'};

  constructor(private prestationService: PrestationService) {

  }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Totale TTC',
      'Action',
    ];
  }

}
