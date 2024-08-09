import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviesLimitNum'
})
export class MoviesLimitNumPipe implements PipeTransform {

  transform(moviesArr:any[] , num:number): any[] {
    return moviesArr.slice(0,num);
  }

}
