import { NgModule    } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesLimitNumPipe } from './pips/movies-limit-num.pipe';
import { LimitWordsNumPipe } from './pips/limit-words-num.pipe';
import { MoviesComponent } from './movies/movies.component';
import { RealTimeSearchPipe } from './pips/real-time-search.pipe';
import { TvComponent } from './tv/tv.component';
import { ActorsComponent } from './actors/actors.component';
import { LimitOfPaginationPipe } from './pips/limit-of-pagination.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    MoviesLimitNumPipe,
    LimitWordsNumPipe,
    MoviesComponent,
    RealTimeSearchPipe,
    TvComponent,
    ActorsComponent,
    LimitOfPaginationPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
