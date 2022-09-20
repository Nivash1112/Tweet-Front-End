import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/UserModel.model';
import { UserRegistrationService } from 'src/app/services/user-registration/user-registration.service';

@Component({
  selector: 'app-view-users-page',
  templateUrl: './view-users-page.component.html',
  styleUrls: ['./view-users-page.component.css']
})
export class ViewUsersPageComponent implements OnInit {

  myFormGroup : FormGroup;
  showSearchedText : boolean = false;
  searchedText : string;
  enableButtonForSearch : boolean = false;
  userModel : UserModel[];
  noUsersToDisplay : boolean = false;
  constructor(formBuilder : FormBuilder, public userService : UserRegistrationService, public router : Router) { 
    this.myFormGroup=formBuilder.group({
      "search" : new FormControl("",Validators.required),
    })
  }

  enableSearchButton(){
    let enteredUserName = this.myFormGroup.controls['search'].value;
    if(enteredUserName.length>0){
      this.enableButtonForSearch = true;
    }else{
      this.enableButtonForSearch = false;
    }

  }


  search(){
    let enteredUserName = this.myFormGroup.controls['search'].value;
    if(enteredUserName.length>0){
      this.userService.searchUser(enteredUserName).subscribe(response=>{
        this.userModel = response;
        if(this.userModel.length==0){
          this.noUsersToDisplay = true;
        }else{
          this.noUsersToDisplay = false;
        }
      })
      this.showSearchedText = true;
      this.searchedText = enteredUserName;
      this.myFormGroup.controls['search'].reset();
      this.enableButtonForSearch = false;
    }
    else{
    this.showSearchedText = false;  
    }
  }

  getDetails(username : string){
    this.router.navigate(['/user-tweets/'+username]);
  }

  
  ngOnInit(): void {
    if(this.enableButtonForSearch){
      this.search();
    }else{
      this.userService.getAllUsers().subscribe(response =>{
        console.log("this is response from getalluser "+response)
        let currentUser = sessionStorage.getItem('user');
        this.userModel = response;
        if(this.userModel.length==0){
          this.noUsersToDisplay = true;
        }else{
          this.noUsersToDisplay = false;
        }
       })
    }
    
  }

}
