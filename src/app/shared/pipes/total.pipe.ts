import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log(value  args);
    if (!value) {
      return '';
    }
    if (args > -1) {
      return value.totalTTC();
    } else {
      return value.totalHT();
    }

  }

}
