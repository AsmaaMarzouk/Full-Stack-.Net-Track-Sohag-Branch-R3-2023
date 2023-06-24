import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// Day5
@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.css']
})
export class UserReactiveFormComponent {
userForm: FormGroup;
constructor(private fb: FormBuilder){
  // this.userForm=new FormGroup({
  //   firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  //   lastName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]),
  //   email:new FormControl('',[Validators.required]),

  // });

this.userForm=this.fb.group({
  firstName:['', [Validators.required,Validators.minLength(3)]],
 lastName:['',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]],
 email:['',[Validators.required]]
})
}
get firstName(){
  return this.userForm.get('firstName');
}
get lastName(){
  return this.userForm.get('lastName');
}









add(){
  // userservice
}
}
