import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'realTimeSearch'
})
export class RealTimeSearchPipe implements PipeTransform {

  transform(list:any[], serchWord:string): any[] {
    return list.filter((item)=> item.original_title ? item.original_title.toUpperCase().includes(serchWord.toUpperCase()): item.name.toUpperCase().includes(serchWord.toUpperCase()) );
  }

}
