import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cost'
})
export class CostPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    console.log('transform', value)
    return value === 5 ? ' Best Product ' : '-';
  }

}
