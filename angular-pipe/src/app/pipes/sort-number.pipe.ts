import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(numbers: number[], sortValue?: number): number[] {
    sortValue = sortValue || 1;
    numbers.sort((a, b) => {
      // @ts-ignore
      return sortValue * (a - b);
    })

    return [...numbers];
  }

}
