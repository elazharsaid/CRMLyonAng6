import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { State } from '../../../shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation-m';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  public form: FormGroup;
  public states = Object.values(State);

  private initPrestation: Prestation = new Prestation;

  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.createForm();
    // console.log(this.initPrestation);
  }


  private createForm(): void {
    this.form = this.fb.group({
      typePresta: [this.initPrestation.typePresta, Validators.compose([Validators.required, Validators.minLength(4)])],
      client: [this.initPrestation.client, Validators.compose([Validators.required, Validators.minLength(4)])],
      nb_jour: [this.initPrestation.nb_jour],
      tjm_ht: [this.initPrestation.tjm_ht],
      taux_tva: [this.initPrestation.taux_tva],
      state: [this.initPrestation.state],
    });
  }


  public process(): void {
    /*this.nItem = this.form.value;*/

    const item = new Prestation(this.form.value);
    console.log(item);
    this.nItem.emit(item);
  }

  /**
   * controle sur le champ type presation
   * @return true if not error
   */
  public isError(typePresta: string): boolean {
    return this.form.get(typePresta).invalid && this.form.get(typePresta).touched;
  }

}
