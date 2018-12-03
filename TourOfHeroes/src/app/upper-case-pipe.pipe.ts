import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseCustom'
})
export class UpperCasePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
