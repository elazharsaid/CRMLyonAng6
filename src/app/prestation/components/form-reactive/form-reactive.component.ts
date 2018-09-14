import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

  @Input() prestaToedit: Prestation;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    console.log('bim');
    console.log(this.prestaToedit);
    this.createForm();

  }


  private createForm(): void {
    this.form = this.fb.group({
      typePresta: [this.prestaToedit ? this.prestaToedit.typePresta : this.initPrestation.typePresta,
      Validators.compose([Validators.required, Validators.minLength(4)])],

      client: [this.prestaToedit ? this.prestaToedit.client : this.initPrestation.client,
        Validators.compose([Validators.required, Validators.minLength(4)])],

      nb_jour: [this.prestaToedit ? this.prestaToedit.nb_jour : this.initPrestation.nb_jour],
      tjm_ht: [this.prestaToedit ? this.prestaToedit.tjm_ht : this.initPrestation.tjm_ht],
      taux_tva: [this.prestaToedit ? this.prestaToedit.taux_tva : this.initPrestation.taux_tva],
      state: [this.prestaToedit ? this.prestaToedit.state : this.initPrestation.state],
    });
  }


  private getItem(item: Prestation) {
    const data = this.form.value;
    if (!this.prestaToedit) {
      return data;
    }

    const id = this.prestaToedit.id;
    return {id, ...data};
  }

  public process(): void {
    /*this.nItem = this.form.value;*/

    const item = new Prestation(this.form.value);
    // console.log(item);
    // this.nItem.emit(item);
    this.nItem.emit(this.getItem(this.form.value));
  }

  /**
   * controle sur le champ type presation
   * @return true if not error
   */
  public isError(typePresta: string): boolean {
    return this.form.get(typePresta).invalid && this.form.get(typePresta).touched;
  }

}
