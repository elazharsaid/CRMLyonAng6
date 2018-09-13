import { Directive, Input, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {

  @Input() appState: State;
  @HostBinding('class') nomClass;

  constructor() {
    //console.log('derc code exec' + this.appState);
  }

  ngOnChanges() {
    // console.log('derc code exec' + this.appState);
    this.nomClass = this.formatClass(this.appState);
  }

  private formatClass(state: State): string {
    return `state-${
      state.normalize('NFD')
      .replace(/[\u0300-\u036f\s]/g, '')
      .toLowerCase()
    }`;
  }

   // recap state
   // en fonctiondu state retourne une chiane comme state-option
   // supprimer tous la  state et supprimer tous les

}
