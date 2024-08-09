import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/sharData/auth.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData:User = {};
  constructor(private _suthService:AuthService) { }

  ngOnInit(): void {
    this.userData = this._suthService.userData.getValue();
  }

}
