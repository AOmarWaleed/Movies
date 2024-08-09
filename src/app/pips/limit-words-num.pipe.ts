import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWordsNum'
})
export class LimitWordsNumPipe implements PipeTransform {

  transform(words:string , num:number): string {
    return words.split(' ').slice(0,num).join(' ');
  }

}
