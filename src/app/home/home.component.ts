import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../sharData/movies.service';



import { OwlOptions } from 'ngx-owl-carousel-o';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit ,OnDestroy {
  getTrendingMoviesDestroy:Subscription = new Subscription();
  getTrendingTvDestroy:Subscription = new Subscription();
  getTrendingPersonDestroy:Subscription = new Subscription();
  placeHolderArr:any[] = new Array(14).fill(0); 
  placeHolderImg:string = '../../assets/images/avatar.png';
  preFixImg:string = '';
  trendingMovies:any[]= [];
  trendingPerson:any[]= [];
  trendingTv:any[]= [];
  constructor(private _moviesService:MoviesService){}
  
  ngOnInit(): void {
    this.preFixImg = this._moviesService.prefixImgPath;
    this.getTrendingMovies();
  }
 

  ngOnDestroy(): void {
   this.getTrendingMoviesDestroy.unsubscribe();
   this.getTrendingTvDestroy.unsubscribe();
   this.getTrendingPersonDestroy.unsubscribe();
  }

  getTrendingMovies() {
    this.getTrendingMoviesDestroy =  this._moviesService.getTrending('movie').subscribe({
                                      next:(r)=> this.trendingMovies = r.results,
                                      error:(e)=>console.log(e),
                                      complete:()=> this.getTrendingTv()})
  } 

  getTrendingTv(){
    this.getTrendingTvDestroy =       this._moviesService.getTrending('tv').subscribe({
                                        next:(r)=> {this.trendingTv = r.results;
                                        },
                                        error:(e)=>console.log(e),
                                        complete:()=>this.getTrendingPerson()
                                              
                                        
                                      })
  }

  getTrendingPerson(){
    this.getTrendingPersonDestroy = this._moviesService.getTrending('person').subscribe({
                                      next:(r)=> {this.trendingPerson = r.results;
                                      },
                                      error:(e)=>console.log(e),
                                            
                                      
                                    })
  }





  customOptions: OwlOptions = {
    loop: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 200,
    margin: 15,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: true
  }

}
