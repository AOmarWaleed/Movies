import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  prefixImgPath:string = "https://image.tmdb.org/t/p/w500/";
  constructor(private _httpClient:HttpClient) { }
  getTrending(type:string):Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=62f0575b1238bcece0563212f2f2ccc2`);
  }

  getDetails(id:string ,type:string):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=62f0575b1238bcece0563212f2f2ccc2&language=en-US`)
  }

  getPage(numOfPage:number ,type:string):Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/discover/${type}?api_key=62f0575b1238bcece0563212f2f2ccc2&language=en-US&page=${numOfPage}`)
  }

  getActorMovies(id:string):Observable<any> {
    return this._httpClient.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=62f0575b1238bcece0563212f2f2ccc2&language=en-US`)
  }

}
