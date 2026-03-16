import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html'
})
export class SignupComponent {

  user:any={
    name:'',
    email:'',
    password:''
  }

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  register(){

    this.authService.signup(this.user).subscribe({

      next:(res)=>{

        alert("Signup successful");

        // redirect to notes page
        this.router.navigate(['/notes']);

      },

      error:(err)=>{
        alert("Signup failed");
      }

    });

  }

}