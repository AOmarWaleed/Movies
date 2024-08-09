import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sharData/auth.service';
import { User } from '../user';



@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogin:boolean = false;
  userData:User = {last_name:"",first_name:"",email:"",age:1,iat:1,id:""};
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next:()=>{
        if(this._AuthService.userData.getValue()){
          this.isLogin = true;
          this.userData = this._AuthService.userData.getValue();
        }else {
          this.isLogin = false;
        }
      }
    })
  }




  logOut(){
    this._AuthService.logout()
  }

}
