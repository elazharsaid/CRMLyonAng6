import { State } from '../enums/state.enum';

export interface PrestationI
  {

    id: string;
    typePresta: string;
    client: string;
    nb_jour: number;
    taux_tva: number;
    tjm_ht: number;
    state: State;

  }
