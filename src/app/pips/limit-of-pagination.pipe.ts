import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitOfPagination'
})
export class LimitOfPaginationPipe implements PipeTransform {

  transform(pagesArr:number[], currentPage:number): number[] {

     
    
    // if(currentPage == 1) {
    //   pagesArr = new Array(4).fill(0).map((e,i)=> i + 1)
    // }else {
    //   pagesArr[0] = currentPage - 1;
    //   pagesArr[1] = currentPage;
    //   pagesArr[2] = currentPage + 1;
    //   pagesArr[3] = currentPage + 2;
    // }

   

    

    return pagesArr;
  }

}
