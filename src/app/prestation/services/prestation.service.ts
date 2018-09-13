import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation-m';
import { fackeCollection } from './fackecollection';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})


export class PrestationService {

  private _collection: Prestation[];

  constructor() {
    this.collection = fackeCollection;
  }

  get collection(): Prestation[] {
    return this._collection;
  }

  set collection(col: Prestation[]) {
    this._collection = col;
  }


  public update(presta: Prestation, state?: State) {
    presta.state = state;
    const prestaToUpdate = {...presta};
  }

  public add(presta: Prestation) {
    this.collection.push(presta);
  }

}
