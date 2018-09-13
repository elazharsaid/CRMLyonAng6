import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {


    id: string;
    typePresta: string;
    client: string;
    nb_jour: number;
    taux_tva = 20;
    tjm_ht: number;
    state = State.OPTION;

    tvaPeriode: number;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      //console.log(fields);
      Object.assign(this, fields);
    }
  }

  public totalHT(): number {
    // console.log('total ht');
    return this.tjm_ht * this.nb_jour;
  }

  public totalTTC(tva?: number): number {
    // console.log('total ttc');

    /**if (tva <= 0) {
      return totalHT;
    } else if (tva) {
      return totalHT + (tva * totalHT / 100);
    } else{
      return totalHT + (this.taux_tva * totalHT / 100);
    }*/

    if (!this.taux_tva) {
      this.taux_tva = 0;
    }

    const totalHT = this.totalHT();
    if (!tva) {
      tva = this.taux_tva;
    } else if (tva >= 0) {
        tva = 0;
    }

    return totalHT + (tva * totalHT / 100);

  }

  // private getTVA(): number {
  //   return;
  // }

}
