import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { inject } from '@angular/core/testing';
import { getLocaleCurrencySymbol, CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'localCurrency'
})
export class LocalCurrencyPipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) public locale: string, private cp: CurrencyPipe){

  }

  transform(value: any, args?: any): any {
    return this.cp.transform(value, getLocaleCurrencySymbol(this.locale));
  }

}
