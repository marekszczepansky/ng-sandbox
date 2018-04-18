import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'qwValues'
})
export class QwValuesPipe implements PipeTransform {

  transform(value: Object, args?: any): any {
    return Object.values(value);
  }
}
