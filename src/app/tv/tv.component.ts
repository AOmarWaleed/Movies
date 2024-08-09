import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../sharData/movies.service';



@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit,OnDestroy {
  currentPage:number = 0;
  totalPagesArr:number[]=[];

  placeHolderArr:number[]= new Array(20);
  placeHolderImage:string = '../../assets/images/avatar.png'
  tvShows:any[]=[];
  tvShowsDestroy:Subscription = new Subscription();
  searchWord:string = '';
  imgPreFix:string = '';
  constructor(private _moviesService:MoviesService) { }
  ngOnDestroy(): void {
    this.tvShowsDestroy.unsubscribe();
  }

  ngOnInit(): void {
    this.imgPreFix = this._moviesService.prefixImgPath;
    this.getPageNom(1);
  }


  getPageNom(pageNum:number) {
    this.currentPage = pageNum;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    this.tvShowsDestroy = this._moviesService.getPage( pageNum,'tv').subscribe({
                            next: (r)=> this.tvShows = r.results,

                          })
  }
}
