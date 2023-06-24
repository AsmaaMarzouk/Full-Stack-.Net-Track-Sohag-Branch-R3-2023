import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.css'],
})
export class UserTemplateFormComponent {
  user:Iuser={} as Iuser;
  constructor(private userService: UserService,private router:Router) {}

  addUser() {
    // let user: Iuser = {
    //   // id:8,
    //   firstName: 'Sara',
    //   lastName: 'Wael',
    //   email: 'sara@gmail.com',
    // };
    // this.userService.signupUser(user).subscribe({
    //   next:(data)=>{
    //     console.log(data);

    //   },
    //   error:(error)=>{
    //     console.log(error);

    //   }
    // })



    this.userService.signupUser(this.user).subscribe({
      next:(data)=>{

        this.router.navigate(['/Products']);
        console.log(data);

      },
      error:(err)=>{
        console.log(err);

      }
    })

  }
}
