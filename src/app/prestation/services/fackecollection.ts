import { Prestation } from '../../shared/models/prestation-m';
import { State } from '../../shared/enums/state.enum';

export const fackeCollection: Prestation[] = [

  new Prestation(
  {
    id: 'a1',
    typePresta: 'Formation',
    client: 'docapost',
    nb_jour: 100000,
    taux_tva: 20,
    tjm_ht: 700,
    state: State.OPTION,
  }
  ),

  new Prestation(
  {
    id: 'a2',
    typePresta: 'Prestation',
    client: 'modis',
    nb_jour: 500000,
    taux_tva: 20,
    tjm_ht: 500,
    state: State.CONFIRME,
  }
  ),

  new Prestation(
  {
    id: 'a3',
    typePresta: 'blazing',
    client: 'dolib',
    nb_jour: 100000,
    taux_tva: 20,
    tjm_ht: 600,
    state: State.ANNULE,
  }
  ),
];
