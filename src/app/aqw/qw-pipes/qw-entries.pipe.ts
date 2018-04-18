import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'qwEntries'
})
export class QwEntriesPipe implements PipeTransform {

  transform(value: Object, args?: any): any {
    return Object.entries(value);
  }

}
