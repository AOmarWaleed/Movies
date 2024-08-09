import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../sharData/movies.service';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit , OnDestroy {
  imgPrefix:string = '';
  id:string = '';
  type:string= '';

  movieDetalis:any = '';
  tvDetalis:any = '';
  personDetalis:any = '';
  actorMovies:any = '';

  movieDetalisDestroy:Subscription = new Subscription();
  tvDetalisDestroy:Subscription = new Subscription();
  personDetalisDestroy:Subscription = new Subscription();
  actorMoviesDestroy:Subscription = new Subscription();


  constructor(private _activatedRoute:ActivatedRoute , private _moviesService:MoviesService) { }
  ngOnDestroy(): void {
   this.movieDetalisDestroy.unsubscribe()
   this.personDetalisDestroy.unsubscribe()
   this.actorMoviesDestroy.unsubscribe()
   this.tvDetalisDestroy.unsubscribe()
  }

  ngOnInit(): void {
    this.imgPrefix = this._moviesService.prefixImgPath;
    this._activatedRoute.params.subscribe({
      next:()=>{this.id = this._activatedRoute.snapshot.params['id']; this.type = this._activatedRoute.snapshot.params['type']}
      ,
      
    })

    this.getDetails(this.id , this.type);
    
    
  }

  getDetails(id:string , type:string){
    this.personDetalis = null;
    if(type == 'movie') {
      this.movieDetalisDestroy = this._moviesService.getDetails(id , type).subscribe({
        next:(r)=> this.movieDetalis = r
      })
    }else if (type == 'tv') {
      this.tvDetalisDestroy = this._moviesService.getDetails(id , type).subscribe({
        next:(r)=> this.tvDetalis = r
      })
    }else if (type == "person") {
      this.personDetalisDestroy = this._moviesService.getDetails(id , type).subscribe({
        next:(r)=> this.personDetalis = r,
        complete:()=> {
         
          
          this.getActorMovies();
         
        }
      })
    }


   
    
  
  }

  getActorMovies(){
    this.actorMoviesDestroy  = this._moviesService.getActorMovies(this.id).subscribe({
      next:(r)=>{this.actorMovies =  r.cast},
    })
  }


  customOptions: OwlOptions = {
    loop: false,
    autoplay:true,
    autoplayTimeout: 2000,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 15,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
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
