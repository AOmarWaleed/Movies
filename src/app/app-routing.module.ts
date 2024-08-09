import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthReverceGuard } from './guards/auth-reverce.guard';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ActorsComponent } from './actors/actors.component';
import { TvComponent } from './tv/tv.component';



const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:"full"},
  {path:'home', canActivate:[AuthGuard],component:HomeComponent,title:"home" },
  {path:'movies',canActivate:[AuthGuard],component:MoviesComponent,title:"movies"},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent,title:"tv"},
  {path:'actors',canActivate:[AuthGuard],component:ActorsComponent,title:"actors"},
  {path:'register',canActivate:[AuthReverceGuard] ,component:RegisterComponent,title:"register"},
  {path:'login',canActivate:[AuthReverceGuard] ,component:LoginComponent,title:"login"},
  {path:'details/:id/:type',canActivate:[AuthGuard],component:DetailsComponent,title:"details"},
  {path:'settings',canActivate:[AuthGuard], loadChildren:()=> import('./settings/settings.module').then((e)=>e.SettingsModule)},
  {path:'**',component:NotFoundComponent,title:"404"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
