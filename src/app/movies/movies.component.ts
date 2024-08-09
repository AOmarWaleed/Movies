import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from '../sharData/movies.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit ,OnDestroy {
  placeHolderArr:number[] = new Array(14);
  placeHolderImg:string = '../../assets/images/avatar.png';

  currentPage:number = 1;
  totalPagesArr:number[] = [];

  searchWord:string = '';
  movies:any[]=[];
  imfPreFix:string = '';

  moviesDestroy:Subscription = new Subscription();
  constructor(private _moviesService:MoviesService) { }
  ngOnDestroy(): void {
    this.moviesDestroy.unsubscribe();
  }

  ngOnInit(): void {  
    this.imfPreFix = this._moviesService.prefixImgPath;
    this.getPage(1);
  }

  getPage(num:number){
    this.currentPage = num;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    this.moviesDestroy = this._moviesService.getPage(num , "movie").subscribe({
                          next:(r)=> this.movies = r.results,
                          })
  }

}
