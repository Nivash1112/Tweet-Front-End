import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel.model';
import { UserRegistrationService } from 'src/app/services/user-registration/user-registration.service';


@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {
  name : string;
  userModel : UserModel;
  constructor(public router : Router , public userService : UserRegistrationService) {}
  
  logout(){
    sessionStorage.clear();
  }

  getDetails(){
    
    this.router.navigate(['/user-tweet/'+this.name]);
  }

  ngOnInit(): void {
    this.name = sessionStorage.getItem('username').toLocaleUpperCase();
    this.userService.getAllUsers().subscribe(response =>{
      this.userModel=response;
    });
  }

}
