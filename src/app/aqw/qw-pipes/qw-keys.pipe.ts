import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'qwKeys'
})
export class QwKeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Object.keys(value);
  }
}
